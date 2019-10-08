# Test

## Jest

Jest is a framework and not a library. It comes with a test runner, assertion library, and good mocking support.

Jest has a novel way to test react components: **Snapshot testing**.

| Enzyme                                                                                         | Jest                                                                                            |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Enzyme is a testing library to render the react component into the DOM and query the DOM tree. | Jest is a unit testing framework and has a test runner, assertion library, and mocking support. |

### jest 的基础应用

> 测试在前端越来越正规的情况下，肯定是越来越好的，我有一个非常好的应用场景就是 [leetcode 刷题](https://leetcode.com/problemset/all/)，它提供了测试用例，并且你在 leetcode 上有错误的时候，它也是提供了用例的。并且编写一个函数的测试用例简单，我觉得先用起来，感受到它的好最重要。

使用 Jest 的第一个问题就是 jest 的测试语句被 eslint 报错了。解决问题也十分的简单，就是在 eslint 配置里 env 字段将 jest 设为 true

```js
  "env": {
    "jest": true
  }
```

## Enzyme

Enzyme is a library that wraps packages like React TestUtils, JSDOM and CheerIO to create a simpler interface for writing unit tests.

| library         | feature                                                                        |
| --------------- | ------------------------------------------------------------------------------ |
| React TestUtils | has methods to render a react component into a document and simulate an event. |
| JSDOM           | a JavaScript implementation of the DOM (Document object model).                |
| CheerIO         | a subset of jQuery core and is used to query the DOM.                          |

Enzyme is **not** a unit testing framework. It does not have a test runner or an assertion library.
