<template>
  <header-shell>
    <h1>
      <q-icon name="mdi-account" class="header-icon"/>
      User
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from '~mixins/ui'

export default {
  name: 'UserHeader',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  methods: {
  }
}
</script>
