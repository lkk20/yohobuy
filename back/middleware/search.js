const Search = require('../model/search')
//中间件
module.exports = {
	searchProduct: (req, res, next) => {
		//参数要接受数字* 1，转换
		let limit
		req.query.limit ? (limit = req.query.limit * 1) : (limit = 10)
		let text = req.query.text
		Search.searchProduct(text, limit)
			.then(results => {
				req.products = results
				next()
			})
			.catch(err => {
				next(err)
			})
	}
}
