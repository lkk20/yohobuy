const express = require('express')
const Category = require('../middleware/category')

const indexApp = express()
//获取所有种类接口
indexApp.get('/all', [Category.getCategories], (req, res) => {
	let { categories } = req
	let classify = {}

	let roots = categories.filter(category => {
		return category.parentid == 0
	})
	roots.forEach(root => {
		let parents = categories.filter(category => {
			return category.parentid == root.cateid
		})
		classify[root.text] = {
			items: [],
			activeIds: 1,
			activeIndex: 0
		}
		parents.forEach((parent, index) => {
			classify[root.text].items[index] = {
				text: parent.text,
				children: [{ text: `全部${parent.text}`, id: parent.cateid }]
			}
			let childrens = categories.filter(category => {
				return category.parentid == parent.cateid
			})
			childrens.forEach(children => {
				classify[root.text].items[index].children.push({
					text: children.text,
					id: children.cateid
				})
			})
		})
	})

	res.json(classify)
})
module.exports = indexApp
