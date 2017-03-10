var http = require('http')
var fs = require('fs')
var url = require('url')
var querystring = require("querystring");    //用于解析POST请求

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function (request, response) {

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  console.log(request.method + ' ' + path)

  if (request.method === 'GET') {
    if (path === '/') {  // 如果用户请求的是 / 路径
      var string = fs.readFileSync('./index.html')  // 就读取 index.html 的内容
      response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
      response.end(string)   // 设置响应消息体
    } if (path === '/style.css') {   // 如果用户请求的是 /style.css 路径
      var string = fs.readFileSync('./style.css')
      response.setHeader('Content-Type', 'text/css')
      response.end(string)
    } if (path === '/print-style.css') {  // 如果用户请求的是 /print-style.css 路径
      var string = fs.readFileSync('./print-style.css')
      response.setHeader('Content-Type', 'text/css')
      response.end(string)
    } if (path === '/main.js') {  // 如果用户请求的是 /main.js 路径
      var string = fs.readFileSync('./main.js')
      response.setHeader('Content-Type', 'application/javascript')
      response.end(string)
    } else {  // 如果上面都不是用户请求的路径
      response.end('404')
    }
  } else if (request.method === 'POST') {
    if (path === '/') {
      var payload = "";

      request.addListener("data", function (chunk) {
        payload += chunk;
      })

      //POST结束输出结果
      request.addListener("end", function () {
        var params = querystring.parse(payload);
        console.log(params)
        response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
        response.end('这是 POST 返回的页面');
      })
    }
  }


  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 8888 成功')
