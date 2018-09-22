var hijs = require('highlight.js')

var code = '<template></template>'

var result = hijs.highlightAuto(code)

console.log(result.value)
