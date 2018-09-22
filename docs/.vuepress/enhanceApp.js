import VueBulma from '../../src'

VueBulma.registerIcon = name => 'fas fa-' + name

export default ({
  Vue
}) => {
  Vue.use(VueBulma.use)
}
