import ImageService from "../services/image-service.js"
import store from '../store.js'

// private
function _displayImg() {
  document.body.style.backgroundImage = `url('${store.State.image}')`
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    store.subscribe('image', _displayImg)

    this.getImgAsync()
  }

  async getImgAsync() {
    try {
      await ImageService.getImgAsync()
    } catch (error) {
      console.error(error)
    }
  }
}
