# 组件通信

react 组件通信有常见的四种方式

- 父传子：父子组件通信最为简单，父组件向子组件传递 props，子组件接受父组件的回调
- 跨级组件通信：（使用 Context，典型的是 Redux)
- 兄弟组件：在父组件维护 state，兄弟组件接受 props，兄弟组件修改父组件 state。
- 全局事件通信：全局事件需要保证派发事件时，监听者必须存在，否则可能会导致监听不到事件的发生，两种解决方式，1.存储发布的事件，当有订阅者订阅时执行存储的已发布事件，或者监听 DomContentLoaded 之后再进行事件派发，保证监听者已经存在。

  ```js
  // 派发事件
  const event = new CustomEvent("changeItem", {
    detail: {
      id
    }
  });
  document.dispatchEvent(event);

  // 监听事件
  document.addEventListener("changeItem", this.handleItemChange.bind(this));
  ```

## 参考

- [React 填坑记（一）：组件通信](https://zhuanlan.zhihu.com/p/28272942)
- [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
