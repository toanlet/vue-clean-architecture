import axios, { type AxiosInstance } from 'axios'

export class BaseService {
	protected instance: AxiosInstance
	protected baseURL: string
	constructor(baseURL?: string, allowToken: boolean = true) {
		this.baseURL = baseURL || ''
		this.instance = axios.create({
			baseURL: this.baseURL,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (allowToken)
			this.instance.interceptors.request.use((config) => {
				const token = ''
				if (token) config.headers.Authorization = `Bearer ${token}`
				return config
			})
	}
}
