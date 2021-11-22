<template>
<tippy
    ref="tippy"
    interactive
    :animate-fill="false" 
    theme="light"
    animation="fade"
    trigger = "manual"
    :arrow="true">

<template v-slot:content>
    <slot></slot>

</template>

</tippy>
</template>

<script>
export default {
  name: 'EditorBubbleMenu',
  props: {
    editor: null,
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
      show () {
          this.$refs.tippy.show()
      },
      hide () {
          this.$refs.tippy.hide()
      }
  }
}
</script>

<style lang="scss">
</style>
