<template>
  <q-page padding>
    <div style="width: 500px; max-width: 90vw;">
      <q-list class="menu-list">
        <q-item-label style="font-size: 1.25rem;">Recent Edits</q-item-label>
        <div v-if="$apollo.loading">Loading..</div>
        <q-item v-else v-for="edge in allPosts.edges" :key="edge.id" :to="`/pages/${edge.node.id}`">
          <q-item-section avatar>
            <q-icon name="mdi-file-document-outline" inverted color="grey-6" />
          </q-item-section>
          <q-item-section>
            {{ edge.node.title }}
          </q-item-section>
      </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin } from '~mixins'
import Navbox from './Navbox.vue'
import Header from './Header.vue'

import gql from 'graphql-tag'
const directives = import.meta.env.VITE_STANDALONE ? '@client' : ''
const postQuery = gql`
query postQuery {
  allPosts(first: 100) ${directives} {
    edges {
      node {
        id
        title
      }
    }
  }
}
`
export default {
  name: 'Home',
  mixins: [UiMixin, PageMixin],

  data () {
    return {
      title: 'Home',
      authorId: this.$route.params.authorId
    }
  },
  apollo: {
    allPosts: {
      query: postQuery,
      prefetch: false,
      fetchPolicy: 'network-only',
      variables () {
        return { authorId: this.authorId }
      }
    }
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
      this.setHeader(Header)
    }
  }
}
</script>
