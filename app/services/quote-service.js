import store from "../store.js"
import Quote from "../models/quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
})

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuoteAsync() {
    debugger
    let res = await _quoteApi.get('')
    store.commit('quote', new Quote(res.data))
    console.log(store.State.quote);
  }
}

const quoteService = new QuoteService()
export default quoteService
