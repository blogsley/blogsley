<script>
import Vu from './Vu'

export default {
  extends: Vu,
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('active', this)
  },
  methods: {
    floatLeft () {
      this.model.class = ['block-left']
    },
    floatRight () {
      this.model.class = ['block-right']
    }
  }
}
</script>
