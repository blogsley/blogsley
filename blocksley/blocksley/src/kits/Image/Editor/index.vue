<template>
  <editor-shell ref="shell" :vu="this">
    <span slot="title">Image</span>
    <main-menu slot="menu" :vu="this"/>
    <vue-draggable-resizable
      :draggable="false"
      @resizing="onResizing"
      :w="this.block.width"
      :h="this.block.height"
      :z="750"
      class="resizer"
    />
    <img ref="image" :src="block.src" :width="this.block.width" :height="this.block.height" style="object-fit:cover;"/>
  </editor-shell>
</template>

<script>
import { render } from '../../../renderers'

import { BlockEditorMixin } from '../../../mixins'
import EditorShell from '../../../components/EditorShell'
import MainMenu from './MainMenu'

export default {
  name: 'ImageBlockEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'block'],
  components: {
    EditorShell,
    MainMenu
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
    console.log('image editor destroyed')
    console.log(this)
    this.block.html = render(this.block)
    console.log(this.block)
  },
  methods: {
    onResizing (left, top, width, height) {
      this.block.width = width
      this.block.height = height
    }
  }
}
</script>

<style lang="stylus">
.resizer {
  position: absolute;
  left: 0;
  top: 32px;
}
</style>
