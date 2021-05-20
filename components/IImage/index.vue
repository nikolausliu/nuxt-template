<template>
  <el-image :src="src" class="i-image" :style="{ borderRadius: radius ? '50%' : 0, ...imgStyle }">
    <div slot="placeholder" class="image-placeholder">
      <i class="el-icon-picture"></i>
    </div>
    <div slot="error" class="image-error">
      <i class="el-icon-warning"></i>
    </div>
  </el-image>
</template>

<script>
export default {
  name: 'IImage',

  props: {
    src: {
      type: String,
      default: '',
    },
    radius: {
      type: Boolean,
      default: false,
    },
    imgStyle: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
.i-image {
  width: 100%;
  height: 100%;
  .image-placeholder,
  .image-error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f7f8fa;
    i {
      font-size: 20px;
      color: #dcdee0;
    }
  }
}
</style>
