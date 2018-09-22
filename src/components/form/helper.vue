<template>
  <p :class="klass"><slot></slot></p>
</template>

<script>
export default {
  props: {
    color: String
  },

  computed: {
    klass () {
      return [
        'help',
        this.color && 'is-' + this.color
      ]
    }
  }
}
</script>
