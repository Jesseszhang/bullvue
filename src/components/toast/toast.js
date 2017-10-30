import template from './toast.tpl'
import './toast.scss'

/**
 * components/toast
 * @desc toast
 * @prop {Boolean} [value] - 控制显示 v-model
 * @prop {String} [text] - toast 文案
 * @prop {String} [showMask=false] - 是否显示遮罩
 * @prop {Boolean} [time=1500] - 多少时间后 toast 消失
 *
 * @example
 * <toast v-model="show" type="text" :showMask="false" :time="2000"></toast>
 */

export default {
  name: 'toast',

  template,

  props: {
    value: Boolean,
    text: String,
    time: {
      type: Number,
      default: 1500
    },
    showMask: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      timer: '',
      show: false
    }
  },

  mounted () {},

  methods: {},

  watch: {
    show (val) {
      if (val) {
        this.$emit('input', true)
        // toast显示钩子
        this.$emit('on-show')
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
          // toast消失钩子
          this.$emit('on-hide')
        }, this.time)
      }
    },

    value (val) {
      this.show = val
    }
  }
}
