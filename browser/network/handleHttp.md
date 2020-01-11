# HTTP 请求容错处理

## TLDR

请求接口的时候，理想状态下，我们只需考虑发出请求，接收到数据，然后渲染页面就好了，但是你不知道你的用户在什么环境下面上网，因此在发出请求到接收数据的过程我们需要做一些容错处理。典型的有：超时处理，接口出错做一些兜底操作，超时重新请求接口。

## 准备

首先，我们用 setTimeout 模拟一个异步请求

```js
const request = () => {};
```

## 错误处理

```ts
let time = 2;
const request: () => Promise<boolean> = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time >= 1) {
        console.log("reject");
        time--;
        reject(true);
      } else {
        console.log("solved");
        resolve(true);
      }
    }, 2000);
  });
};
const RequestWithRetry = async (func, retry) => {
  try {
    return await func();
  } catch (err) {
    if (retry) {
      return RequestWithRetry(func, retry - 1)();
    }
  }
};
RequestWithRetry(request, 3);
```

## 超时处理

## 重连处理

## 将 error first 的函数封装成 promise 的函数
