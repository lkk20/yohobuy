//购物车
module.exports = class Cart extends require('./model') {
	// 加放入购物车
	static addToCar(userid, proid, quantity, sku, image, name, price) {
		return new Promise((resolve, reject) => {
			let sql =
				'INSERT INTO cart (userid,proid,quantity,sku,image,name,price) VALUES (?,?,?,?,?,?,?)'
			this.query(sql, [userid, proid, quantity * 1, sku, image, name, price])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//检查一下购物车重复商品
	static checkCar(userid, proid, sku) {
		return new Promise((resolve, reject) => {
			let sql =
				'SELECT carid,quantity FROM cart WHERE userid = ? AND proid = ? AND sku = ?'
			this.query(sql, [userid, proid, sku])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	static addQuantity(quantity, carid) {
		return new Promise((resolve, reject) => {
			let sql = 'UPDATE cart SET quantity = ? WHERE carid = ?'
			this.query(sql, [quantity, carid])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//根据用户查询购物车
	static queryCar(userid) {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM cart WHERE userid = ?'
			this.query(sql, userid)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//改变商品数量
	static changeQuantity(quantity, carid) {
		return new Promise((resolve, reject) => {
			let sql = 'UPDATE cart SET quantity = ? WHERE carid = ?'
			this.query(sql, [quantity, carid])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//改变选中状态
	static changeChecked(checked, carid) {
		return new Promise((resolve, reject) => {
			let sql = 'UPDATE cart SET checked = ? WHERE carid = ?'
			this.query(sql, [checked, carid])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//删除所有
	static deleteAll(userid) {
		return new Promise((resolve, reject) => {
			let sql = 'DELETE FROM cart WHERE userid = ?'
			this.query(sql, userid)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
	//删除单个
	static delete(carid) {
		return new Promise((resolve, reject) => {
			let sql = 'DELETE FROM cart WHERE carid = ?'
			this.query(sql, carid)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`加购商品失败：${err.message}`)
					reject(err)
				})
		})
	}
}
