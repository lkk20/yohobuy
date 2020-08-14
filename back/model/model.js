//连接数据库
const mysql = require('mysql')
//封装一个基类
module.exports = class Model {
	//连接对象
	static conn = null
	//连接的方法
	static connection() {
		Model.conn = mysql.createConnection({
			host: '127.0.0.1',
			user: 'root',
			password: '123456',
			database: 'store'
		})
		Model.conn.connect(err => {
			if (err) {
				console.log(`数据库连接失败：${err.message}`)
			}
		})
	}
	//每次用完及时关闭掉数据库
	static end() {
		if (Model.conn !== null) {
			Model.conn.end()
		}
	}
	//查询方法
	// @param {string} sql 要执行的SQL语句
	// @param {Array} params 给SQL语句的占位符进行赋值的参数数组
	static query(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.connection()

			Model.conn.query(sql, params, (err, results) => {
				if (err) {
					reject(err)
				} else {
					resolve(results)
				}
			})

			this.end()
		})
	}
}
