<template>
  <transition name="fade" @afterEnter="afterEnter" @afterLeave="afterLeave">
    <div v-show="value" class="i-popup__overlay" :style="{ zIndex }" @click="handleClickOverlay">
      <div class="i-popup" @click="handlePopupClick">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IPopup',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: [String, Number],
      default: 99,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {}
  },

  methods: {
    handleClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.$emit('input', false)
      }
    },
    handlePopupClick(e) {
      e.stopPropagation()
    },
    afterEnter() {
      document.body.classList.add('i-popup-parent--hidden')
      this.$emit('opened')
    },
    afterLeave() {
      document.body.classList.remove('i-popup-parent--hidden')
      this.$emit('closed')
    },
  },
}
</script>

<style lang="less" scoped>
.i-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100%;
  overflow-y: auto;
  transition: 0.3s ease-out;
  transform: translate3d(-50%, -50%, 0);
}
.i-popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

<style lang="less">
.i-popup-parent--hidden {
  overflow: hidden;
}
</style>
