<template>
	<div class="">
		<van-address-edit
			:area-list="areaList"
			show-postal
			show-set-default
			:area-columns-placeholder="['请选择', '请选择', '请选择']"
			@save="onSave"
		/>
	</div>
</template>

<script>
export default {
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
			}
		}
	},
	methods: {
		onSave(val) {
			console.log(val)
			this.$emit('newAddress', val)
		}
	}
}
</script>

<style scoped lang="less"></style>
