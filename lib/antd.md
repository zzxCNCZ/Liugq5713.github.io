# Antd

## 面包屑

面包屑导航(BreadcrumbNavigation)这个概念来自童话故事“汉赛尔和格莱特”，当汉赛尔和格莱特穿过森林时，不小心迷路了，但是他们发现在沿途走过的地方都撒下了面包屑，让这些面包屑来帮助他们找到回家的路。所以，面包屑导航的作用是告诉访问者他们目前在网站中的位置以及如何返回。

## [checkbox 模拟 radio](https://github.com/ant-design/ant-design/issues/7182)

直接用 checkbox，然后 prefixCls="ant-radio"就能模拟出 radio 的样式，然后限制一下选择个数就行

## Form 表单自定义 validate

[为什么表单验证的 rules 中使用 validator 时，其方法体总是需要调用 callback()](https://github.com/ant-design/ant-design/issues/5155)

how does async-validator know an asynchronous procedure is end, if you don't use callback to notify it?

使用 callback 是为了让 async-validator 感知

## Antd 的 Form 表单

form 表单 有方法让你可以检测 表单是否被用户修改过`isFieldsTouched`，如果用户提交完表单之后，`resetFields`，重置 form 表单

## antd switch

valuePropName 子节点的值的属性，如 Switch 的是 'checked'

如果你表单里面用到了 Switch 组件，那么就要小心这个

## Q ： You cannot set a form field before rendering a field associated with the value.

这里触发的原因就是

if your form doesn't have the fields these you set, this error will appear!

## 表单排列方式

- 水平排列(horizontal)：标签和表单控件水平排列；（默认）
- 垂直排列(vertical)：标签和表单控件上下垂直排列；
- 行内排列(inline)：表单项水平行内排列。

### Form layout

```js
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
```

## 表单域

```js
<Form.Item {...props}>{children}</Form.Item>
```

## 表单方法

## this.props.form.getFieldDecorator(id, options)

经过 getFieldDecorator 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性） onChange（或 trigger 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：

### onchange 事件

你不再需要也不应该用 onChange 来做同步，但还是可以继续监听 onChange 等事件。

### 默认值

你不能用控件的 value defaultValue 等属性来设置表单域的值，**默认值可以用 getFieldDecorator 里的 initialValue。**

### 动态设置表单的值

**你不应该用 setState，可以使用 this.props.form.setFieldsValue 来动态改变表单值。**

## isFieldTouched

判断一个输入控件是否经历过 getFieldDecorator 的值收集时机 options.trigger

代表这个表单字段仅仅被获取焦点之后才会显示错误信息

## antd form 的函数

antd form 的函数很有意思，validateFields，`( [fieldNames: string[]], [options: object], callback(errors, values) ) => void`
写法上十分的灵活。那么它是怎么做到的呢，其实很简单，就是通过定义一个 getParams 函数来判断参数的类型来理顺参数

```js
export function getParams(ns, opt, cb) {
  let names = ns;
  let options = opt;
  let callback = cb;
  if (cb === undefined) {
    if (typeof names === "function") {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(names)) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names,
    options,
    callback,
  };
}
```
