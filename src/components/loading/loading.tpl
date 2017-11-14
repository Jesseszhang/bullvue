<transition name="fade">
  <div class="loading-wrapper" v-show="show">
    <div class="loading-mask"></div>
    <div class="loading-content-wrapper">
      <div class="loader-inner ball-pulse">
        <div class="loader-item"></div>
        <div class="loader-item"></div>
        <div class="loader-item"></div>
      </div>
      <p class="loading-content">{{ text }}<slot></slot></p>
    </div>
  </div>
</transition>