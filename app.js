//首先安装express
//1.引入express
const express = require('express');

//2.创建服务器对象
let server = express();

// 静态托管文件
server.use('/public',express.static(__dirname + '/public'));
//3.创建一个路由对象
let router = express.Router();
//4.设置路由
router.get('/update',(req,res)=>{
	let data = req.query
	let appid = data.appid, versoin = data.version
	versoin = versoin.replace(/\./g, '')
	const NewsVersoin = 101
	if(versoin < NewsVersoin){
		res.send({data:[{status: '1', version: '1.0.2', note: '修复bug1;\n修复bug2;\n修复bug3;\n修复bug4;\n修复bug5;\n修复bug6;', url: 'http://192.168.1.99:8888/public/D876926_0430132536.apk'}],});
	}else{
		res.send({data:[{status: '0', note: '', url: ''}],});
	}
    
}).get('/register',(req,res)=>{
    res.send('这是注册页面');
});
server.use(router);

//5.监听端口
server.listen(8888,(req,res)=>{
    console.log('Server running at http://127.0.0.1:8888/')
});