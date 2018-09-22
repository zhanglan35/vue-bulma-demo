---
sidebarDepth: 0
---

# Columns

`Column` 必须嵌套在 `Columns` 内才能生效

::: vue-demo collapsable
``` html
<Columns>
  <Column class="has-background-primary">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-warning">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-success">
    <div style="height: 80px"></div>
  </Column>
</Columns>
```
:::

## size

直接传入数字文本 `"is-1"`，`"is-2"`， ...，`"is-12"` 来按照 `12栅格` 的比例来划分

支持其他的比例，如 `is-one-third`, `is-one-quarter`, `is-three-fifth` 等

`Columns` 中未设置 `size` 的所有 `Column` 将自适应剩余空间

::: vue-demo collapsable
``` html
<Columns>
  <Column class="has-background-primary" size="is-2">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link" size="is-10">
    <div style="height: 80px"></div>
  </Column>
</Columns>

<Columns>
  <Column class="has-background-primary" size="is-one-fifth">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link" size="is-two-fifth">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info" size="is-two-fifth">
    <div style="height: 80px"></div>
  </Column>
</Columns>

<Columns>
  <Column class="has-background-primary" size="is-one-quarter">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>
  </Column>
</Columns>

<Columns>
  <Column class="has-background-warning" size="is-one-third">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link" size="is-one-third">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info" size="is-one-third">
    <div style="height: 80px"></div>
  </Column>
</Columns>

<Columns>
  <Column class="has-background-primary" size="is-half">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-success">
    <div style="height: 80px"></div>
  </Column>
</Columns>
```
:::

## offset

`offset` 控制栅格的偏移量，用法和 `size` 完全一样

::: vue-demo collapsable
``` html
<Columns>
  <Column class="has-background-primary" offset="is-half" size="is-one-quarter">
    <div style="height: 80px"></div>    
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>    
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>    
  </Column>
</Columns>
```
:::

## class & style

支持直接在 `Columns` 和 `Column` 上使用 Vue 中的 
[Class and Style](https://cn.vuejs.org/v2/guide/class-and-style.html) 绑定写法

::: vue-demo collapsable
``` html
<Columns>
  <Column class="has-background-primary" size="is-half">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link" style="margin-left: 20px">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-warning">
    <div style="height: 80px"></div>
  </Column>
</Columns>
```
:::

## narrow

指定了 `narrow` 的 `column` 的尺寸由子元素确定
其他 `column` 将按照自身的 `size` 划分剩余的空间

::: vue-demo collapsable
``` html
<Columns>
  <Column class="has-background-primary" narrow>
    <div style="width: 80px; height: 80px"></div>
  </Column>
  <Column class="has-background-info" size="is-one-third">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>
  </Column>
</Columns>
```
:::

## mobile

当也面尺寸为 mobile 时，栅格将由水平变为纵向，并且对应的 `size` 也将失效

这么做通常很友好，若不需要，可以指定 `mobile` 来锁定水平排列

::: vue-demo collapsable
``` html
<Columns mobile>
  <Column class="has-background-primary">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-warning">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>
  </Column>
</Columns>
```
:::

## custom-size

如果要为不同设备配置不同的 `size`，可以这么写 `is-half-mobile is-one-quarter`

::: vue-demo collapsable
``` html
<Columns style="min-height: 80px">
  <Column
    class="has-background-primary"
    size="is-half-mobile is-one-quarter"
    narrow
  ><div style="width: 40px; height: 80px"></div></Column>
  <Column class="has-background-warning">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-info">
    <div style="height: 80px"></div>
  </Column>
  <Column class="has-background-link">
    <div style="height: 80px"></div>
  </Column>
</Columns>
```
:::

## multiline

如果 `columns` 内的元素过多，可以设置 multiline 来自动换行

::: vue-demo collapsable
``` html
<Columns multiline>
  <Column
    v-for="key in 8"
    :key="key"
    size="is-3"
    class="has-background-primary"
    style="margin: 4px; height: 80px"
  />
</Columns>
```
:::

## centered

`Columns` 中的元素不一定能将宽度撑满，比如上面的情况，导致行尾留白

这时可以通过设置 `centered` 让全部元素居中

::: vue-demo collapsable
``` html
<Columns multiline centered>
  <Column
    v-for="key in 8"
    :key="key"
    size="is-3"
    class="has-background-primary"
    style="margin: 4px; height: 80px"
  />
</Columns>
```
:::
