<template>
  <div :class="klass">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    loading: Boolean,
    leftIcon: Boolean,
    expanded: Boolean,
    rightIcon: Boolean
  },

  computed: {
    klass () {
      return [
        'control',
        this.loading && 'is-loading',
        this.size && 'is-' + this.size,
        this.expanded && 'is-expanded',
        this.leftIcon && 'has-icons-left',
        this.rightIcon && 'has-icons-right'
      ]
    }
  }
}
</script>
