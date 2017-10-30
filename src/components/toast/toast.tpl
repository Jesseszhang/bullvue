<div class="toast-wrapper">
  <div class="toast-mask" v-show="showMask && show"></div>
  <transition :name="fade">
    <div class="toast-content-wrapper" v-show="show">
      <p class="toast-content" v-if="text" v-html="text"></p>
      <p class="toast-content" v-else>
        <slot></slot>
      </p>
    </div>
  </transition>
</div>