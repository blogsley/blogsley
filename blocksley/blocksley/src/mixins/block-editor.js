import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('active', this)
  },
  computed: {
    navDrawerOpen: {
      get: function () {
        return this.$store.getters.navDrawerOpen
      },
      set: function (val) {
        this.$store.commit('navDrawerOpen', val)
      }
    },
    toolDrawerOpen: {
      get: function () {
        return this.$store.getters.toolDrawerOpen
      },
      set: function (val) {
        this.$store.commit('toolDrawerOpen', val)
      }
    },
    ...mapGetters([
      'view',
      // 'vu',
      'page',
      'navbox',
      'toolbox',
      'toolboxProps',
      'header',
      'footer',
      '$editor',
      'edited',
      '$image'
    ])
  },
  methods: {
    floatLeft () {
      this.block.class = ['block-left']
    },
    floatRight () {
      this.block.class = ['block-right']
    },
    ...mapActions([
      'setView',
      //'setVu',
      'setPage',
      'toggleNavDrawer',
      'setNavDrawerOpen',
      'toggleToolDrawer',
      'setToolDrawerOpen',
      'setNavbox',
      'setToolbox',
      'setToolboxProps',
      'setHeader',
      'setFooter',
      'setEditor',
      'setEdited',
      'setImage'
    ])
  }
}