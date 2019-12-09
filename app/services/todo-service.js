import store from "../store.js"
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/danielabc/todos/",
  timeout: 8000
})

class TodoService {
  async getTodosAsync() {
    console.log("Getting the Todo List")
    // should I map todos into new Todos in the let res = line?
    let res = await todoApi.get()
    store.commit('todos', res.data.data.map(td => new Todo(td)))
    console.log("ToDosFromTodoApi: ", res)
    console.log("toDosFromState.todos: ", store.State.todos);

    //TODO Handle this response from the server
  }

  async addTodoAsync(newTodo) {
    let res = await todoApi.post("", newTodo)
    console.log("response from addtodoasync: ", res);
    // below line is not a function when containing ".map(td => new Todo(td))". Why?
    // When it doesn't contain that, todos.forEach in the controller drawTodos() function isn't a function even tho that same function works on page reload.
    debugger
    // debugger says map & td are undefined. Can't td be called anything for the lambda? Is map undefined because td is undefined?
    // store is empty when adding a new todo even tho the store is console logged as having everything the API does on page load. However, the store still is said by the debugger to be empty after the res is comitted to the store...
    store.commit('todos', res.data.data)
    console.log("todos from store: ", store.State.todos);
    this.getTodosAsync()
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId)
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todo)
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    await todoApi.delete(todoId)
    this.getTodosAsync()
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService()
export default todoService
