var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  if(path === '/index.html'){
    response.end('11111111')
  }else{
    response.end('404')
  }

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 8888 成功')
