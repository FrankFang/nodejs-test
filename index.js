var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8080;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  if(path === '/loadMore'){
    response.setHeader('Access-Control-Allow-Origin', '*')  // 设置响应头 Content-Type
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type')  // 设置响应头 Content-Type
    response.end('hi')
  }else if(path === '/'){  // 如果用户请求的是 / 路径
    var string = fs.readFileSync('./index.html')  // 就读取 index.html 的内容
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
    response.end(string)   // 设置响应消息体
  }if(path === '/style.css'){   // 如果用户请求的是 /style.css 路径
    var string = fs.readFileSync('./style.css')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  }else{  // 如果上面都不是用户请求的路径
    response.statusCode = 404
    response.end('Not Found')
  }

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 '+ port+ ' 成功')
