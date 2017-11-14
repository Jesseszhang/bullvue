import template from './marquee.tpl'
import './marquee.scss'

/**
 * components/marquee
 * @desc marquee
 * @prop {String} [marquee-data] - marquee-data
 * @prop {Number} [step] - 步长
 * @prop {Number} [speed] - 速度
 *
 * @example
 * <marquee :marquee-data="marqueeData" :speed="10" :step="1"></marquee>
 */

export default {
  name: 'marquee-tip',

  template,

  props: {
    marqueeData: {
      type: String,
      default: ''
    },
    step: {
      type: Number,
      default: 1
    },
    speed: {
      type: Number,
      default: 10
    }
  },

  data () {
    return {
      translate: 0,
      curlen: 0,
      timer: '',
      indent: 0
    }
  },

  mounted () {},

  computed: {
    curTranslate () {
      return 'translateX(' + this.translate + 'px)'
    }
  },

  methods: {
    transformItem () {
      this.$nextTick(() => {
        this.curlen = document.getElementsByClassName('marquee-content')[0].offsetWidth
        this.indent = document.getElementsByClassName('marquee-wrapper')[0].offsetWidth
        this.translate = this.indent
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.curlen > this.indent) {
            if (Math.abs(this.translate) > this.curlen) {
              this.translate = this.indent
            } else {
              this.translate = this.translate - this.step
            }
          } else {
            clearInterval(this.timer)
            this.translate = (this.indent - this.curlen) / 2
          }
        }, this.speed)
      })
    }
  },

  watch: {
    marqueeData (val) {
      if (val) {
        this.transformItem()
      }
    }
  }
}
