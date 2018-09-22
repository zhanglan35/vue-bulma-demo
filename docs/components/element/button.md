---
sidebarDepth: 0
---

# Button

如果需要很多按钮，则使用 `<Buttons>` 来包裹，使排列更整齐。
<!-- 省略 a, button, input -->

## color

::: vue-demo collapsable
``` html
<Buttons>
  <Button color="white">White</Button>
  <Button color="light">Light</Button>
  <Button color="dark">Dark</Button>
  <Button color="black">Black</Button>
  <Button color="text">Text</Button>
</Buttons>
<Buttons>
  <Button>Normal</Button>
  <Button color="primary">Primary</Button>
  <Button color="link">Link</Button>
  <Button color="info">Info</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>
</Buttons>
```
:::

## size

::: vue-demo collapsable
``` html
<Buttons>
  <Button size="small">Small</Button>
  <Button size="normal">Normal</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</Buttons>
```
:::

## fullwidth

::: vue-demo collapsable
```html
<Buttons>
  <Button size="small" fullwidth>Small</Button>
  <Button fullwidth>Normal</Button>
  <Button size="medium" fullwidth>Medium</Button>
  <Button size="large" fullwidth>Large</Button>
</Buttons>
```
:::

## outlined

::: vue-demo collapsable
```html
<Buttons>
  <Button color="outlined">Outlined</Button>
  <Button color="primary" outlined>Outlined</Button>
  <Button color="link" outlined>Outlined</Button>
  <Button color="info" outlined>Outlined</Button>
  <Button color="success" outlined>Outlined</Button>
  <Button color="danger" outlined>Outlined</Button>
</Buttons>
```
:::

<!-- 省略 inverted 和 invert outlined -->

## rounded

::: vue-demo collapsable
``` html
<Buttons>
  <Button rounded>Normal</Button>
  <Button color="primary" rounded>Primary</Button>
  <Button color="link" rounded>Link</Button>
  <Button color="info" rounded>Info</Button>
  <Button color="success" rounded>Success</Button>
  <Button color="warning" rounded>Warning</Button>
  <Button color="danger" rounded>Danger</Button>
</Buttons>
```
:::

<!-- 省略 states hover -->

## focused

::: vue-demo collapsable
``` html
<Buttons>
  <Button focused>Normal</Button>
  <Button color="primary" focused>Primary</Button>
  <Button color="link" focused>Link</Button>
  <Button color="info" focused>Info</Button>
  <Button color="success" focused>Success</Button>
  <Button color="warning" focused>Warning</Button>
  <Button color="danger" focused>Danger</Button>
</Buttons>
```
:::

## active

::: vue-demo collapsable
``` html
<Buttons>
  <Button active>Normal</Button>
  <Button color="primary" active>Primary</Button>
  <Button color="link" active>Link</Button>
  <Button color="info" active>Info</Button>
  <Button color="success" active>Success</Button>
  <Button color="warning" active>Warning</Button>
  <Button color="danger" active>Danger</Button>
</Buttons>
```
:::

## loading

::: vue-demo collapsable
``` html
<Buttons>
  <Button loading>Normal</Button>
  <Button color="primary" loading>Primary</Button>
  <Button color="link" loading>Link</Button>
  <Button color="info" loading>Info</Button>
  <Button color="success" loading>Success</Button>
  <Button color="warning" loading>Warning</Button>
  <Button color="danger" loading>Danger</Button>
</Buttons>
```
:::


## disabled

::: vue-demo collapsable
``` html
<Buttons>
  <Button disabled>Normal</Button>
  <Button color="primary" disabled>Primary</Button>
  <Button color="link" disabled>Link</Button>
  <Button color="info" disabled>Info</Button>
  <Button color="success" disabled>Success</Button>
  <Button color="warning" disabled>Warning</Button>
  <Button color="danger" disabled>Danger</Button>
</Buttons>
```
:::

## Buttons

::: vue-demo collapsable
``` html
<Buttons>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
  <Button>Four</Button>
  <Button>Five</Button>
  <Button>Six</Button>
  <Button>Seven</Button>
  <Button>Eight</Button>
  <Button>Nine</Button>
  <Button>Ten</Button>
  <Button>Eleven</Button>
  <Button>Twelve</Button>
  <Button>Thirteen</Button>
  <Button>Fourteen</Button>
  <Button>Fifteen</Button>
  <Button>Sixteen</Button>
  <Button>Seventeen</Button>
  <Button>Eighteen</Button>
  <Button>Nineteen</Button>
  <Button>Twenty</Button>
</Buttons>
```
:::

## Buttons addons

::: vue-demo collapsable
``` html
<Buttons addons>
  <Button>
    <Icon name="play"/>
  </Button>
  <Button color="info">
    <Icon name="pause"/>
  </Button>
  <Button>
    <Icon name="stop"/>
  </Button>
</Buttons>
<Buttons addons centered>
  <Button>Yes</Button>
  <Button color="success" selected>No</Button>
  <Button>Go</Button>
</Buttons>
<Buttons addons right>
  <Button>Whatever</Button>
  <Button outlined>Yes</Button>
  <Button color="danger" selected>No</Button>
</Buttons>
```
:::
