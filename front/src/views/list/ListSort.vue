<template>
	<div>
		<div class="list-sort">
			<ul class="sort">
				<li @click="defaultsort">
					<small :class="{ active: active == 0 }">{{ defaultValue }}</small
					><span
						><van-icon name="arrow-down" v-show="!defaultshow"/><van-icon
							name="arrow-up"
							v-show="defaultshow"
					/></span>
				</li>
				<li @click="newsort">
					<small :class="{ active: active == 1 }">新品</small
					><span><van-icon name="new-arrival-o"/></span>
				</li>
				<li @click="hotsort">
					<small :class="{ active: active == 2 }">人气</small
					><span><van-icon name="fire-o"/></span>
				</li>
				<li @click="pricesort">
					<small :class="{ active: active == 3 }">价格</small
					><span
						><van-icon name="arrow-down" v-show="price"/><van-icon
							name="arrow-up"
							v-show="!price"
					/></span>
				</li>
				<li @click="screensort">
					<small :class="{ active: active == 4 }">筛选</small
					><span><van-icon name="filter-o"/></span>
				</li>
			</ul>
		</div>
		<ul class="default-menu" v-show="defaultshow">
			<li @click="deshow('默认', 'default')">默认</li>
			<li @click="deshow('折扣', 'slth')">折扣从低到高</li>
			<li @click="deshow('折扣', 'shtl')">折扣从高到低</li>
		</ul>
		<div class="screen-menu" v-show="screenshow">
			<van-tree-select
				:items="items"
				:active-id.sync="activeIds"
				:main-active-index.sync="activeIndex"
			/>
			<div class="button">
				<van-button plain round type="primary" @click="getscreen"
					>确认</van-button
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ListSort',
	data() {
		return {
			//选中的变黑
			active: 0,
			defaultValue: '默认',
			defaultshow: false,
			screenshow: false,
			price: false,
			items: [
				{
					text: '上衣',
					children: [
						{
							// 名称
							text: '全部上衣',
							// id，作为匹配选中状态的标识符
							id: '上衣'
						},
						{
							text: 'T恤',
							id: 'T恤'
						}
					]
				},
				{
					text: '裤装',
					children: [
						{
							text: '全部裤装',
							id: 3
						},
						{
							text: '休闲裤',
							id: 4
						}
					]
				}
			],
			activeIds: [],
			activeIndex: 0
		}
	},
	methods: {
		screensort() {
			this.screenshow = !this.screenshow
			this.defaultshow = false
		},
		defaultsort() {
			this.defaultshow = !this.defaultshow
			this.screenshow = false
			this.active = 0
		},
		deshow(value, sort) {
			this.defaultshow = !this.defaultshow
			this.defaultValue = value
			this.$parent.sort = sort
		},
		pricesort() {
			this.price = !this.price
			this.$parent.sort = this.price ? 'phtl' : 'plth'
			this.active = 3
		},
		getscreen() {
			this.screenshow = false
			if (this.activeIds.length !== 0) {
				this.$parent.sort = this.activeIds
				this.active = 4
			}
		},
		hotsort() {
			this.$parent.sort = 'hot'
			this.active = 2
		},
		newsort() {
			this.$parent.sort = 'new'
			this.active = 1
		}
	}
}
</script>

<style scoped lang="less">
.list-sort {
	user-select: none;
	background-color: rgb(238, 234, 234);
	height: 1.875rem;
	.sort {
		color: rgb(97, 94, 94);
		height: 100%;
		font-size: 0.75rem;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		li {
			height: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			small {
				text-align: right;
			}
			.van-icon {
				font-size: 1.25rem;
			}
		}
	}
}
.default-menu {
	position: absolute;
	width: 100%;
	background-color: rgb(255, 255, 255);
	padding-left: 15px;
	border-bottom: 1px solid gray;
	z-index: 10;
	li {
		height: 30px;
		line-height: 30px;
		color: gray;
	}
}
.screen-menu {
	position: absolute;
	width: 100%;
	z-index: 10;
	background-color: white;
	.van-sidebar-item--select::before {
		background-color: white;
	}

	.button {
		text-align: end;
		margin-right: 20%;
	}
}
.active {
	color: black;
}
</style>
