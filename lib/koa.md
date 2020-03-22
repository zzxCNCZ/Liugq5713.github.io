# koa

[这个教程不错](https://www.tutorialspoint.com/koajs/index.htm)

## 起步

辅助工具； nodemon , 当你的文件修改之后，会自动重启 server 端

```js
var koa = require("koa");
var app = new koa();

app.use(async ctx => {
  ctx.body = "Wise Wrong";
});

app.listen(4567, function() {
  console.log("Server running on http://localhost:4567");
});
```

了解两个 app 的方法

app.use(function) − This function is a **middleware**, which gets called whenever our server gets a request. This context is used to access and modify the request and response objects. We are setting the body of this response to be Hello world!.

app.listen(port, function) − This function binds and listens for connections on the specified port. Port is the only required parameter here. The callback function is executed, if the app runs successfully.

## koa 目录结构

路由和 controller ，这边建议是把 controler 和 路由放置在一起

这样的好处就是路由和处理方法一一对应，方便查找。

另外 app.js 文件 仅仅·放一个启动文件，启动这个服务即可

koa 的实例，你应用某些中间件啥的，可以放置在 server.js 文件里面。这样才是很方便的。

## 中间件以级联的方式执行

比如我写了这样三个中间件

```js
app.use(async (ctx, next) => {
  console.log("runing");
  await next();
  console.log("runing after");
});

app.use(async (ctx, next) => {
  console.log("1");
  await next();
  console.log("1-1");
});

app.use(async (ctx, next) => {
  console.log("2");
  await next();
  console.log("2-1");
});
app.use(async ctx => {
  ctx.body = "Wise Wrong";
});
```

其运行的输出结果为：

```txt
1
2
2-1
1-1
runing after
```

当然看了原理之后，我们也可以这么调用

```js
app
  .use(logger())
  .use(bodyParser())
  .use(helmet());
```

## 原理解析

### use 源码

```js
  use(fn) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    if (isGeneratorFunction(fn)) {
      deprecate('Support for generators will be removed in v3. ' +
                'See the documentation for examples of how to convert old middleware ' +
                'https://github.com/koajs/koa/blob/master/docs/migration.md');
      fn = convert(fn);
    }
    debug('use %s', fn._name || fn.name || '-');
    this.middleware.push(fn);
    return this;
  }
```

会把中间件放在 middleware 数组里面，通过 compose() 这个方法，就能将我们传入的中间件数组转换并级联执行

### compose 源码

```js
function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array!");
  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function(context, next) {
    // last called middleware #
    let index = -1;

    // 感觉写的十分的巧妙，dispatch就直接执行了。
    return dispatch(0);
    function dispatch(i) {
      // 如果一个中间件的next执行多次的情况下
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        // 注意到这里，通过bind 传入了i+1的参数，这样直接调用 await next() 就会去执行下一个中间件了（next()调用的时候没有传参数）。
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
```

执行第一个中间件的逻辑时，遇到 await next()时，会继续执行 dispatch(i+1)，也就是执行 dispatch(1)，会手动触发执行第二个中间件。这时候，第一个中间件 await next() 后面的代码就会被 pending，等待 await next() 返回 Promise，才会继续执行第一个中间件 await next() 后面的代码

## koa mount 中间件

[mount](https://github.com/koajs/mount/blob/master/index.js)

## 参考

- [koa 中间件](https://github.com/koajs/compose/blob/master/index.js)
- [深入理解 Koa2 中间件机制](https://segmentfault.com/a/1190000012881491)
