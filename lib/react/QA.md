# 常见问题

## React does not recognize the `staticContext` prop on a DOM element？

[common question](https://reactjs.org/warnings/unknown-prop.html)

The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property. You should ensure that your DOM elements do not have spurious props floating around.

The spread operator can be used to pull variables off props, and put the remaining props into a variable.
