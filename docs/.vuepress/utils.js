import { parseComponent } from 'vue-template-compiler'

export function buildCodeToComponent (code) {
  const SFC = parseComponent(code)
  let component = {}

  if (SFC.script) {
    component = eval(
      SFC.script.content.replace('export default', 'component =')
    )
  }

  if (SFC.template) {
    component.template = SFC.template.content
  } else {
    component.template = `<div style="width: 100%; height: 100%">${code}</div>`
  }

  return component
}
