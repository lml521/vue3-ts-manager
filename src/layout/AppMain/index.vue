<template>
    <div class="appMain">
      <router-view></router-view>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  </script>
  
  <style lang="scss" scoped>
    .appMain {
  
    }
  </style>