import blocksley, { Blocksley } from '@blogsley/blocksley'

export default (options) => {
  const { Vue } = options
  console.log('blocksley boot ...')
  console.log(Blocksley)
  console.log(options)
  Vue.prototype.$blocksley = blocksley
  Vue.component('blocksley', Blocksley)
}
