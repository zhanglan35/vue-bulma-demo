---
sidebarDepth: 0
---

# General

表单字段由 `Field`、 `Control` 和 `Label` 构成

`Field` 为容器，`Label` 是字段描述，`Control` 是具体表单组件

## 基本用法

::: vue-demo collapsable
``` html
<template>
  <div style="width: 100%">
    <Field>
      <Label>表单字段1</Label>
      <Control>
        <Input v-model="formData.value1"/>
      </Control>
    </Field>
    <Field>
      <Label>表单字段1</Label>
      <Control>
        <Input v-model="formData.value2"/>
      </Control>
    </Field>
    <Field>
      <Label>Subject</Label>
      <Control>
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </Control>
    </Field>
    <Field>
      <Control>
        <Radio v-model="formData.subscribe" value="month">包月</Radio>
        <Radio v-model="formData.subscribe" value="year">包年</Radio>
      </Control>
    </Field>
    <Field>
      <Control>
        <Checkbox v-model="formData.checked" inline>
          已阅读并同意
        </Checkbox>
        <a>注册条款</a>
      </Control>
    </Field>
    <Field grouped>
      <Control>
        <Button color="primary" @click="handleSubmit">确认</Button>
        <Button color="text">取消</Button>
      </Control>
    </Field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        value1: '',
        value2: '',
        checked: false,
        subscribe: 'month'
      }
    }
  },

  methods: {
    handleSubmit () {
      console.log(this.formData)
    }
  }
}
</script>
```
:::

## Helper

::: vue-demo collapsable
``` html
<Field>
  <Label>邮箱</Label>
  <Control left-icon right-icon>
    <Input color="danger" value="11123@mail,com" />
    <Icon name="envelope" left/>
    <Icon name="check" right/>
  </Control>
  <Helper color="danger">邮箱格式错误</Helper>
</Field>
```
:::

## addons

::: vue-demo collapsable
``` html
<Field addons>
  <Control>
    <Input />
  </Control>
  <Control>
    <Button color="primary">
      Search
    </Button>
  </Control>
</Field>

<Field addons>
  <Control>
    <Input />
  </Control>
  <Control>
    <Button color="primary" static>
      Search
    </Button>
  </Control>
</Field>

<Field addons>
  <Control>
    <div class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </div>
  </Control>
  <Control expanded>
    <Input />
  </Control>
  <Control>
    <Button color="primary">
      Submit
    </Button>
  </Control>
</Field>

<Field addons left>
  <Control>
    <div class="select">
      <select name="country">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
      </select>
    </div>
  </Control>
  <Control>
    <Button color="primary">
      Submit
    </Button>
  </Control>
</Field>

<Field addons center>
  <Control>
    <div class="select">
      <select name="country">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
      </select>
    </div>
  </Control>
  <Control>
    <Button color="primary">
      Submit
    </Button>
  </Control>
</Field>

<Field addons right>
  <Control>
    <div class="select">
      <select name="country">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
      </select>
    </div>
  </Control>
  <Control>
    <Button color="primary">
      Submit
    </Button>
  </Control>
</Field>
```
:::

## grouped

对 `Control` 重新分组

::: vue-demo collapsable
``` html
<Field grouped>
  <Control>
    <Input />
  </Control>
  <Control>
    <Button color="primary">
      One
    </Button>
  </Control>
</Field>

<div style="height: 20px" />

<Field grouped multiline>
  <Control v-for="key in 20" :key="key">
    <Button>Button {{key}}</Button>
  </Control>
</Field>

<div style="height: 20px" />

<Field grouped center multiline>
  <Control v-for="key in 20" :key="key">
    <Button>Button {{key}}</Button>
  </Control>
</Field>
```
:::

## horizontal form

水平表单结构依然基于 `Field`，额外需要 `FieldLabel` 与 `FieldBody`，
表单的大小由 `FieldLabel` 和 `FieldBody` 中的 `Field` 配合调整

`FieldLabel` 中通过 `size` 确定，可选值为 `small | normal | medium | large`

`Field` 高度由 `Control` 内的元素确定，部分元素需要 给`Field` 设置 `narrow`

具体细节需要参考
[Bulma Form](https://bulma.io/documentation/form/general/#horizontal-form)

::: vue-demo collapsable
``` html
<Field horizontal>
  <FieldLabel size="normal">
    <Label>Form</Label>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control left-icon>
        <Input />
        <Icon name="user" />
      </Control>
    </Field>
    <Field>
      <Control left-icon right-icon>
        <Input />
        <Icon name="envelope" />
        <Icon name="check" right />
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel></FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Input />
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel size="normal">
    <Label>Subject</Label>
  </FieldLabel>
  <FieldBody>
    <Field narrow>
      <Control>
        <div class="select">
          <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel>
    <Label>Department</Label>
  </FieldLabel>
  <FieldBody>
    <Field narrow>
      <Control>
        <Radio>Yes</Radio>
        <Radio value="no">No</Radio>
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel size="normal">
    <Label>password</Label>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Input color="danger" />
      </Control>
      <Helper color="danger">
        This field is required
      </Helper>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Checkbox :value="false" inline>
          我同意我同意
        </Checkbox>
        <a>查看条款</a>
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Button color="primary">
          Send Message
        </Button>
      </Control>
    </FIeld>
  </FieldBody>
</Field>
```
:::

## horizontal size

::: vue-demo collapsable
``` html
<Field horizontal>
  <FieldLabel size="small">
    <Label>Small padding</Label>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Input size="small" />
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel>
    <Label>small</Label>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Input size="small" />
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel size="medium">
    <Label>Medium</Label>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Input size="medium" />
      </Control>
    </Field>
  </FieldBody>
</Field>

<Field horizontal>
  <FieldLabel size="large">
    <Label>Large</Label>
  </FieldLabel>
  <FieldBody>
    <Field>
      <Control>
        <Input size="large" />
      </Control>
    </Field>
  </FieldBody>
</Field>
```
:::
