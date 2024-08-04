export interface ITodo<T> {
	addTodo(item: T): void
	updateTodo(item: T): void
	deleteTodo(id: number): void
}
