## .tsx vs .ts

如果你有个`ts`文件，并且你想在这个文件里面使用`jsx`，那么你需要将文件名改为 `tsx`

tsx 和 ts 文件的区别就是 tsx 支持 jsx

typescript 有三种模式

可以看到 preserve 就是原样保留，react 就是把 jsx 转为 React.createElement('div'),react-native 和 preserve 差不多，但是就是文件名上有一点点区别，是 `.js` 文件

| Mode         | Input   | Output                     | Output File Extension |
| ------------ | ------- | -------------------------- | --------------------- |
| preserve     | <div /> | <div />                    | .jsx                  |
| react        | <div /> | React.createElement("div") | .js                   |
| react-native | <div /> | <div />                    | .js                   |
