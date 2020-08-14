const Category = require('../model/category')
//获取种类的中间件
module.exports = {
	//获取所有的种类
	getCategories: (req, res, next) => {
		Category.getCategories()
			.then(results => {
				req.categories = results
				next()
			})
			.catch(err => {
				next(err)
			})
	}
}
