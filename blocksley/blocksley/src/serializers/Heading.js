import Block from './Block'
import Heading from '../blocks/Heading'
export default class HeadingSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Heading(data)
  }
}
