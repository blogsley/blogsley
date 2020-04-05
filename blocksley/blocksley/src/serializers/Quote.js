import Block from './Block'
import Quote from '../blocks/Quote'
export default class QuoteSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Quote(data)
  }
}
