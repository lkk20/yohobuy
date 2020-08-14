//搜索
module.exports = class Search extends require('./model') {
	// 搜索获取产品
	//目前支持一个词模糊搜索
	static searchProduct(text, limit) {
		return new Promise((resolve, reject) => {
			let sql =
				'SELECT proid,`name`,mainimage,oldprice,price,stock FROM product WHERE NAME LIKE  "%"?"%" LIMIT ?'
			this.query(sql, [text, limit])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取搜索商品失败：${err.message}`)
					reject(err)
				})
		})
	}
}
