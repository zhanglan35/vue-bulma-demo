// inspried by https://github.com/chenz24/vue-blu/build
// thanks you very very very much @chenz24!

module.exports = md => {
  md.use(require('markdown-it-container'), 'vue-demo', {
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        let params = tokens[idx].info.trim().split(' ')
        const isCollapsable = params.includes('collapsable')
        tokens = tokens.slice(idx)
        let codeToken = tokens.find(token => token.tag === 'code')

        return `<VueCodeDemo code="${codeToken && escape(codeToken.content)}" ${isCollapsable ? 'collapsable' : ''}>`
      } else {
        return '</VueCodeDemo>'
      }
    }
  })
}
