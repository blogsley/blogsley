<template>
  <q-card class="my-card cursor-pointer">
    <q-img :src="image.src"/>

    <q-card-section>
      <div class="text-subtitle2">{{ image.title }}</div>
    </q-card-section>

  </q-card>
</template>

<script>
import { UiMixin } from '~mixins'

export default {
  mixins: [UiMixin],
  props: {
    image: {
      default () {
        return {
          title: '',
          filename: ''
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    imgSrc: function () {
      if (this.image.filename.length === 0) {
        return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
      }
      return '/images/' + this.image.filename + '?w=200&h=160'
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
