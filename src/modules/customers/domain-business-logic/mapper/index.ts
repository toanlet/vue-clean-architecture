import {
	ICustomer,
	ICustomerPayload,
	ICustomerResponse,
} from '../entities-model/customer'
import {
	CUSTOMER_TYPE,
	defaultCustomerForm,
	defaultCustomerPayload,
	listOptionCustomerType,
} from '@/modules/customers/utils'

export class CustomterMapper {
	toCustomerListBidding(customerRes: ICustomerResponse[]): ICustomer[] {
		if (customerRes.length > 0) {
			let list: ICustomer[] = []
			list = customerRes.map((el: ICustomerResponse) => {
				return {
					name: el.fullName ? el.fullName : '-',
					phoneNumber: el.phoneNumber ? el.phoneNumber : '-',
					type:
						el.customerTypeId == CUSTOMER_TYPE.INDIVIDUAL
							? 'Khách hàng cá nhân'
							: 'Khách hàng doanh nghiệp',
					address: el.address ? el.address : '-',
				}
			})
			return list
		}

		return []
	}

	fromCustomerParams(customerParams: ICustomer): ICustomerPayload {
		let customer: ICustomerPayload = defaultCustomerPayload
		customer.fullName = customerParams.name
		customer.address = customerParams.address
		customer.phoneNumber = customerParams.phoneNumber

		// Convert kiểu dữ liệu loại Khách hàng
		const customerType = this.convertTypeCustomer(customerParams.type)
		customer.customerTypeId = customerType.value
		customer.customerTypeName = customerType.label

		return customer
	}

	// Hàm convert loại Khách hàng
	convertTypeCustomer(type: number | string): {
		value: number
		label: string
	} {
		const temp = listOptionCustomerType.find((el) => el.value == type)
		if (temp) {
			return temp
		}
		return { value: 0, label: '' }
	}
}
