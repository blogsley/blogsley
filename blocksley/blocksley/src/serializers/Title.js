import Block from './Block'
import Title from '../blocks/Title'
export default class TitleSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Title(data)
  }
}
