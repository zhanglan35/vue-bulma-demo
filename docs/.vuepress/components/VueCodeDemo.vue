<template>
  <div class="box demo-container">
    <div class="code-demo">
      <component :is="component" />
    </div>

    <div class="code-container">
      <div v-if="hasCodeShow" class="code-block-divider"/>

      <slot v-if="hasCodeShow"/>

      <div class="code-block-divider"/>

      <div
        v-if="collapsable"
        class="code-toggle-button"
        @click="isShowCode = !isShowCode">
        <span v-show="isShowCode">⬆</span>
        <span v-show="!isShowCode">⬇</span>
      </div>
    </div>
  </div>
</template>

<script>
let { parseComponent, compile } = require('vue-template-compiler')

export default {
  name: 'VueCodeDemo',

  props: {
    code: String,
    collapsable: Boolean
  },

  data() {
    return {
      component: {},
      sourceCode: '',
      isShowCode: false
    };
  },

  computed: {
    hasCodeShow () {
      if (!this.collapsable) return true

      return this.isShowCode
    }
  },

  methods: {
    buildCodeToComponent (code) {
      const SFC = parseComponent(this.sourceCode)
      let component = {}

      if (SFC.script) {
        component = eval(
          SFC.script.content.replace('export default', 'component =')
        )
      }

      if (SFC.template) {
        component.template = SFC.template.content
      } else {
        component.template = `<div style="width: 100%; height: 100%">${this.sourceCode}</div>`
      }

      return component
    }
  },

  created () {
    this.component = this.buildCodeToComponent(unescape(this.code.trim()))
  },

  watch: {
    code: {
      immediate: true,

      handler (code) {
        this.sourceCode = unescape(code).trim()
        this.component = this.buildCodeToComponent(this.sourceCode)
      }
    }
  }
}
</script>

<style scoped>
.demo-container {
  padding: 0;
  margin-top: 20px;
}

.code-demo,
.code-summary {
  display: flex;
  padding: 1rem;
}

.code-container {
  overflow: auto
}

.code-container pre:not(:last-child) {
  margin-bottom: 0
}

.code-toggle-button {
  height: 2rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.code-toggle-button:hover {
  background-color: #f1f1f1;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.code-block-divider {
  height: 1px;
  background-color: gainsboro;
}
</style>
