# styled-components

## theme

强烈推荐使用 theme ,使用常用的颜色，保持规范

```js
import { DefaultTheme } from 'styled-components/native';

interface CustomTheme {
  TextDullBlack: string;
  TextBlack: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
```

- [Theming](https://styled-components.com/docs/advanced#function-themes)
- [Strongly typed theme property](https://github.com/styled-components/styled-components/issues/1589)
