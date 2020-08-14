<template>
	<van-address-edit
		:area-list="areaList"
		:address-info="addressInfo"
		show-postal
		show-delete
		show-set-default
		:area-columns-placeholder="['请选择', '请选择', '请选择']"
		@save="onSave"
		@delete="onDelete"
	/>
</template>

<script>
export default {
	props: {
		address: {
			type: [String, Number, Object]
		}
	},
	name: 'EditAddress',
	data() {
		return {
			areaList: {
				province_list: {
					110000: '北京市',
					120000: '天津市'
				},
				city_list: {
					110100: '北京市',
					110200: '县',
					120100: '天津市',
					120200: '县'
				},
				county_list: {
					110101: '东城区',
					110102: '西城区',
					110105: '朝阳区',
					110106: '丰台区',
					120101: '和平区',
					120102: '河东区',
					120103: '河西区',
					120104: '南开区',
					120105: '河北区'
				}
			},
			addressInfo: {
				id: this.address.id,
				name: this.address.name,
				tel: this.address.tel,
				isDefault: this.address.isDefault,
				areaCode: this.address.areaCode + '',
				addressDetail: this.address.address,
				postalCode: this.address.postalCode
			}
		}
	},
	methods: {
		onSave(data) {
			this.$emit('changeAddressInfo', {
				id: data.id,
				name: data.name,
				tel: data.tel,
				address: data.addressDetail,
				areaCode: data.areaCode,
				isDefault: data.isDefault,
				postalCode: data.postalCode
			})
		},
		onDelete() {}
	}
}
</script>

<style scoped lang="css"></style>
