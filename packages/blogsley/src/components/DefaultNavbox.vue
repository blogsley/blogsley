<template>
<navbox-shell>
  <q-toolbar>
    <q-toolbar-title>
      {{view.title}}
    </q-toolbar-title>
  </q-toolbar>
</navbox-shell>
</template>

<script>
import UiMixin from '~mixins/ui'
import NavboxShell from '~components/NavboxShell.vue'

export default {
  name: 'DefaultNavbox',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
    NavboxShell
  },
  methods: {
  }
}
</script>
