<template>
  <span :class="spanClass" :style="spanStyle">
    <i :class="iconClass" :style="iconStyle"/>
  </span>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    name: String,

    size: String,

    color: String,

    left: Boolean,

    right: Boolean
  },

  data () {
    return {
      config
    }
  },

  computed: {
    spanStyle () {
      const style = {}
      if (this.size) {
        style.width = this.size,
        style.height = this.size
        style['font-size'] = this.size
      }

      return style
    },

    spanClass () {
      return [
        'icon',
        this.left && 'is-left',
        this.right && 'is-right',
        'has-text-' + this.color
      ]
    },

    iconClass () {
      return config.register(this.name)
    },

    iconStyle () {
      const style = {}

      if (this.size) {
        style['font-size'] = this.size
        style['line-height'] = this.size
      }

      return style
    }
  }
}

export const config = {
  register: () => {}
}
</script>
