import store from "../store.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
})

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {

  }

  async getImgAsync() {
    let res = await imgApi.get('')
    store.commit('image', res.data.url)
    console.log(res.data.url);
    console.log(store.State.image);
  }
}

const imageService = new ImageService()
export default imageService
