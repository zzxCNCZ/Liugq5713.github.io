# Puppeteer

无头浏览器

## 处理用户登录状态

可以通个 page 来设置 cookie,但是比较方便的是手动先登录一遍，然后把用户的数据保存下来

```js
const browser = await puppeteer.launch({
  // 展示浏览器
  headless: false,
  //   保存用户数据的文件夹
  userDataDir: "userData",
  //   视口是否有默认值，没有的话，页面会展开
  defaultViewport: null,
});
```

## 执行脚本

```js
await page.evaluate(() => {
  var radios = document.querySelectorAll(".atsx-radio-input");
  for (let i = 1; i < radios.length; i = i + 2) {
    console.log(radios[i]);
    // @ts-ignore
    radios[i].click();
  }
  // 点击提交按钮
  // @ts-ignore
  // document.querySelector(`[data-cy="submitBtn"]`).click();
});
```

## 寻找页面元素

有时候页面没有加载出来，可能页面元素找不到。可以 wait

```js
const el = await page.waitForSelector(".atsx-btn");
el.click();
```

## input 元素上传

```js
let input = await page.waitForXPath('//input[@type="file"]');
await input.uploadFile(path.join(resumePath, filepath));
```

怎么知道它上传完成呢，我们可以通过等待接口返回。如果这个接口返回数据了，我们就当他上传成功了。

```js
await page.waitForResponse("https://xxx");
```

## 参考

- [基于 Puppeteer 实现网页自动化操作](http://imhxl.com/post/puppeteer.html)
