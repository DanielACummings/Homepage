export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }
  get quoteTemplate() {
    return /*html*/ `
    <div>
    "${this.quote}"
    <br />
    -${this.author}
    </div>`
  }
}