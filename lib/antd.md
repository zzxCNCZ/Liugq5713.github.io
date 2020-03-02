# Antd

## [checkbox 模拟 radio](https://github.com/ant-design/ant-design/issues/7182)

直接用 checkbox，然后 prefixCls="ant-radio"就能模拟出 radio 的样式，然后限制一下选择个数就行

## Form 表单自定义 validate

[为什么表单验证的 rules 中使用 validator 时，其方法体总是需要调用 callback()](https://github.com/ant-design/ant-design/issues/5155)

how does async-validator know an asynchronous procedure is end, if you don't use callback to notify it?

使用 callback 是为了让 async-validator 感知

## Antd 的 Form 表单

form 表单 有方法让你可以检测 表单是否被用户修改过`isFieldsTouched`，如果用户提交完表单之后，`resetFields`，重置 form 表单

## Q ： You cannot set a form field before rendering a field associated with the value.

这里触发的原因就是

if your form doesn't have the fields these you set, this error will appear!
