<template>
  <q-page padding>
    <q-uploader
      :url="server"
      label="Drag and drop or add from computer"
      multiple
      accept=".jpg, image/*"
      style="max-width: 300px"
    />
  </q-page>
</template>

<script>

import { UiMixin, PageMixin } from 'src/mixins'
import Navbox from './Navbox'

export default {
  name: 'CreateImage',
  mixins: [ UiMixin, PageMixin ],
  props: [],
  components: {
  },
  data () {
    return {
      title: 'Add Images',
      server: process.env.SERVER_URL + '/images/upload',
      files: []
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
    }
  }
}
</script>
