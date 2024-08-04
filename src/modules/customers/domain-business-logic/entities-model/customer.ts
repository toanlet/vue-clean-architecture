export interface ICustomer {
	name: string
	type: string | number
	phoneNumber: string
	address?: string | null
}

export interface ICustomerResponse {
	id: number
	customerTypeId: number
	customerTypeName: string
	fullName: string
	phoneNumber: string
	address: string | null
	garageId: number | null
	driverId: number | null
}

export interface ICustomerPayload {
	customerTypeId: number
	customerTypeName: string
	fullName: string
	phoneNumber: string
	address?: string | null
}
