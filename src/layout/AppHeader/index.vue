<template>
  <div class="appHeader">
    <el-icon>
      <Icon icon="Fold"></Icon>
      
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
</script>

<style lang="scss" scoped>
.appHeader {
  height: 50px;
  display: flex;
  align-items: center;
  .el-icon{
    font-size:18px;
  }
}
</style>
