export default class Todo {
  constructor(data) {
    this.id = data._id
    this.description = data.description //{ type: String, required: true}
  }

  get todoTemplate() {
    return /*html*/`
    <form>
    <button class="btn btn-danger btn-sm" onclick="app.todoController.removeTodo(${this.id})">x</button><input type="checkbox" name="complete" id="complete" value="complete"><label for="complete">${this.description}</label>
    </form>`
  }
}