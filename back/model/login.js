//登录功能
module.exports = class Login extends require('./model') {
	static checkPassword(username, password) {
		return new Promise((resolve, reject) => {
			let sql =
				'SELECT userid,`name`,role FROM `user` WHERE username = ? AND PASSWORD = ?'
			this.query(sql, [username, password])
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`登录失败：${err.message}`)
					reject(err)
				})
		})
	}
}
