<template>
  <label
    :class="labelClass"
    @click="handleClick">
    <span :class="spanClass">
      <i v-if="data === value" class="iconfont icon-radio-checked"/>
      <i v-else class="iconfont icon-radio"/>
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'data'
  },

  props: {
    data: {},
    value: {},
    disabled: Boolean
  },

  computed: {
    labelClass () {
      return [
        'radio',
        this.disabled && 'has-text-grey-lighter'
      ]
    },

    spanClass () {
      return [
        'icon',
        'has-text-' + (this.disabled ? 'grey-lighter' : 'info')
      ]
    }
  },

  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('input', this.value)
      }

      this.$emit('click')
    }
  }
}
</script>
