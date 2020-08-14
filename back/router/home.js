const express = require('express')
const Home = require('../middleware/home')

const indexApp = express()
//获取所有种类接口
indexApp.get('/allimages', [Home.getHomeImages], (req, res) => {
	let { homeImages } = req
	//把cateid存进来
	let cateid = []
	homeImages.forEach(item => {
		item.Imagesrc ? (item.Imagesrc = item.Imagesrc.split(';\r\n')) : ''
		cateid.push(item.cateid)
	})
	//利用set类型，去重，并且用[...cates]或Array.from(cates)改回数组
	let cates = new Set(cateid)
	//改成对象形式的
	let homeimgs = {}
	Array.from(cates).forEach(cate => {
		homeimgs[cate] = homeImages.filter(e => {
			return e.cateid == cate ? e : ''
		})
	})
	res.json(homeimgs)
})
module.exports = indexApp
