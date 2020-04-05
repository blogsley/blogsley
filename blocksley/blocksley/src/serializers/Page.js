import Block from './Block'
import Page from '../blocks/Page'
export default class PageSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Page(super.deserialize(data))
  }
}
