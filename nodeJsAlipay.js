//网关地址，示例中为沙箱环境,正式环境请修改为https://openapi.alipay.com/gateway.do?
//沙箱环境https://openapi.alipaydev.com/gateway.do?
var GATEWAY_URL='https://openapi.alipay.com/gateway.do?';
var APP_ID='2016102400751493';
//签名方式
var SIGN_TYPE='RSA2';
var PRIVATE_KEY='MIIEowIBAAKCAQEAiGyNjpUy5uLd1nYiEcDRRCm3LS3dd/7VroT8Zeb5tMtnlYHJz46gkYWMGzxz+K2He7D+JZoMXhvblRBUhIBayjLTWH+9q8ObLxCRLsxC7wKCojmTiwTObr89Ohz+afy0VT4T1RDCRokZts0LrAjJOT5GrnNAKFRi/d+bgajMzP8tjMWJPOYcqikQUgqa3s9f4eZdr1yvI2c5mGAzXt1N6Pji3th4ASvoJdgmhiAByKl3PxdShESEyuKzjpDouFWdUJnwwxUra1hRmS1LFTFi1Y0VYIiTHKj0Xlq2xF+DOZcHYMMp7wxuCp7U27kiJeQGqaXbyUjlRrLbVmWmwM9DGwIDAQABAoIBAEEVmMsnPuuL3E3Oeh6CINQmGq/BK+FtgEAMTeXHteWdDMP08XTGFLCYR+lOg/1lvDc0j2sc/T2AiNeqvMeh/K5uZQnZl4F0hnqDqt/qrxwb1HrUgSFXn6ySLAGnh3DFELuCLDAAGM9R5SSi2iiu4GEg5tOfREJ5T+jSXvwSrfI2KkquNVwpaDUS1GvkFhUQl1B2IDH0jcyOy6BdLZIL76uaU+YluplbEqTXjuWob0bnFamJtxhxDbeGaDKhEiNukRmGFHJRANJQgpBZYnDDXy50k0cx0SE3f4V6o+3Bs4R+xrukcniARX33o1dAEBDiDjL8oRa6T798ziMQzD+14FECgYEA9gJDE6BaJpWg++o6peyatuqTC/q2+Ec3ZAEnfns8/df0wmG7SsoFdzx6woUYwdEmbO3Ke8ZSQqjWmQY/5rhHhAvZTnnAcAEm0u55rsU3PjY5TGRrnzBYI5FZf8jOAVAZh+GL9UfoX8oVrh2OJPPR6G2v/I/+OBnHNXWTBn8J2LcCgYEAjfbx4PeOXY3EpBAZskm2I4/NrCGSYG/XRgQlQL5HCQQ13R2U6LUU0iaTQI6mbfir7PN0426KLHJq9BcmiiBoUvFXgLJik5hL0dCtVQ+W+QgqfOwF9XQ2NzCEnhjAtTtM5sp343A+Y0GGgRA/VUnlc/O4hz4tMktkF/wMOYMb3L0CgYEAgfZD9VRbC9M0TqE5BnruaP+XW1bB3nvQ+VXaxWjZmcjClwYGacY8CPe8apLht1KEmDsvIyBsSKblZ8XzcDGeJlYUIO8VCJazKe+t/PRW8Ni4gHD0og5qIbAhte4hVnQ4aJ5wz82DJ0edGHSoqUDdfYqk1CpFxOFpagaI+3+VdhUCgYACmxzXh1PKrdaFOHJwTmAUiQg6d6dLM+Jcu6i/Zn7BUJ14gJmCKAjIzsJ3NeciL6VgRRvJLPdGV5dVAbPIZ03i7+EuUJf0o6AIqu7zl8Sqr5awElkNp2NzYeWdTVEEQqFnvyGyQBY1FjfU2KqA80lN9pRVjzOfL7kXo53J1HlHdQKBgFR2kmBAvtXRRbJKi5FoxRBPyi0CsvM7qTvulgRDYYbKIQJIOYGZt8QKlYUbd7VDcbOP9ndQ5YYE8GVhM4IUZkmPf6u60D69j1TL6Dqdx2bt4zQtwfe0UqnK+p0ZmwxeppGIOT60FFhUU4ZeQPG7ZtYl3ZpsXVwe2E8G9GJQrzeZ';
var ALI_PUBLIC_KEY='MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAig+nh/PwzvTFAHvU1cXSn2tYyUwlzASqt4ZgDf1hwySzbvx9XnLeoSFrh4q1o3z6c6+XtRc/GLjo9WropkNd8Z6GnLWjsALCnOm7Rh7sQb8HLZO2QBHn4lIXRVj7KEdxBYgxgyb81BZcQPFaZc2CEG3ot2gItcVmzR1kCIPAAnUstSWvbs9+gO00USuJlny1DRHjuy6zahbV0DO1bhyKvlfjU0g8+7VpTNeSCJ9cxCYbXVpZRAdYG2vD+h7e8DG7BbamlWKutK+Mp5uiMvILwnD1fK49O9VLzg+1yUWKbx7xlacUCY9Sxz4lLoy4/8N6yMOOEIRzSQcx+GDcKPQj5QIDAQAB';
//将RSA公私钥转换为PEM格式
var privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' + PRIVATE_KEY + '\n-----END RSA PRIVATE KEY-----';
var aliPublicKey = '-----BEGIN PUBLIC KEY-----\n' + ALI_PUBLIC_KEY + '\n-----END PUBLIC KEY-----';
//准备业务请求参数、签名用的应用私钥、验签用的支付宝公钥，示例中为预下单接口
var requestParams = {
    timestamp: '2020-07-22 18:00:00',
    method: 'alipay.trade.app.pay',
    app_id: APP_ID,
    sign_type: SIGN_TYPE,
    charset:'utf-8',
    version: '1.0',
    biz_content: {
        timeout_express: '30m',
        product_code: 'QUICK_MSECURITY_PAY',
        total_amount: '0.01',
        subject: '订单标题',
        body: '商品描述信息',
        out_trade_no: 'ALIPAYTEST2016081622560194851'
    }
}
//将biz_content参数序列化为JSON格式字符串
requestParams.biz_content=JSON.stringify(requestParams.biz_content);
//去除无效参数，排序并生成待签名字符串
var preStr='';
var keySet=[];
for(var key of Object.keys(requestParams).sort()){
    if(!requestParams[key] || key=='sign'){
        continue;
    }
    keySet.push(key);
}
for(var i=0; i<keySet.length; i++){
    var key=keySet[i];
    var value = requestParams[key];
    if(i==keySet.length-1){
        preStr = preStr + key + '=' + value + '';
    }else{
        preStr = preStr + key + '=' + value + '&';
    }
}

//生成签名
var crypto=require('crypto');
var Base64 = require('Base64/base64');
var signer=crypto.createSign('RSA-SHA256');
if(SIGN_TYPE=='RSA'){
    signer=crypto.createSign('RSA-SHA1');
}
signer.update(preStr);
var sign=signer.sign(privateKey, 'base64');

//请求支付宝
var https = require('https');
var qs = require('querystring');
requestParams.sign=sign;
var content = qs.stringify(requestParams);

console.log("Paratroopers: "+content);

var requestUrl = GATEWAY_URL+content;
https.get(requestUrl, function(res){

    res.setEncoding('utf8')
    res.on('data', function(chunk){
        console.log("响应数据："+ chunk);
        //对响应数据进行验签
        var responseData = JSON.parse(chunk);
        //获取待验签字符串
        var preVerifyStr = JSON.stringify(responseData.alipay_trade_precreate_response);
        //转义正斜杠
        var reg = new RegExp('/',"g");
        preVerifyStr = preVerifyStr.replace(reg,'\\/');
        //验签
        var verifier = crypto.createVerify('RSA-SHA256');
        if(SIGN_TYPE=='RSA'){
            verifier=crypto.createVerify('RSA-SHA1');
        }
        verifier.update(preVerifyStr);
        console.log("验签结果："+verifier.verify(aliPublicKey,responseData.sign,'base64'));
    });
}).on('error',function(e){
    console.log("Got error: " + e.message);
});