<template>
  <q-card>
    <q-bar class="bg-black text-white">
      <div>Insert Image</div>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip>Close</q-tooltip>
      </q-btn>
    </q-bar>
    <div class="q-pa-md row items-start q-gutter-md">
      <ImageCard v-for="image in this.images" :key="image.id" :image="image" @click.native="select(image)" clickable/>
    </div>
  </q-card>
</template>

<style>
</style>

<script>
import ImageCard from './ImageCard.vue'
import { Image } from '../blocks'

export default {
  name: 'ImageChooser',
  mixins: [],
  props: ['select'],
  components: {
    ImageCard
  },
  data () {
    return {
      title: 'Images',
      images: [
        new Image({ src: '/images/journal-on-desk.jpg', title: 'Journal on Desk' })
      ],
      maximizedToggle: true
    }
  },
  methods: {
  }
}
</script>
