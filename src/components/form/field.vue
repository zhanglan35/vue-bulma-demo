<template>
  <div :class="klass">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    right: Boolean,
    addons: Boolean,
    center: Boolean,
    narrow: Boolean,
    grouped: Boolean,
    multiline: Boolean,
    horizontal: Boolean
  },

  computed: {
    klass () {
      return [
        'field',
        this.narrow && 'is-narrow',
        this.addons && 'has-addons',
        this.grouped && 'is-grouped',
        this.horizontal && 'is-horizontal',

        (this.addons && this.left) && 'has-addons-left',
        (this.addons && this.right) && 'has-addons-right',
        (this.addons && this.center) && 'has-addons-centered',

        (this.grouped && this.left) && 'is-grouped-left',
        (this.grouped && this.right) && 'is-grouped-right',
        (this.grouped && this.center) && 'is-grouped-centered',
        (this.grouped && this.multiline) && 'is-grouped-multiline'
      ]
    }
  }
}
</script>
