---
sidebarDepth: 0
---

# Input

## 基本用法

::: vue-demo
``` html
<template>
  <Input v-model="value" />
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
```
:::

## color

:::vue-demo collapsable
``` html
<Input color="primary" placeholder="Primary" />

<div style="height: 0.75rem"/>

<Input color="info" placeholder="Info" />

<div style="height: 0.75rem"/>

<Input color="success" placeholder="Success" />

<div style="height: 0.75rem"/>

<Input color="warning" placeholder="Warning" />

<div style="height: 0.75rem"/>

<Input color="danger" placeholder="Danger" />
```
:::

## size

:::vue-demo collapsable
``` html
<Field>
  <Control>
    <Input size="small" placeholder="Small"/>
  </Control>
</Field>

<Field>
  <Control>
    <Input class="input"placeholder="Normal"/>
  </Control>
</Field>

<Field>
  <Control>
    <Input size="medium "placeholder="Medium"/>
  </Control>
</Field>

<Field>
  <Control>
    <Input size="large" placeholder="Large"/>
  </Control>
</Field>
```
:::

## rounded

::: vue-demo
``` html
<Input rounded />
```
:::

## focused

::: vue-demo
``` html
<Input focused />
```
:::

## loading

::: vue-demo
``` html
<Field>
  <Control size="small" loading>
    <Input size="small"/>
  </Control>
</Field>
<Field>
  <Control loading>
    <Input />
  </Control>
</Field>
<Field>
  <Control size="medium" loading>
    <Input size="medium"/>
  </Control>
</Field>
<Field>
  <Control size="large" loading>
    <Input size="large"/>
  </Control>
</Field>
```
:::

## disabled

::: vue-demo
``` html
<Input value="disabled" disabled />
```
:::

## readonly

::: vue-demo
```html
<Input value="readonly" readonly />
```
:::

## static

::: vue-demo
``` html
<Input value="这里其实可以输入内容" static />
```
:::

## Icons

::: vue-demo
``` html
<Control left-icon right-icon>
  <Input size="large" />
  <Icon name="envelope" left/>
  <Icon name="check" right/>
</Control>
```
:::
