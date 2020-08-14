//获取首页图片信息
module.exports = class Home extends require('./model') {
	//获取首页图片信息
	static getHomeImages() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM home WHERE id=id'
			this.query(sql)
				.then(results => {
					resolve(results)
				})
				.catch(err => {
					console.log(`获取首页失败：${err.message}`)
					reject(err)
				})
		})
	}
}
