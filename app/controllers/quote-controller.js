import quoteService from "../services/quote-service.js"
import store from "../store.js"

// private
function _drawQuote() {
  let quote = store.State.quote
  document.querySelector('#quote').innerHTML = quote.quoteTemplate
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    store.subscribe('quote', _drawQuote)

    this.getQuoteAsync()
  }
  async getQuoteAsync() {
    try {
      await quoteService.getQuoteAsync()
    } catch (error) {
      console.error(error)
    }
  }
}
