import template from './loading.tpl'
import './loading.scss'

/**
 * components/loading
 * @desc loading
 * @prop {Boolean} [show] - 控制显示 v-model
 * @prop {String} [text] - loading 加载文案
 * @prop {String} [type=loading] - loading 样式，以后扩展可以结合spinner组件 https://github.com/ConnorAtherton/loaders.css目前使用的是这个开源load.css
 *
 * @example
 * <loading :show="show" text="text"></loading>
 */

export default {
  name: 'loading',

  template,

  model: {
    prop: 'show',
    event: 'change'
  },

  props: {
    show: Boolean,
    text: String
  },

  data () {
    return {}
  },

  mounted () {},

  methods: {},

  watch: {
    show (val) {
      this.$emit('update:show', val)
    }
  }
}
