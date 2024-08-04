import { ApiResponse } from '@/config/type'
import {
	ICustomerPayload,
	ICustomerResponse,
} from '@/modules/customers/domain-business-logic/entities-model/customer'

export interface ICustomerUseCase {
	addCustomer(item: ICustomerPayload): Promise<ApiResponse<number>>
	updateCustomer(
		item: ICustomerPayload,
		id: number | string
	): Promise<ApiResponse<number>>
	getCustomers(): Promise<ApiResponse<ICustomerResponse[]>>
}
