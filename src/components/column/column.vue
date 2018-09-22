<template>
  <div :class="klass" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    offset: String,
    narrow: Boolean,
    customSize: String
  },

  computed: {
    klass () {
      return [
        'column',
        this.size && this.size,
        this.narrow && 'is-narrow',
        this.offset && 'is-offset-' + this.offset,
      ]
    },

    style () {
      const style = {}

      return style
    }
  }
}
</script>
