var http = require('http')
var fs = require('fs')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){
  if(request.url === '/1'){
		
		response.end('<title>1</title><script src="/3.css"></script>你请求1干什么？我给你一个随机数'+Math.random())		
		
	}else if(request.url === '/3.css'){
		
    response.setHeader('Content-Type','application/javascript')
		response.end('var a = 1; alert(a);')
		
  }

})

server.listen(port)

console.log('监听成功')
