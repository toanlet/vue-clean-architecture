import CustomerList from '@/modules/customers/presenter-ui-framework/customer-list.vue'
import CustomerForm from '@/modules/customers/presenter-ui-framework/customer-form.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/customer-list', component: CustomerList },
		{ path: '/add-customer', component: CustomerForm },
	],
})

export default router
