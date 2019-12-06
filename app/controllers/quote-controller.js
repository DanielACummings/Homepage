import quoteService from "../services/quote-service.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
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
