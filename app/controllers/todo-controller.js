import todoService from "../services/todo-service.js"
import store from "../store.js"

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let todos = store.State.todos
  // todos is currently an empty array. 0.forEach
  todos.forEach(todos => template += todos.todoTemplate)
  document.querySelector('#todos').innerHTML = template
}
export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    this.getTodosAsync()

    store.subscribe('todos', _drawTodos)
  }

  async getTodosAsync() {
    try {
      await todoService.getTodosAsync()
    } catch (error) {
      console.log(error)
    }
  }
  async addTodoAsync(e) {
    e.preventDefault()
    let formData = e.target
    console.log("e.target: ", formData);
    console.log("todoFormSubmition", formData);
    let newTodo = {
      description: formData.input.value
    }
    console.log("newTodo variable", newTodo);

    try {
      await todoService.addTodoAsync(newTodo)
    } catch (error) {
      console.error("[ERROR]:", error)
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await todoService.toggleTodoStatusAsync(todoId)
    } catch (error) {
      console.error("[ERROR]:", error)
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await todoService.removeTodoAsync(todoId)
    } catch (error) {
      console.error("[ERROR]:", error)
    }
  }
}
