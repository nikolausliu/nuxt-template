<template>
  <div class="layout layout-default">
    <shortcut />
    <i-header />
    <div class="main">
      <Nuxt />
    </div>
    <i-footer />
  </div>
</template>

<style lang="less" scoped>
.layout {
  min-height: 100vh;
  background-color: @background-color-page;
}
</style>
