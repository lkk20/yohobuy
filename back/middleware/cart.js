const Cart = require('../model/cart')

//中间件
module.exports = {
	addToCar: (req, res, next) => {
		let { userid, proid, quantity, sku, image, name, price } = req.body
		Cart.checkCar(userid, proid, sku)
			.then(results => {
				if (results.length !== 0) {
					Cart.addQuantity(
						quantity * 1 + results[0].quantity * 1,
						results[0].carid
					)
						.then(results => {
							req.car = results
							next()
						})
						.catch(err => {
							next(err)
						})
				} else {
					Cart.addToCar(userid, proid, quantity, sku, image, name, price)
						.then(results => {
							req.car = results
							next()
						})
						.catch(err => {
							next(err)
						})
				}
			})
			.catch(err => {
				next(err)
			})
	},
	//根据用户查询购物车
	queryCar: (req, res, next) => {
		let { userid } = req.body
		Cart.queryCar(userid)
			.then(results => {
				req.car = results
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//改变商品数量
	changeQuantity: (req, res, next) => {
		let { quantity, carid } = req.body
		Cart.changeQuantity(quantity, carid)
			.then(results => {
				req.car = results
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//改变选中状态
	changeChecked: (req, res, next) => {
		let { checked, carid } = req.body
		Cart.changeChecked(checked, carid)
			.then(results => {
				req.car = results
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//删除购物车所有
	deleteAll: (req, res, next) => {
		let { userid } = req.body
		Cart.deleteAll(userid)
			.then(results => {
				req.car = results
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//删除单个
	delete: (req, res, next) => {
		let { carid } = req.body
		Cart.delete(carid)
			.then(results => {
				req.car = results
				next()
			})
			.catch(err => {
				next(err)
			})
	}
}
// addToCar: (req, res, next) => {
// 	let { userid, proid, quantity, sku } = req.body
// 	Cart.addToCar(userid, proid, quantity, sku)
// 		.then(results => {
// 			req.car = results
// 			next()
// 		})
// 		.catch(err => {
// 			next(err)
// 		})
// }
// checkCar: (req, res, next) => {
// 		let { userid, proid, quantity } = req.body
// 		Cart.checkCar(userid, proid, quantity)
// 			.then(results => {
// 				req.car = results
// 				next()
// 			})
// 			.catch(err => {
// 				next(err)
// 			})
// 	},
// 	addQuantity: (req, res, next) => {
// 		let { userid, proid, quantity } = req.body
// 		Cart.addQuantity(quantity, carid)
// 			.then(results => {
// 				req.car = results
// 				next()
// 			})
// 			.catch(err => {
// 				next(err)
// 			})
// 	}
