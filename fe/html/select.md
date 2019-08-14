# select 没有 placeholder

起因是一个小朋友问我，原生的`select`标签我怎么添加不了`placeholder`啊。我当时内心是有点小鄙视的，直接加上不就好了。

结果，自然我是添加不上。因为`select`标签根本就没有 placehodler 属性。日常开发使用`elememt-ui`的我自然也就忽视了它

原生的通常使用如下方式添加`placeholder`

```html
<select id="pet-select">
  <option value="">-- choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
</select>
```

但是对于我们这些爱学习的人来说，了解到这是远远不够的。我们去瞄一眼`element`的`select`源码

虽然我没看过什么源码，但是我知道一开始不能陷入到源码的细节里面去。

其`select`组件的 `packages\select\src\select.vue`的`template`也不过如此的感觉。（对，就这样，不要怕，不要对源码有畏惧心理，虽然八百多行）

它的模拟`select`的方式和我之前了解的差不多。

```html
<div class="el-select">
  <!--显示框-->
  <div class="el-select__tags"></div>
  <!--下拉框-->
  <div>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
```

原理就是这个原理，但是想要完成`element-ui`的`select`组件的功能那可能就是要费点功夫了。

但是看了半天，总不能说自己没收获吧。分享一个里面的一个`util`函数吧。我是觉得这个名字比较好玩 `isKorean` 我第一眼看，还以为是否是韩国人的意思。怎么的，`element`还对韩国人有特殊对待啊。哈哈哈，其实不是。这个方法也很短，贴在下面。

```js
export function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
```

把这个 unicode 放到[谷歌里面查了一下](https://stackoverflow.com/questions/32239102/korean-and-alphabet-regex-returning-false)，就是用来判断是否是韩文的。不知道是不是韩文比较特殊，还是我理解错了，它如果有其他的作用，可以偷偷告诉我

顺便查了一下用这个`isKorean`函数`handleComposition`，由之前没见过的事件`compositionstart`,`compositionupdate`,`compositionend` 调用。

![44758d1aadfc129b60b5f6307e57c697.png](en-resource://database/3190:1)

[compositionstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)定义：

fired when a text composition system such as an input method editor starts a new composition session.

我看了一下掘金上面对于使用这个事件的解释：[为了解决中文输入法输入内容时还没将中文插入到输入框就验证的问题](https://juejin.im/post/5b924684f265da0a9a394c57)，但是我个人认为 该事件作用于一个 `input`上，并且这个`input`需要`filterable`为`true`，即这个`input`框用于远程搜索的，那么解决的问题应该是 当你输入拼音时不会去调用远程方法

能力一般，水平有限，如果有错误，请多多指教
