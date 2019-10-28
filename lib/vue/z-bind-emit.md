# 双向绑定

## Object.defineProperty()

## 发布订阅模式

```js
// 声明事件管理类
class EventManager {
  constructor() {
    this.subscriberMap = {}
  }

  /**
   * 订阅事件
   * @param {*} hash
   * @param {*} subscriber
   */
  subscribe(hash, subscriber) {
    var arr = this.subscriberMap[hash]
    if (!arr) {
      arr = this.subscriberMap[hash] = []
    }
    // 判断事件对应的回调函数是否存在，防止重复添加。
    if (!arr.includes(subscriber)) {
      arr.push(subscriber)
    }
  }

  /**
   * 发布事件
   * @returns {boolean}
   */
  publish() {
    let hash = [].shift.call(arguments)
    let fns = this.subscriberMap[hash]
    if (!fns || fns.length == 0) {
      return false
    }
    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
  }

  /**
   * 移除某个事件的订阅
   * @param hash {String}
   * @param subscriber {ReceiveEventAgent}
   */
  remove(hash, subscriber) {
    var arr = this.subscriberMap[hash]
    if (!arr) {
      return false
    }
    var index = arr.indexOf(subscriber)
    if (index > -1) {
      arr.splice(index, 1)
    }
  }
}
```
