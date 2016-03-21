// 回调函数在执行完任务后就会被调用，Node所有API都支持回调函数

var fs = require('fs');
var data = fs.readFileSync('03input.txt');

console.log(data.toString());
console.log('程序结束！');