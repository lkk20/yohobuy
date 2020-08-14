<template>
	<div class="">
		<nav-bar>
			<template v-slot:left>
				<van-icon name="arrow-left" @click="$router.go(-1)" />
			</template>
			<template v-slot:middle>
				收货地址
			</template>
		</nav-bar>
		<van-address-list
			v-model="chosenAddressId"
			:list="list"
			default-tag-text="默认"
			@add="onAdd"
			@edit="onEdit"
		/>
		<van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
			<new-address @newAddress="newAdd" v-if="editOrNew"></new-address>
			<edit-address
				v-else
				:address="clickAddress"
				@changeAddressInfo="changeAddress"
			></edit-address>
		</van-popup>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import NewAddress from './NewAddress'
import EditAddress from './EditAddress'
export default {
	components: {
		NavBar,
		NewAddress,
		EditAddress
	},
	name: 'Address',
	data() {
		return {
			//地址列表
			chosenAddressId: '1',
			list: [
				{
					id: '1',
					name: '张三',
					tel: '13000000000',
					address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
					areaCode: 120104,
					isDefault: true,
					postalCode: 450000
				},
				{
					id: '2',
					name: '张2',
					tel: '13000000000',
					address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
					areaCode: 120104,
					isDefault: true,
					postalCode: 450000
				}
			],
			//弹出层
			show: false,
			//判断展示修改还是新增
			editOrNew: null,
			clickAddress: null,
			editOrDelIndex: null
		}
	},
	methods: {
		//新增地址
		onAdd(e) {
			this.show = true
			this.editOrNew = true
			console.log('新增地址')
		},
		//编辑地址
		onEdit(item, index) {
			console.log(index)
			this.show = true
			this.editOrNew = false
			this.clickAddress = this.list[index]
			this.editOrDelIndex = index
			console.log(this.clickAddress)
		},
		//增加新的地址
		newAdd(val) {
			console.log(val)
			this.list.push({
				id: this.list[this.list.length - 1].id * 1 + 1 + '',
				name: val.name,
				areaCode: val.areaCode,
				tel: val.tel,
				address: val.addressDetail,
				isDefault: val.isDefault,
				postalCode: val.postalCode
			})
			this.show = false
		},
		changeAddress(val) {
			this.list[this.editOrDelIndex] = val
			this.show = false
		}
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
</style>
