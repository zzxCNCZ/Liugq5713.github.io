# React With Typescript

## 声明时间戳

`private timer: NodeJS.Timeout;`

## [event type](https://stackoverflow.com/questions/42081549/typescript-react-event-types)

```js
update = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLInputElement;
    this.props.login[target.name] = target.value;
}
```
