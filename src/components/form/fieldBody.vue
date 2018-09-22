<template>
  <div :class="klass">
    <slot/>
  </div>
</template>

<script>
export default {
  computed: {
    klass () {
      return [
        'field-body'
      ]
    }
  }
}
</script>
