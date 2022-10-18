<template>
  <div class="logo">
    <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" />
    <span>Vue3+TypeScript实战</span>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
</script>

<style lang="scss" scoped>
.logo{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
    width: 30px;
    height: 30px;
    margin: 0 5px;
 }
 span{
    font-size: 14px;
    color: #fff;
 }
}
 
</style>