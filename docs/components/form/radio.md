---
sidebarDepth: 0
---

# Radio

## 基本用法

`value` 是一个 `boolean` 值，分别表示 `选中` 与 `待选` 两种状态

`disabled` 的作用和效果同 `checkbox`

::: vue-demo
``` html
<template>
  <Control>
    <Radio v-model="sex" value="man">男</Radio>
    <Radio value="female" :data="sex" @input="sex = 'female'">女</Radio>
    <Radio v-model="sex" value="neither" disabled>没别的了吗？？？</Radio>
  </Control>
</template>
<script>
export default {
  data () {
    return {
      sex: 'man'
    }
  }
}
</script>
```
:::
