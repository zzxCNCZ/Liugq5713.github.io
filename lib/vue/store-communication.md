# 模式 简单状态管理 Store 模式

在 vue 中，通信有几种形式：

- 父子组件 emit/on
- vuex 中共享 state
- 跨组件 EventBus

文档中的提到的 Store 模式却鲜有人去使用讨论。笔者在研究 ElementUI 的 Table 组件的代码组织方式觉得其在复杂组件组织上非常有用，是一个被忽视的组件通信方法。

## [简单状态管理 store 模式](https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8)

官方示例代码：

```js
var store = {
  debug: true,
  state: {
    message: "Hello!"
  },
  setMessageAction(newValue) {
    if (this.debug) console.log("setMessageAction triggered with", newValue);
    this.state.message = newValue;
  },
  clearMessageAction() {
    if (this.debug) console.log("clearMessageAction triggered");
    this.state.message = "";
  }
};
```

> 官方介绍：所有 store 中 state 的改变，都放置在 store 自身的 action 中去管理。这种集中式状态管理能够被更容易地理解哪种类型的 mutation 将会发生，以及它们是如何被触发。当错误出现时，我们现在也会有一个 log 记录 bug 之前发生了什么。此外，每个实例/组件仍然可以拥有和管理自己的私有状态

![数据流图](https://cn.vuejs.org/images/state.png)

官方版的介绍过于简陋，不妨我们更进一步，学习一下 ElementUI 的 Table 组件是如何用 Store 组织一个复杂组件的

## 为什么需要 Store 模式

ElementUI 的 Table 组件，功能很多。该组件由父组件 Table.vue 和众多子组件 layout-observer，table-body，table-column，table-footer,table-header，table-layout 组成。看 ElementUI 文档就觉得 Table 组件复杂。

如果把子组件的事件都 emit 到父组件处理，那么父组件得接收多少事件。并且子组件部分功能会影响父组件的布局。并且 Table 的部分数据大多数子组件都需要，你要一个一个通过 Porp 传入吗？自顶向下的数据流动开发困难。不如把这些共享的数据放在一个地方,我们自然很容易想到 Vuex，但是 ElementUI 库引入 ElementUI 引入 Vuex，你觉得合适吗，并且数据共享仅仅是在 Table 组件里面，并不是全局的数据，因此采用 Store 模式再好不过了。

ElementUI 模仿了 Vuex 的使用方式。有兴趣的读者可以看一下 Table 组件中[table-store.js](https://github.com/ElemeFE/element/blob/dev/packages/table/src/table-store.js)

模仿 Vuex 的一个好处就是我后期如果项目大了，可以十分平滑的引入 Vuex，并且如果你熟悉 Vuex，使用 Store 模式没有任何认知成本

## 实践

笔者用 Store 模式改造了我之前的[ElementUI 的表单在线编辑器](https://github.com/Liugq5713/vue-element-form-editor)，之前的主页面由表单元素资源区，表单属性编辑区，表单元素拖拽区，表单元素属性编辑区，JSON 表单生成区，代码生成区。然而整个页面就维护表单对象，表单元素列表，表单元素属性这几个值，然而这些值在多个子组件里面都起了一定的作用，一开始没有集中处理，导致数据会意外变化，不知道是那个组件引起的。后使用 Store 模式集中处理之后，代码逻辑清楚很多

![项目展示](https://wpimg.wallstcn.com/f661c498-2e13-46b4-8c97-d8e1325b1d88.gif)
这种方式其实就是把数据管理，数据更新的功能交给了 Store。如果你熟悉 Vuex 的话，应该很快能理解我在说什么

> 通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护

![数据流](https://wpimg.wallstcn.com/995a834d-32e5-4f4a-866a-84a37d46ef71.png)

### 声明一个 Store 对象

```js
const FormStore = function(form, initialState = {}) {
   // 将父组件的示例保存在Store里面
  if (!form) {
    throw new Error('Form is required.')
  }
  this.form = form

  this.states = { ... }
  // initialState 里面的值必须是 this.states声明过的，这样所有状态的变化应该都在store里面可以查找，并由store控制
  for (let prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop]
    }
  }
}
```

### mutations

> Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的   事件类型 (type)  和 一个   回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

我们这里也模仿它，注意这里我们只放同步的代码，异步代码自己处理

```js
FormStore.prototype.mutations = {
  setFormAttribute(states, formAttribute) {
    this.states = { ...states, formAttribute };
  },
  setFormItems(states, formItems) {
    this.states = { ...states, formItems };
  },
  setClickedIndex(states, clickedIndex) {
    this.states = { ...states, clickedIndex };
  },
  setFormItemToHandle(states, formItemToHandle) {
    this.states = { ...states, formItemToHandle };
  },
  setItemInFormItems(states, idx, formItem) {
    states.formItems.splice(idx, 1, formItem);
  },
  setFromItems(states, formItems) {
    this.states = { ...states, formItems };
  }
};
```

### commit

复杂数据结构的父子组件的数据通信用`emit`和`v-on`事件流容易混乱，尤其是对象嵌套对象的时候。采用 Store 模式，子组件和父组件之间有了 store 这个桥梁，通过 commit 来分发事件

在 commit 函数里面，打上一个`console.log`，事件的变化全部掌握在你的手里。就像使用 Vuex 一样

```js
// 定义
FormStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  console.log("emit", name);
  if (mutations[name]) {
    // states 作为第一个参数
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};
// 分发事件
this.store.commit("setFormItemToHandle", val);
```

### 使用

在父组件的 data 里面创建 store，然后把 store 传入到各个子组件里面去。代码逻辑非常清楚

```js
data() {
    const store = new FormStore(this);
    return {
      store
    };
},
computed: {
    form() {
      return this.store.states.formAttribute;
    }
},
methods: {
    genFormItem(val) {
        this.store.commit("setFormItemToHandle", val);
      }
    }
}
```

## Store 模式 vs EventBus

Vuex 的优点即是 Store 模式的优点

1. 易于调试与管理
2. 和 EventBus 差不多的便捷，虽然做不到全局发事件，接受事件，但是如果有这种情况的话，为什么不试试 Vuex 呢
3. 可局部应用，职责专一

EventBus 在代码量增多的情况下：

1. 代码逻辑性极具下降，可阅读性变低
2. 对于每一个 action 父组件都需要一个 on(或 dispatch)一个事件来处理
3. 你将很难查找到每一个事件是从哪里触发，满篇都是业务逻辑

## Store 模式 vs Vuex

有的时候，我们可能不知道是否该使用 Vuex，虽然 Redux 的作者 Dan Abramov 的话这么说：

> Flux 架构就像眼镜：您自会知道什么时候需要它

但是我可能只是轻微的近视，不带眼镜也可以，但是看东西不太清楚，带上眼镜又感觉有点累赘，这个时候就需要我们的 Store 模式

Vuex 负责全局状态的管理，Store 模式负责局部状态的交流

Store 模式可以在你写一个大型组件的时候，单独在该组件中使用，不用数据都放在 Vuex 里面，作为多个子组件和父组件通信的桥梁使用

多人开发的时候，每个人负责的业务有单独的 Store 也不会互相影响

你甚至可以使用多个 Store 去组织你所有的代码

## 总结

模仿 Vuex，我们多了一种组织复杂组件或局部状态管理的新思路，在你写复杂的组件，又不想污染全局的 Vuex，又需要将状态在多个组件中共享，则可以考虑一下 Store 模式，和 Vuex 一样方便，和 EventBus 一样轻量

既然采用了模仿 Vuex 的方式，代码风格就要贯彻到底，毕竟 Store 模式没有强力的约束，不能像 ElementUI 一样，代码里面还有直接修改 states 语句（逃

eg:
`this.store.states.treeData = this.getTableTreeData(value);`

[体验我基于 Store 模式改造的 ElementUI 表单编辑器项目](https://so-easy.cc/vue-element-form-editor/)，记得点个小星星哦，[查看项目地址](https://github.com/Liugq5713/vue-element-form-editor)

## 参考

- [简单状态管理起步使用](https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8)
- [Vuex](https://vuex.vuejs.org/)
- [知乎讨论：Vuex 应不应该用作页面组件通信？](https://www.zhihu.com/question/61940655/answer/194573797)
