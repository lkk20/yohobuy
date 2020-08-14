//入口模块
const express = require('express')
const path = require('path')
const fs = require('fs')

const bodyParser = require('body-parser')

//后期开发再继续添加新的功能
//创建主应用
const app = express()
//设置跨域访问
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
	)
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
	res.header('X-Powered-By', ' 3.2.1')
	res.setHeader('Content-Type', 'application/json;charset=utf-8')
	next()
})
//对POST请求处理
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//接口
//products开头的
app.use('/products', require('./router/product'))
//category开头的
app.use('/categories', require('./router/category'))
//search
app.use('/search', require('./router/search'))
//home
app.use('/home', require('./router/home'))
//login
app.use('/login', require('./router/login'))
//cart
app.use('/cart', require('./router/cart'))
app.listen(3000)
