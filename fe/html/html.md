# HTML

## Element.closest

Element.closest()  方法用来获取：匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回  null。

## ChildNode.remove()

The ChildNode.remove() method removes the object from the tree it belongs to.

## 元素

### link 标签

`<a href='xxx' target='_black' ></a>`

您的页面链接至使用 target="\_blank" 的另一个页面时，新页面将与您的页面在同一个进程上运行。 如果新页面正在执行开销极大的 JavaScript，您的页面性能可能会受影响。此外，target="\_blank" 也是一个安全漏洞。新的页面可以通过 window.opener 访问您的窗口对象，并且它可以使用 window.opener.location = newURL 将您的页面导航至不同的网址。

因此需要添加一个属性

`<a href='xxx' target='_black' rel='noopener' ></a>`

具体的性能分析[文章](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)

### radio

`input` elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.

### label

label 的 for 属性和 input 的 id 属性相同，点击 label 的时候选择对应的选项

如果其被选中，那么 input.checked 的属性为 false

### 利用 HTML FORM 属性做验证

> 能用 html 解决的事情就不要取用 js

### form validation

- get the right data, in the right format
- protect our users
- protect ourselves

### input

#### type=hidden

输入框不会显示，但是数据还是可以提交到移动端。（不要用类来隐藏表单）

### pre

The HTML `<pre>` element represents preformatted text which is to be presented exactly as written in the HTML file.

## 宽高

### 窗口的高度

- innerHeight
- clientHeight

为了兼容的写法

```js
var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
```

### 滚动高度

涉及到 4 个 DOM 属性，clientHeight, offsetHeight, scrollHeight, scrollTop,所有 DOM 元素都有上述 4 各属性，只需要给它固定大小并设置 overflow:scroll 即可表现出来。

- clientHeight: 内部可视区域大小。

  returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin

- offsetHeight：整个可视区域大小，包括 border 和 scrollbar 在内。

  is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.

- scrollHeight：元素内容的高度，包括溢出部分。

  is a measurement of the height of an element’s content including content not visible on the screen due to overflow

- scrollTop：元素内容向上滚动了多少像素，如果没有滚动则为 0。

  the number of pixels that the content of an element is scrolled upward.

### 获取宽高

`Element.getBoundingClientRect`:returns the size of an element and its position relative to the viewport.Properties other than width and height are relative to the top-left of the viewport.

## 前端搜索

### 原生实现

[<datalist> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)，不需要 JavaScript 就能实现的本地搜索，可以看一下 MDN ,自己去试一下

```html
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
<datalist id="ice-cream-flavors">
  <option value="Chocolate"> </option>
  <option value="Coconut"> </option>
  <option value="Mint"> </option>
  <option value="Strawberry"> </option>
  <option value="Vanilla"> </option>
</datalist>
```

通过给 input 添加新的属性，还能有滑块的效果，惊了个呆

```html
<input
  type="range"
  name="donation"
  id="donation"
  list="donation_list"
  step="5"
  min="5"
  max="200"
/>
<datalist id="donation_list">
  <option>25</option>
  <option>50</option>
  <option>100</option>
  <option>200</option>
</datalist>
```

###   正则表达式

通过正则表达式进行匹配，筛选出匹配的项即可

`new RegExp(escapeRegexpString(query), 'i').test(xxx)`
