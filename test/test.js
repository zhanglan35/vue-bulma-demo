var fs = require('fs')
var md = require('markdown-it')()

fs.writeFileSync('./markdown', JSON.stringify(md))

require('../docs/.vuepress/markdown/highlight.js')(md)
require('../docs/.vuepress/markdown/vueCodeDemoBuilder.js')(md)

fs.readFile('./code.md', 'utf8', function(err, data){
  var content = md.render(data)
  fs.writeFileSync('./result.md', content, { encoding: 'utf-8' })
})
