export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }
  get quoteTemplate() {
    return /*html*/ `
    <div>
    ${this.quote}
    -${this.author}
    </div>`
  }
}