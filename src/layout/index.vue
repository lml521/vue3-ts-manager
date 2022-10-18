<template>
  <el-container>
    <el-aside width="200px"><AppAside></AppAside></el-aside>
    <el-container>
      <el-header><AppHeader></AppHeader></el-header>
      <el-main><AppMain></AppMain></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppAside from "./AppAside/index.vue";
import AppHeader from "./AppHeader/index.vue";
import AppMain from "./AppMain/index.vue";
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  height: 50px;
}

.el-aside {
  background-color: #304156;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
