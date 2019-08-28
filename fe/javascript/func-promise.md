# Promise

## 串联 Promise

每次调用 then()方法或 catch()方法时，实际上**创建并返回了另一个 Promise**,只有当第一个 promise 完成或者被拒绝后，第二个才会解决

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42)
})

p1.then(function(value) {
  console.log(value)
}).then(function() {
  console.log(finished)
})
```

### Promise 链的返回值

### 在 Promise 链中返回 Promise
