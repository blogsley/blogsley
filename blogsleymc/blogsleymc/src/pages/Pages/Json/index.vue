<template>
  <q-page padding class="content-page">
    <pre><code>{{block.stringify()}}</code></pre>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'

import { BlocksleyState, serialize, deserialize, render } from '@blocksley/blocksley'

import { UiMixin, PageMixin } from 'src/mixins'
import Navbox from './Navbox'
import ImageChooser from 'components/ImageChooser'

export default {
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
  },
  data () {
    return {
      title: 'Page JSON',
      postId: this.$route.params.id,
      state: new BlocksleyState({
        imageChooser: ImageChooser
      })
    }
  },
  computed: {
    block: function () { return this.state.block }
  },
  apollo: {
    post: {
      query: gql`
        query postQuery($id: ID!) {
          post(id: $id) @client {
            id
            title
            block
            body
          }
        }`,
      variables () {
        return {
          id: this.postId
        }
      },
      update (data) {
        const post = data.post
        console.log(post)
        this.state.block = deserialize(JSON.parse(post.block))
        return post
      }
      // fetchPolicy: 'network-only'
    }
  },
  created () {
    console.log('demo created')
    console.log(this.$blocksley)
    console.log(this.$page)
    if (!this.$page) {
      this.$page = this.block
    } else {
      this.block = this.$page
    }
    console.log(this.$page)
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    edit () {
      this.$router.push(`/pages/${this.post.id}`)
    },
    json () {
      this.$router.push(`/pages/${this.post.id}/json`)
    },
    save () {
      const post = Object.assign({}, this.post)
      this.block.freeze()
      post.block = serialize(this.block)
      post.body = render(this.block)
      post.title = this.state.findBlockByType('title').value
      console.log(post)
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($data: PostInput!) {
            updatePost(data: $data) @client {
              ok
            }
          }`,
        // Parameters
        variables: {
          data: post
        }
      })
      this.$q.notify('Page Saved')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deletePost(id: $id) @client {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('Page Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
    }
  }
}
</script>
