import { BaseService } from '@/config/BaseService'

import { ApiResponse } from '@/config/type'
import {
	ICustomerPayload,
	ICustomerResponse,
} from '@/modules/customers/domain-business-logic/entities-model/customer'
import { ICustomerUseCase } from '@/modules/customers/domain-business-logic/use-case'

class CustomerService extends BaseService implements ICustomerUseCase {
	constructor() {
		const url =
			'https://cardoctor-api-dev.aggregatoricapaci.com/garage-service/api/v1/' // env url
		super(url, false)
	}
	async addCustomer(item: ICustomerPayload): Promise<ApiResponse<number>> {
		const response = await this.instance.post<ApiResponse<number>>(
			'customers/348',
			item
		)
		return response.data
	}

	async updateCustomer(
		item: ICustomerPayload,
		id: number | string
	): Promise<ApiResponse<number>> {
		const response = await this.instance.patch<ApiResponse<number>>(
			`/${id}`,
			item
		)
		return response.data
	}

	async getCustomers(): Promise<ApiResponse<ICustomerResponse[]>> {
		const response = await this.instance.get<ApiResponse<ICustomerResponse[]>>(
			'customers/348?pageSize=10&pageNumber=1'
		)
		return response.data
	}
}

export default CustomerService
