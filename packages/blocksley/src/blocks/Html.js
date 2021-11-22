import { Rich } from './Rich'
import { Editor } from '@tiptap/vue-3'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

import { Image } from '../nodes'

export class Html extends Rich {
  constructor (options) {
    super(options)
    this.editor = new Editor({
      content: this.html,
      extensions: [
        StarterKit,
        Underline,
        new Image(),
      ]
    })
    this.content = this.editor.getJSON()
  }
}
Html.type = 'Html'