const express = require('express');

//2.创建服务器对象
let server = express();

const path = require('path');
const Alipay = require('alipay-node-sdk');
const cors = require("cors");
let outTradeId = Date.now().toString();

let ali = new Alipay({
    appId: '2016102400751493',
    notifyUrl: 'http://3e3044v032.qicp.vip/notifyUrl',
    rsaPrivate: path.resolve('./pem/sandbox_private.pem'),
    rsaPublic: path.resolve('./pem/sandbox_ali_public.pem'),
    sandbox: true,
    signType: 'RSA2'
});
server.use(cors({
　　methods: ["GET", "POST"],
　　alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
}));
// 静态托管文件
server.use('/public',express.static(__dirname + '/public'));
//3.创建一个路由对象
let router = express.Router();
//4.设置路由

let OrderID = ''
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
    
}).get('/register',(req, res) => {
	let ALIPAY_RSA = "MIIEowIBAAKCAQEAiGyNjpUy5uLd1nYiEcDRRCm3LS3dd/7VroT8Zeb5tMtnlYHJz46gkYWMGzxz+K2He7D+JZoMXhvblRBUhIBayjLTWH+9q8ObLxCRLsxC7wKCojmTiwTObr89Ohz+afy0VT4T1RDCRokZts0LrAjJOT5GrnNAKFRi/d+bgajMzP8tjMWJPOYcqikQUgqa3s9f4eZdr1yvI2c5mGAzXt1N6Pji3th4ASvoJdgmhiAByKl3PxdShESEyuKzjpDouFWdUJnwwxUra1hRmS1LFTFi1Y0VYIiTHKj0Xlq2xF+DOZcHYMMp7wxuCp7U27kiJeQGqaXbyUjlRrLbVmWmwM9DGwIDAQABAoIBAEEVmMsnPuuL3E3Oeh6CINQmGq/BK+FtgEAMTeXHteWdDMP08XTGFLCYR+lOg/1lvDc0j2sc/T2AiNeqvMeh/K5uZQnZl4F0hnqDqt/qrxwb1HrUgSFXn6ySLAGnh3DFELuCLDAAGM9R5SSi2iiu4GEg5tOfREJ5T+jSXvwSrfI2KkquNVwpaDUS1GvkFhUQl1B2IDH0jcyOy6BdLZIL76uaU+YluplbEqTXjuWob0bnFamJtxhxDbeGaDKhEiNukRmGFHJRANJQgpBZYnDDXy50k0cx0SE3f4V6o+3Bs4R+xrukcniARX33o1dAEBDiDjL8oRa6T798ziMQzD+14FECgYEA9gJDE6BaJpWg++o6peyatuqTC/q2+Ec3ZAEnfns8/df0wmG7SsoFdzx6woUYwdEmbO3Ke8ZSQqjWmQY/5rhHhAvZTnnAcAEm0u55rsU3PjY5TGRrnzBYI5FZf8jOAVAZh+GL9UfoX8oVrh2OJPPR6G2v/I/+OBnHNXWTBn8J2LcCgYEAjfbx4PeOXY3EpBAZskm2I4/NrCGSYG/XRgQlQL5HCQQ13R2U6LUU0iaTQI6mbfir7PN0426KLHJq9BcmiiBoUvFXgLJik5hL0dCtVQ+W+QgqfOwF9XQ2NzCEnhjAtTtM5sp343A+Y0GGgRA/VUnlc/O4hz4tMktkF/wMOYMb3L0CgYEAgfZD9VRbC9M0TqE5BnruaP+XW1bB3nvQ+VXaxWjZmcjClwYGacY8CPe8apLht1KEmDsvIyBsSKblZ8XzcDGeJlYUIO8VCJazKe+t/PRW8Ni4gHD0og5qIbAhte4hVnQ4aJ5wz82DJ0edGHSoqUDdfYqk1CpFxOFpagaI+3+VdhUCgYACmxzXh1PKrdaFOHJwTmAUiQg6d6dLM+Jcu6i/Zn7BUJ14gJmCKAjIzsJ3NeciL6VgRRvJLPdGV5dVAbPIZ03i7+EuUJf0o6AIqu7zl8Sqr5awElkNp2NzYeWdTVEEQqFnvyGyQBY1FjfU2KqA80lN9pRVjzOfL7kXo53J1HlHdQKBgFR2kmBAvtXRRbJKi5FoxRBPyi0CsvM7qTvulgRDYYbKIQJIOYGZt8QKlYUbd7VDcbOP9ndQ5YYE8GVhM4IUZkmPf6u60D69j1TL6Dqdx2bt4zQtwfe0UqnK+p0ZmwxeppGIOT60FFhUU4ZeQPG7ZtYl3ZpsXVwe2E8G9GJQrzeZ"
	let publickey = ['-----BEGIN RSA PRIVATE KEY-----\n'];
	let i = 0;
	while(i < ALIPAY_RSA.length)
	{
	    publickey.push(ALIPAY_RSA.substring(i, i + 64) + '\n');
	    i += 64;
	}
	publickey.push('-----END RSA PRIVATE KEY-----');
    res.send(publickey.join(''));
}).post('/pagePay',(req, res) => {
	OrderID = outTradeId
	var params = ali.pagePay({
	    subject: 'ipad',
	    body: 'ipad商品描述',
	    outTradeId: outTradeId,
	    timeout: '10m',
	    amount: '10000.00',
	    goodsType: '0',
	    qrPayMode: 0
	});
	var url_API = 'https://openapi.alipaydev.com/gateway.do?' + params;
	res.send(url_API)
}).post('/appPay',(req,res)=>{
	// console.log(req.params)
	OrderID = outTradeId
	var params = ali.appPay({
	    subject: '三星u20',
	    body: '三星u20商品描述',
	    outTradeId: outTradeId,
	    timeout: '10m',
	    amount: '2000.00',
	    goodsType: '0'
	});
	var url_API = 'https://openapi.alipaydev.com/gateway.do?'+params;
	res.send(params)
}).post('/wapPay',(req,res)=>{
	OrderID = outTradeId
	var params = ali.wapPay({
	    subject: '苹果11',
	    body: '苹果11商品描述',
	    outTradeId: outTradeId,
	    timeout: '10m',
	    amount: '8000.00',
	    goodsType: '0'
	});
	var url_API = 'https://openapi.alipaydev.com/gateway.do?'+params;
	res.send(url_API)
}).post("/notifyUrl", (req,res) => {
	ali.query({
	    outTradeId: OrderID
	}).then(function (ret) {
	    console.log("***** ret.body=" + ret.body);
	    
	    //签名校验
	    var ok = ali.signVerify(ret.json());
		console.log(ok)
	});
});
server.use(router);

//5.监听端口
server.listen(8888,(req,res)=>{
    console.log('Server running at http://127.0.0.1:8888/')
});