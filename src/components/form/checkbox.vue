<template>
  <label
    :class="labelClass"
    :style="labelStyle"
    @click="handleClick">
    <span
      :class="spanClass">
      <i :class="'iconfont icon-' + iconName"/>
    </span>
    <slot/>
  </label>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    disabled: Boolean,
    value: [Boolean, String]
  },

  computed: {
    iconName () {
      switch (this.value) {
        case true:
          return 'checkbox-checked'

          break
        case false:
          return 'checkbox'

          break
        case 'minus':
          return 'checkbox-minus'

          break
      }
    },

    labelClass () {
      return [
        'checkbox',
        this.disabled && 'has-text-grey-light'
      ]
    },

    labelStyle () {
      return {
        display: this.inline ? 'inline' : 'block'
      }
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
        this.$emit('input', Boolean(!this.value))
      }

      this.$emit('click')
    }
  }
}
</script>
