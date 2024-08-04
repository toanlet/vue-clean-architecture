<template>
	<div>
    
		<table id="customers">
			<tr>
				<th>Name</th>
				<th>Phone</th>
				<th>Type</th>
				<th>Address</th>
			</tr>

			<tr v-for="item in customerList">
				<td>{{ item.name }}</td>
				<td>{{ item.phoneNumber }}</td>
				<td>{{ item.type }}</td>
				<td>{{ item.address }}</td>
			</tr>
		</table>
	</div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { CustomerController } from '../controller-service-api'
import { CustomterMapper } from '../domain-business-logic/mapper'
import { ICustomer } from '../domain-business-logic/entities-model/customer'

const customerControllerInstance = new CustomerController()
const customerMapperInstance = new CustomterMapper()

const customerList = ref<ICustomer[]>([])

onMounted(() => {
	getCustomerList()
})

const getCustomerList = async () => {
	// call API get list customer controller
	await customerControllerInstance.loadCustomers()

	// call hàm convert data từ response => UI
	customerList.value = customerMapperInstance.toCustomerListBidding(
		customerControllerInstance.customerList
	)
}
</script>
<style>
#customers {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

#customers td,
#customers th {
	border: 1px solid #ddd;
	padding: 8px;
}

#customers tr:nth-child(even) {
	background-color: #f2f2f2;
}

#customers tr:hover {
	background-color: #ddd;
}

#customers th {
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: left;
	background-color: #04aa6d;
	color: white;
}
</style>
