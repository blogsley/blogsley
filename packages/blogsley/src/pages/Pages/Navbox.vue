<template>
<div class="fit">
  <navbox-shell>

    <q-list>
      <q-item to="/pages/create" exact>
        <q-item-section avatar>
          <q-icon name="note_add" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add Page</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </navbox-shell>
</div>
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
