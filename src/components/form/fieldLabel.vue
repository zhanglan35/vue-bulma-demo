<template>
  <div :class="klass">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    narrow: Boolean
  },

  computed: {
    klass () {
      return [
        'field-label',
        this.size && 'is-' + this.size
      ]
    }
  }
}
</script>
