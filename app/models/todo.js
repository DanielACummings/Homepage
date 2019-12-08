export default class Todo {
  constructor(data) {
    this.description = data.description //{ type: String, required: true}
  }

  get todoTemplate() {
    return /*html*/`
    <form>
      <input type="checkbox" name="complete" id="complete" value="complete"><label for="complete">${this.description}</label>
    </form>`
  }
}