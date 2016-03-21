// 回调函数在执行完任务后就会被调用，Node所有API都支持回调函数

var fs = require('fs');

fs.readFile('04input.txt', function(err, data)
{
	if (err)
	{
		return console.log(err);
	}

	console.log(data.toString());
});

console.log('程序结束！');