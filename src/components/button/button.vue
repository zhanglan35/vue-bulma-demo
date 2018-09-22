<template>
  <a
    @click="disabled || $emit('click')"
    :class="buttonClass"
    :disabled="disabled"
  ><slot/></a>
</template>

<script>
export default {
  name: 'Button',

  props: {
    width: String,

    size: String,
    color: String,
    rounded: Boolean,
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    loading: Boolean,
    static: Boolean,
    hovered: Boolean,
    disabled: Boolean,
    selected: Boolean
  },

  computed: {
    buttonClass () {
      const { color, size } = this

      return [
        'button',
        size && 'is-' + size,
        color && 'is-' + color,
        this.fullwidth && 'is-fullwidth',
        this.outlined && 'is-outlined',
        this.inverted && 'is-inverted',
        this.rounded && 'is-rounded',
        this.focused && 'is-focused',
        this.active && 'is-active',
        this.loading && 'is-loading',
        this.static && 'is-static',
        this.hovered && 'is-hovered',
        this.selected && 'is-selected'
      ]
    },

    buttonStyle () {
      const { width } = this
      const style = {}

      if (width) {
        style.width = width
      }

      return style
    }
  }
}
</script>
