<template>
  <viewer-shell :vu="this">
    <img :src="block.src" :width="this.block.width" :height="this.block.height" style="object-fit:cover"/>
  </viewer-shell>
</template>

<script>
import ViewerShell from '../../../components/ViewerShell'
import { BlockViewerMixin } from '../../../mixins'
export default {
  name: 'TitleBlockViewer',
  mixins: [ BlockViewerMixin ],
  props: ['frame', 'block'],
  components: {
    ViewerShell
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
