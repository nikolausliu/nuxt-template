<template>
  <i class="im-icon" :class="`im-icon-${iconName}`"></i>
</template>

<script>
export default {
  name: 'FontIcon',

  props: {
    iconName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scoped>
.im-icon {
  font-size: 1em;
}
</style>
