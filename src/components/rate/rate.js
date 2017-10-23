import template from './rate.tpl'
import './rate.scss'

export default {
  name: 'rate',
  template,

  data () {
    return {
      currentValue: 0
    }
  },

  props: {
    value: {
      type: Number,
      default: 0
    },
    len: {
      type: Number,
      default: 5
    }
  },

  created () {
    this.currentValue = this.value
  },

  computed: {
    hasHalf () {
      return this.splitArr()[1] > 0
    },

    startCut () {
      return this.splitArr()[0]
    }
  },

  methods: {
    splitArr () {
      let valArr = this.currentValue.toFixed(2).split('.')
      return valArr.length === 1 ? [valArr[0], 0] : valArr
    }
  }
}
