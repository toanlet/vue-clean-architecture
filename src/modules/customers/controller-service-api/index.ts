import {
	ICustomerPayload,
	ICustomerResponse,
} from '../domain-business-logic/entities-model/customer'
import CustomerService from '../domain-business-logic/service'

export class CustomerController {
	private customerService: CustomerService
	private _customerList: ICustomerResponse[] = []
	private _isLoading: boolean = false
	private _isSuccess: boolean = false
	private _isError: boolean = false
	private _errorMsg: string = 'Lỗi server'
	constructor() {
		this.customerService = new CustomerService()
	}

	get customerList(): ICustomerResponse[] {
		return this._customerList
	}

	set customerList(customers: ICustomerResponse[]) {
		this._customerList = customers
	}

	get isLoading(): boolean {
		return this._isLoading
	}

	set isLoading(isLoading: boolean) {
		this._isLoading = isLoading
	}

	get isSuccess(): boolean {
		return this._isSuccess
	}

	set isSuccess(isSuccess: boolean) {
		this._isSuccess = isSuccess
	}
	get isError(): boolean {
		return this._isError
	}

	set isError(isError: boolean) {
		this._isError = isError
	}

	get ErrorMsg(): string {
		return this._errorMsg
	}

	set ErrorMsg(message: string) {
		this._errorMsg = message
	}
	async loadCustomers() {
		this._isLoading = true

		try {
			const result = await this.customerService.getCustomers()
			// Kiểm tra nếu result có code = 1
			if (result.code == 1) {
				// gán giá trị _customerList = result.data
				this._customerList = result.data
				this._isLoading = false
			}
		} catch (error) {
			this._isSuccess = false
		} finally {
			this._isLoading = false
		}
	}

	async handleAddCustomer(customer: ICustomerPayload) {
		this._isSuccess = false
		try {
			const result = await this.customerService.addCustomer(customer)
			if (result.code == 1) {
				// gán giá trị _isSuccess = true
				this._isSuccess = true
				// Quay về màn list
				if (result.data) {
					return result.data
				}
			} else {
				this._isSuccess = false
				this._isError = true
				this._errorMsg = result.message
			}
		} catch (error) {
			console.log(error)
			console.log('lỗi api')
			this._isError = true
		}
	}
}
