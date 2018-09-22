---
sidebarDepth: 0
---

# Icon

### 选择图标库

支持任何图标库，这里以 [Font Awesome](https://github.com/FortAwesome/Font-Awesome) 为例。

``` html
<link href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" rel="stylesheet/>
```

或者

``` css
@import url("https://use.fontawesome.com/releases/v5.3.1/css/all.css")
```

### 注册组件

“注册”本质上是定义一个函数，返回符合图标库的 `class` 各式的类名

``` javascript
import vb from 'vue-bulma-ui'

// eg: `search` => `fas fa-search`
vb.registerIcon = name => 'fas fa-' + name
```

### 使用组件

传入 `name` 调用具体的图标

::: vue-demo
``` vue
<Icon name="search" />
<Icon name="bars" />
<Icon name="home" />
```
:::

### color && size
:::vue-demo
``` vue
<Icon name="info-circle" color="success" size="2rem" />
<Icon name="check-square" color="info" size="2rem" />
<Icon name="exclamation-triangle" color="warning" size="2rem" />
<Icon name="ban" color="danger" size="2rem" />
```
:::

<!-- 
::: danger 图标库
还是需要提一下，这里没有任何内置的图标库，你至少需要像上面那样引入并注册一个图标库才能使用图标组件
::: -->

## props

<!-- 
| name  | type    | comment          | default  |
| ----- | ------- | ---------------- | -------- |
| name  | string  | icon name        | required |
| color | string  | icon color       | ''       |
| size  | string  | icon font size   | ''       |
| left  | boolean | 配合其他组件使用    | false    |
| right | boolean | 配合其他组件使用    | false    | -->
