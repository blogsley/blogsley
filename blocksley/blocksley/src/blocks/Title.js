import Block from './Block'

export default class Title extends Block {
  constructor (options) {
    super('title', options)
    this.html = this.value ? `<h1>${this.value}</h1>` : 'My Title'
  }
}
