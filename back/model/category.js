//获取种类
module.exports = class Category extends require('./model') {
	//获取所有种类
	static getCategories() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT cateid,parentid,`text` FROM category '
			this.query(sql)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取所有种类失败：${err.message}`)
					reject(err)
				})
		})
	}
}
