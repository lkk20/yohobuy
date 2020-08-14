const Product = require('../model/product')
//中间件
module.exports = {
	getRecommendProduct: (req, res, next) => {
		//参数要接受数字* 1，转换
		let limit
		req.query.limit ? (limit = req.query.limit * 1) : (limit = 2)
		Product.getRecommendProduct(limit)
			.then(results => {
				req.products = results
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//根据proid获取商品
	getProductByProid: (req, res, next) => {
		let proid = req.query.proid
		Product.getProductByProid(proid)
			.then(results => {
				req.products = results
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//根据选择的类别获取商品
	getProductsByCateid: (req, res, next) => {
		let cateid = req.query.cateid
		let limit
		req.query.limit ? (limit = req.query.limit * 1) : (limit = 10)
		Product.getProductsByCateid(cateid, limit)
			.then(results => {
				req.products = results
				next()
			})
			.catch(err => {
				next(err)
			})
	}
}
