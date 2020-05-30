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

### 复杂表单组件

常见的优化方式

1. 自定义表单元素

将表单也分为几个模块，然后把每一个模块都单独拆出来当做单独的表单元素，不过这样处理，表单验证也需要自己去做，需要自定义表单验证的方式。

2. 当表单元素具有增删改的操作时，一种做法是把增删改的元素封装成自定义的表单元素，另一种就是通过遍历动态生成表单元素

```js
const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input passenger's name or delete this field.",
            },
          ],
        })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
```

### adb 命令

调试台灯的时候，常常要看连接的设备 `adb devices`

在台灯里面输入地址比较麻烦，我们也可以通过 adb 命令来帮助我们输入 `adb shell input text yourInput`

### z-index 管理

z-index 如果是开发的时候随便填的数值，那么当层级多了的时候就很容易乱。不同的层级，各种齐齐怪怪的数值。如果你用变量的话，层级之间关系会变动，改起来就会很痛苦。

还好我们使用了 styled=components 以及 ts，我们通过枚举变量来设置层级。想插入层级的时候直接插入，由于枚举的特性，层级会自动后延，非常的方便。

## antd 表单

1： 动态增删表单 使用 Form.List
2, 多个表单之间联动，使用 Form.Provider
3，条件表单，使用 shouldUpdate
