<template>
  <q-page padding class="content-page">
    <blocksley :state="state"/>
  </q-page>
</template>

<script>
import { shallowRef } from 'vue'

import { UiMixin, PageMixin } from '~mixins'
import Navbox from './Navbox.vue'
import BlockChooser from '~components/BlockChooser/index.vue'
import ImageChooser from '~components/ImageChooser/index.vue'

import { createDemoState, serialize, render } from '@blocksley/blocksley'

import gql from 'graphql-tag'
const directives = import.meta.env.VITE_STANDALONE ? '@client' : ''

export default {
  name: 'CreatePost',
  mixins: [UiMixin, PageMixin],
  props: [],
  components: {
  },
  data () {
    return {
      title: 'New Page',
      post: {
        title: 'My Post',
        block: '{}',
        body: 'Blogsley rocks!!!'
      },
      state: createDemoState({
        blockChooser: shallowRef(BlockChooser),
        imageChooser: shallowRef(ImageChooser)
      })
    }
  },
  computed: {
    block: function () { return this.state.block }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('from: ', from)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setPage(this.post)
    console.log('leaving')
    next()
  },
  methods: {
    save () {
      const post = Object.assign({}, this.post)
      this.block.freeze()
      post.block = serialize(this.block)
      post.body = render(this.block)
      post.title = this.state.findBlockByType('Title').value

      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($data: PostInput!) {
            createPost (data: $data) ${directives} {
              id
            }
          }`,
        // Parameters
        variables: {
          data: post
        }
      }).then((response) => {
        console.log(response)
        this.id = response.data.createPost.id
        // this.$q.notify('Page Created')
        this.$router.replace(`/pages/${this.id}`)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
      var post = this.page
      if (post) {
        this.post = post
      }
      console.log('on switch')
      console.log(this.post)
    }
  }
}
</script>
