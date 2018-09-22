---
sidebarDepth: 0
---

# Icon

## 图标库

文档中的图标均来自 [Font Awesome](https://github.com/FortAwesome/Font-Awesome)，
在入口文件的 `style` 块中引入其 `cdn` 就可以开始使用：

``` css
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');
```

### 基本用法

参照 [Bulma Icon](https://bulma.io/documentation/elements/icon/) 文档中的写法

::: vue-demo fixed
``` html
<span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
<span class="icon has-text-success">
  <i class="fas fa-check-square"></i>
</span>
<span class="icon has-text-warning">
  <i class="fas fa-exclamation-triangle"></i>
</span>
<span class="icon has-text-danger">
  <i class="fas fa-ban"></i>
</span>
```
:::
