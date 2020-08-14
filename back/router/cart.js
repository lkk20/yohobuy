const express = require('express')
const Cart = require('../middleware/cart')

const indexApp = express()
//加购
indexApp.post('/add', [Cart.addToCar], (req, res) => {
	let { car } = req
	res.json(car)
})
indexApp.post('/query', [Cart.queryCar], (req, res) => {
	let { car } = req
	res.json(car)
})
indexApp.post('/quantity', [Cart.changeQuantity], (req, res) => {
	let { car } = req
	res.json(car)
})
indexApp.post('/checked', [Cart.changeChecked], (req, res) => {
	let { car } = req
	res.json(car)
})
indexApp.post('/deleteall', [Cart.deleteAll], (req, res) => {
	let { car } = req
	res.json(car)
})
indexApp.post('/delete', [Cart.delete], (req, res) => {
	let { car } = req
	res.json(car)
})
module.exports = indexApp
