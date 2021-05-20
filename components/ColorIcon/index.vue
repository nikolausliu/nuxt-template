<template>
  <i class="imc-icon" :class="`imc-icon-${iconName}`"></i>
</template>

<script>
export default {
  name: 'ColorIcon',

  props: {
    iconName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scoped>
.imc-icon {
  font-size: 1em;
}
</style>
