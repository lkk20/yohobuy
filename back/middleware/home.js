const Home = require('../model/home')
//获取种类的中间件
module.exports = {
	//获取所有的种类
	getHomeImages: (req, res, next) => {
		Home.getHomeImages()
			.then(results => {
				req.homeImages = results
				next()
			})
			.catch(err => {
				next(err)
			})
	}
}
