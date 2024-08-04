<template>
	<form @submit.prevent="addCustomer">
		<div class="flex justify-between gap-2">
			<v-text-field
				v-model="customerParam.name"
				label="Full name"
				hide-details
				required
				class="w-1/4"
			></v-text-field>
			<v-text-field
				v-model="customerParam.phoneNumber"
				label="Phone Number"
				hide-details
				required
				class="w-1/4"
			></v-text-field>
			<v-autocomplete
				class="w-1/4"
				label="Customer Type"
				v-model="customerParam.type"
				item-title="label"
				item-value="value"
				:items="listOptionCustomerType"
			></v-autocomplete>
			<v-text-field
				v-model="customerParam.address"
				label="Address"
				hide-details
				required
				class="w-1/4"
			></v-text-field>
		</div>

		<div class="flex justify-end mt-3">
			<v-btn @click="addCustomer"> Button </v-btn>
		</div>
	</form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ICustomer } from '../domain-business-logic/entities-model/customer'
import { CustomterMapper } from '../domain-business-logic/mapper'
import { defaultCustomerForm, listOptionCustomerType } from '../utils'
import { CustomerController } from '../controller-service-api'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
const customerMapperInstance = new CustomterMapper()
const customerControllerInstance = new CustomerController()

const customerParam = ref<ICustomer>(defaultCustomerForm)

const router = useRouter()

const addCustomer = async () => {
	// call API add Khách hàng
	await customerControllerInstance.handleAddCustomer(
		customerMapperInstance.fromCustomerParams(customerParam.value)
	)

	// Kiểm tra nếu call API lỗi show toast message
	if (customerControllerInstance.isError) {
		toast(customerControllerInstance.ErrorMsg, {
			theme: 'auto',
			type: 'error',
			dangerouslyHTMLString: true,
		})
	}

	// Kiểm tra nếu call API thành công show toast message
	if (customerControllerInstance.isSuccess) {
		await toast('Thêm mới khách hàng thành công', {
			theme: 'auto',
			type: 'success',
			dangerouslyHTMLString: true,
			autoClose: 1000,
		})
		// Back về list
		router.push('/customer-list')
	}
}
</script>
