// 1. 引入require模块
var http = require('http');

// 2. 创建服务器
var server = http.createServer(function(request, response)
{
	// 3. 发送HTTP头部
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 4.发送响应数据
	response.end('Hello Node.js!');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

// node server.js 执行文件
// 打开浏览器访问 http://127.0.0.1:8888/，你会看到一个写着 "Hello Node.js!"的网页。