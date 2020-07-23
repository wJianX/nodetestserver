const fs = require("fs");
const axios = require('axios')

axios.get('http://hdf.xclearn.com:8999/group2/M00/00/74/rBCht16-aY6AW9_iAAEbmWy9DL432.json ').then((response) => {

	let data = response.data
	let itemPools = data.itemPools
	itemPools.map((item, index) => {
		let optionLength = item.option.length
		if (optionLength == 2) {
			item.type = '0'
		} else {
			if (item.rightAnswer.length > 1) {
				item.type = '2'
			} else {
				item.type = '1'
			}
		}
		return item
	})
	data.itemPools = itemPools
	fs.writeFile("./300.json", JSON.stringify(data), error => {
		if (error) return console.log("写入文件失败,原因是" + error.message);
		console.log("写入成功");
	});
}).catch(function(error) {
	console.log(error);
});
axios.get('http://hdf.xclearn.com:8999/group2/M00/00/74/rBChuV6-acaAUPmWAAE_xu6Jh9s03.json').then((response) => {

	let data = response.data
	let itemPools = data.itemPools
	itemPools.map((item, index) => {
		let optionLength = item.option.length
		if (optionLength == 2) {
			item.type = '0'
		} else {
			if (item.rightAnswer.length > 1) {
				item.type = '2'
			} else {
				item.type = '1'
			}
		}
		return item
	})
	data.itemPools = itemPools
	fs.writeFile("./304.json", JSON.stringify(data), error => {
		if (error) return console.log("写入文件失败,原因是" + error.message);
		console.log("写入成功");
	});
}).catch(function(error) {
	console.log(error);
});


axios.get('http://hdf.xclearn.com:8999/group2/M00/00/8A/rBChtl6-afuAKM0CAAFfFD7WOkY30.json').then((response) => {

	let data = response.data
	let itemPools = data.itemPools
	itemPools.map((item, index) => {
		let optionLength = item.option.length
		if (optionLength == 2) {
			item.type = '0'
		} else {
			if (item.rightAnswer.length > 1) {
				item.type = '2'
			} else {
				item.type = '1'
			}
		}
		return item
	})
	data.itemPools = itemPools
	fs.writeFile("./308.json", JSON.stringify(data), error => {
		if (error) return console.log("写入文件失败,原因是" + error.message);
		console.log("写入成功");
	});
}).catch(function(error) {
	console.log(error);
});
// axios.get('http://hdf.xclearn.com:8999/group2/M00/00/29/rBChtl4J0baAEEIjAAD3pVw3qC053.json').then((response) => {

// 	let data = response.data
// 	let itemPools = data.itemPools
// 	itemPools.map((item, index)=>{
// 		let option = item.option
// 		let v = option[0].k + option[0].v
// 		option[0].v = v
// 		option[0].k = "A"
// 		return item
// 	})
// 	data.itemPools = itemPools
// 	fs.writeFile("./1.txt", JSON.stringify(data), error => {
// 	  if (error) return console.log("写入文件失败,原因是" + error.message);
// 	  console.log("写入成功");
// 	});
// }).catch(function(error) {
// 	console.log(error);
// });


// fs.wirteFile有三个参数
// 1,第一个参数是要写入的文件路径
// 2,第二个参数是要写入得内容
// 3,第三个参数是可选参数,表示要写入的文件编码格式,一般就不写,默认就行
// 4,第四个参数是个回调函数  只有一个参数error,来判断是否写入成功
// 如果在使用fs.writeFIle时,要写入文件不存在,则直接写入,如果存在,则会覆盖原内容
