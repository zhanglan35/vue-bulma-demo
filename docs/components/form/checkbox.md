---
sidebarDepth: 0
---

# checkbox

## 基本用法

没有任何内部状态，完全通过 `props` 和 `event` 完成组件的更新

`input` 事件会传递当前 `value` 的值取否，构成 `v-model` 语法糖

`disabled` 能够将组件禁用，禁用的组件将不再触发 `input` 事件，但 `click` 事件正常

::: vue-demo
``` html
<template>
  <div>
    <Checkbox
      :value="checked"
      @click="checked = !checked">
      我同意以上协议
    </Checkbox>
    <Checkbox v-model="checked2">
      我真的同意以上协议
    </Checkbox>
    <Checkbox
      disabled
      :value="checked4"
      @click="checked4 = !checked4">
      我真的真的真的同意协议
    </Checkbox>
    <Checkbox v-model="checked3" disabled>
      协议呢？？？
    </Checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      checked2: false,
      checked3: true,
      checked4: true
    }
  }
}
</script>
```
:::

## value

`value` 通常是 `boolean` 类型，还支持一个字符串值：`minus`

::: vue-demo
``` html
<Checkbox :value="true" inline />
<Checkbox :value="false" inline />
<Checkbox value="minus" inline />
```
:::
