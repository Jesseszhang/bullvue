<div class="rate">
  <input v-model="currentValue" class="hide">
  <span class="rate-item-wrap" v-for="item in len">
    <i class="iconfont icon-shoucang rate-item" :class="{'active': startCut > item - 1}">
      <i class="iconfont icon-shoucang rate-item-sub" v-if="hasHalf && startCut == item - 1"></i>
    </i>
  </span>
</div>
