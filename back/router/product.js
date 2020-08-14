const express = require('express')
const Product = require('../middleware/product')

const indexApp = express()
//recommendproducts接口
indexApp.get(
	'/recommend/:limit?',
	[Product.getRecommendProduct],
	(req, res) => {
		let { products } = req
		res.json(products)
	}
)
//根据proid获得产品数据
indexApp.get('/proinfo/:proid?', [Product.getProductByProid], (req, res) => {
	let { products } = req
	products.forEach(product => {
		product.detail = product.detail.split(';\r\n')
		product.subimages = product.subimages.split(';\r\n')
		product.swiperimages = product.swiperimages.split(';\r\n')
	})
	res.json(products)
})
//根据类别获得数据
indexApp.get(
	'/bycateid/:cateid?/:limit?',
	[Product.getProductsByCateid],
	(req, res) => {
		let { products } = req
		res.json(products)
	}
)

module.exports = indexApp
