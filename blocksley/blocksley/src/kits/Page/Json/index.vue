<template>
  <viewer-shell :vu="this">
    <!-- <div v-html="block.html" class="viewer__content"/> -->
    <pre><code>{{block.stringify()}}</code></pre>
  </viewer-shell>
</template>

<script>

import { BlockViewerMixin } from '../../../mixins'
import ViewerShell from '../../../components/ViewerShell'

export default {
  name: 'PageJson',
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
