const express = require('express')
const Search = require('../middleware/search')

const indexApp = express()
//获取所有种类接口
indexApp.get('/:text?/:limit?', [Search.searchProduct], (req, res) => {
	let { products } = req
	res.json(products)
})
module.exports = indexApp
