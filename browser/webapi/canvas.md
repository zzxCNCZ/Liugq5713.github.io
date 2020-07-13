# Canvas

## [canvas width and height](https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5)

if you do set the CSS attributes, and they differ from the canvas dimensions, your content will be **scaled** in the browser.

- 通过 css 设置 canvas 的 property

// 缩放 canvas
canvas.style.width ='200px'

- 通过 js 设置 canvas 的 attribute

// 设置 canvas 本身的宽
canvas.width = 200
