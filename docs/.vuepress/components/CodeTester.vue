<template>
  <Columns style="position: absolute; left: 0; width: 100%; padding-left: 2rem; padding-right: 2rem">
    <Column narrow>
      <Field style="min-width: 500px">
        <Control>
          <textarea v-model="code" class="textarea" rows="20"/>
        </Control>
      </Field>

      <Field>
        <Control>
          <Button @click="handleClick" color="primary">
            在线运行
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
