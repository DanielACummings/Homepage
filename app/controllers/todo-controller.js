import todoService from "../services/todo-service.js"
import store from "../store.js"
import Todo from "../models/todo.js"

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let todos = store.State.todos
  todos.forEach(todo => template += todo.todoTemplate)
  document.querySelector('#todos').innerHTML = template
}
function _drawTodoCount() {
  let count = 0
  let todos = store.State.todos
  todos.forEach(todo => count += 1)
  let template = count.toString()
  document.querySelector('#todo-count').innerHTML = `<div>${template}</div>`
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
      _drawTodoCount()
    } catch (error) {
      console.log(error)
    }
  }
  async addTodoAsync(e) {
    e.preventDefault()
    let formData = e.target
    let newTodo = {
      description: formData.input.value
    }
    console.log('description property value: ', formData.input.value);
    // when console.log("store todos after submit: ", store.State.todos) is on this line, it logs only the recently made to do, but when todos are drawn based on the number of to dos in the state, all of them are represented with an "undefined."
    formData.reset()
      ;

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
