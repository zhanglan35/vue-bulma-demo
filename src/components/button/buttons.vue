<template>
  <div :class="klass">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    addons: Boolean,
    centered: Boolean,
  },

  computed: {
    klass () {
      return [
        'buttons',
        this.right && 'is-right',
        this.addons && 'has-addons',
        this.centered && 'is-centered'
      ]
    }
  }
}
</script>
