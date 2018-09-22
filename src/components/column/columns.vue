<template>
  <div :class="klass" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    padding: String,
    mobile: Boolean,
    centered: Boolean,
    multiline: Boolean
  },

  computed: {
    klass () {
      return [
        'columns',
        'is-gapless',
        this.mobile && 'is-mobile',
        this.centered && 'is-centered',
        this.multiline && 'is-multiline'
      ]
    },

    style () {
      const style = {}
      const { height, padding, margin } = this

      height && (style.height = height)
      margin && (style.margin = margin)
      padding && (style.padding = padding)

      return style
    }
  }
}
</script>
