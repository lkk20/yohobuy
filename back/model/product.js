//获取产品
module.exports = class Product extends require('./model') {
	// 获取推荐产品
	static getRecommendProduct(num) {
		return new Promise((resolve, reject) => {
			let sql =
				'SELECT proid,`name`,mainimage,oldprice,price,stock FROM product LIMIT ?'
			this.query(sql, num)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//根据proid获取产品
	static getProductByProid(proid) {
		return new Promise((resolve, reject) => {
			let sql =
				'SELECT proid,`name`,subimages,swiperimages,detail,oldprice,price,stock FROM product WHERE proid = ? LIMIT 1'
			this.query(sql, proid)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//根据类别获取商品
	static getProductsByCateid(cateid, num) {
		return new Promise((resolve, reject) => {
			//查询全部和单个
			let sql =
				cateid.length !== 5
					? 'SELECT proid,`name`,oldprice,price,stock,mainimage FROM product WHERE cateid = ? LIMIT ?'
					: 'SELECT proid,`name`,oldprice,price,stock,mainimage FROM product WHERE cateid IN (SELECT cateid FROM category WHERE  parentid = ?) LIMIT ?'
			this.query(sql, [cateid, num])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//查询全部上衣、全部xx
	static getProductsByParentid(parentid, num) {
		return new Promise((resolve, reject) => {
			let sql = this.query(sql, [parentid, num])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取商品失败：${err.message}`)
					reject(err)
				})
		})
	}
}
