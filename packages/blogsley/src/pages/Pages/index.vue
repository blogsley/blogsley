<template>
  <q-page padding>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else style="width: 500px; max-width: 90vw;">
      <q-list class="menu-list">
        <q-item v-for="edge in allPosts.edges" :key="edge.id" :to="`/pages/${edge.node.id}`">
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
  name: 'Posts',
  mixins: [UiMixin, PageMixin],

  data () {
    return {
      title: 'Pages',
      authorId: this.$route.params.authorId
    }
  },
  apollo: {
    allPosts: {
      query: postQuery,
      // fetchPolicy: 'network-only',
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
