<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in imgs"
        :key="index"
        class="swiper-slide"
        :style="{ height, backgroundImage: `url(${item.url})` }"
      >
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
    <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
  </div>
</template>

<script>
export default {
  name: 'ISwiper',

  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: '450px',
    },
    swiperOption: {
      type: Object,
      default: () => ({
        autoplay: true,
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }),
    },
  },
}
</script>

<style lang="less" scoped>
.swiper-slide {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
