<template>
  <input
    type="text"
    :class="klass"
    v-bind="$attrs"
    v-on="listeners"
    :disabled="disabled"
    :readonly="readonly"
  />
</template>

<script>
export default {
  props: {
    size: String,
    color: String,
    static: Boolean,
    rounded: String,
    focused: Boolean,
    disabled: Boolean,
    readonly: Boolean
  },

  computed: {
    klass () {
      return [
        'input',
        this.static && 'is-static',
        this.rouned && 'is-rounded',
        this.focused && 'is-focused',
        this.size && 'is-' + this.size,
        this.color && 'is-' + this.color,
      ]
    },

    listeners () {
      const res = {}

      for (let key in this.$listeners) {
        res[key] = (event) => this.$emit(key, event.target.value)
      }

      return res
    }
  }
}
</script>
