<template>
  <div>
    <template v-for="(item, index) in menuList" :key="index">
      
      <el-sub-menu
        v-if="item.children && item.children.length > 0"
        :index="item.path">
        <template #title>
          <el-icon>
            <Icon :icon="item.meta.icon"></Icon>
          </el-icon>


          <span>{{ item.meta.title }}</span>
        </template>
        <MenuItem :menuList="item.children"></MenuItem>
      </el-sub-menu>

      <el-menu-item v-else :index="item.path">

        <el-icon>
          <Icon :icon="item.meta.icon"></Icon>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>

    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps(["menuList"]);
</script>

<style lang="scss" scoped></style>
