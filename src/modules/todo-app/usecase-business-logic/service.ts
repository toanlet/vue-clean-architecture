import { BaseService } from '@/config/BaseService'
import { ITodo } from './interface'
import { Todo } from './entities-model/todo'
import { ApiResponse } from '@/config/type'

class TodoService extends BaseService implements ITodo<Todo> {
	constructor() {
		const url = '' // env url
		super(url, false)
	}
	async addTodo(item: Todo): Promise<any> {
		const response = await this.instance.post<any>('/', item)
		return response.data
	}

	async updateTodo(item: Todo): Promise<any> {
		const response = ''
		return response
	}

	async deleteTodo(id: number): Promise<void> {}
}

export default TodoService
