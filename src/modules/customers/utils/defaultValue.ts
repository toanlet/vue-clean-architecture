import {
	ICustomer,
	ICustomerPayload,
} from '../domain-business-logic/entities-model/customer'

export const defaultCustomerForm: ICustomer = {
	name: '',
	type: '',
	phoneNumber: '',
	address: '',
}

export const defaultCustomerPayload: ICustomerPayload = {
	customerTypeId: 0,
	customerTypeName: '',
	fullName: '',
	phoneNumber: '',
	address: '',
}
