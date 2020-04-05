import Block from './Block'
import Paragraph from '../blocks/Paragraph'
export default class ParagraphSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Paragraph(data)
  }
}
