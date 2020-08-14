const Login = require('../model/login')

//中间件
module.exports = {
	checkPassword: (req, res, next) => {
		let { username, password } = req.body
		Login.checkPassword(username, password)
			.then(results => {
				req.userinfo = results
				next()
			})
			.catch(err => {
				next(err)
			})
	}
}
