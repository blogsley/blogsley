<template>
  <q-card class="my-card cursor-pointer"
      :class="{ hover: hover, 'no-hover': !hover }"
      flat style="text-align: center"
      @mouseover="hover = true"
      @mouseleave="hover = false"
  >
    <q-card-section>
    <q-icon :name="block.icon"
      style="font-size:1.5em"
    />
    </q-card-section>
    <q-card-section>
      <div>{{ block.title }}</div>
    </q-card-section>

  </q-card>
</template>

<script>
import { UiMixin } from '~mixins'

export default {
  mixins: [UiMixin],
  props: {
    block: {
      default () {
        return {
          title: 'Paragraph',
          name: 'paragraph',
          icon: 'mdi-format-paragraph'
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  background: none;
}
.q-card__section {
  padding: 4px;
}
.no-hover {
   border: 1px solid gray;
 }
 .hover {
   border: 1px solid white;
 }
</style>
