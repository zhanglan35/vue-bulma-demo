<template>
  <div class="code-tester">
    <h1 class="title is-4">
      Code
    </h1>
  <Columns>
    <Column narrow>
      <Field style="min-width: 500px">
        <Control>
          <textarea v-model="code" class="textarea" rows="20" style="white-space: nowrap"/>
        </Control>
      </Field>

      <Field>
        <Control>
          <Button @click="handleClick" color="primary">
            Run
          </Button>
        </Control>
      </Field>
    </Column>

    <Column style="margin-left: 20px">
      <Field>
        <Control>
          <component v-if="show" :is="component"/>
        </Control>
      </Field>
    </Column>
  </Columns>
  </div>
</template>

<script>
import { buildCodeToComponent } from '../utils'

export default {
  data () {
    return {
      code: '',
      show: false,
      component: {}
    }
  },

  methods: {
    handleClick () {
      this.show = false
      try {
        this.component = buildCodeToComponent(this.code)
        this.show = true
      } catch (e) {}
    }
  }
}
</script>

<style>
.code-tester {
  left: 0;
  width: 100%;
  position: absolute;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 3rem;
}
</style>
