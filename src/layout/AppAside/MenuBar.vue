<template>
  <div class="MenuBar">
    <Logo></Logo>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="$route.path"
      text-color="#fff"
      unique-opened
      router>
      <MenuItem :menuList="menuList"></MenuItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import Logo from './logo.vue'
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import dynamicMenu from "@/utils/dynamic-menu";
const router = useRouter();

// let menuList = reactive([
//   {
//     path: "/dashboard",
//     component: () => import("@/views/dashboard/index.vue"),
//     meta: {
//       title: "首页",
//       icon: "el-icon-s-home",
//       roles: ["sys:manage"],
//     },
//     children: [],
//   },
//   {
//     path: "/system",
//     component: "Layout",
//     alwaysShow: true,
//     name: "system",

//     meta: {
//       title: "系统管理",
//       icon: "el-icon-menu",
//       roles: ["sys:manage"],
//       parentId: 0,
//     },
//     children: [
//       {
//         path: "/department",
//         component: "/system/department/department",
//         alwaysShow: false,
//         name: "department",
//         meta: {
//           title: "机构管理",
//           icon: "el-icon-document",
//           roles: ["sys:dept"],
//           parentId: 17,
//         },
//       },
//       {
//         path: "/userList",
//         alwaysShow: false,
//         name: "userList",
//         component: () => import("@/views/system/roleList/index.vue"),
//         meta: {
//           title: "用户管理",
//           icon: "el-icon-s-custom",
//           roles: ["sys:user"],
//           parentId: 17,
//         },
//       },
//       {
//         path: "/roleList",
//         // component: "/views/system/menuList",
//         component: () => import("@/views/system/menuList/index.vue"),
//         alwaysShow: false,
//         name: "roleList",
//         meta: {
//           title: "角色管理",
//           icon: "el-icon-s-tools",
//           roles: ["sys:role"],
//           parentId: 17,
//         },
//       },
//       {
//         path: "/menuList",
//         component: "/system/Menu/MenuList",
//         alwaysShow: false,
//         name: "menuList",
//         meta: {
//           title: "权限管理",
//           icon: "el-icon-document",
//           roles: ["sys:menu"],
//           parentId: 17,
//         },
//       },
//     ],
//   },
//   {
//     path: "/goods",
//     component: "Layout",
//     alwaysShow: true,
//     name: "goods",
//     meta: {
//       title: "商品管理",
//       icon: "el-icon-document",
//       roles: ["sys:goods"],
//       parentId: 0,
//     },
//     children: [
//       {
//         path: "/goodCategory",
//         component: "/goods/goodsCategory/goodsCategoryList",
//         alwaysShow: false,
//         name: "goodCategory",
//         meta: {
//           title: "商品分类",
//           icon: "el-icon-document",
//           roles: ["sys:goodsCategory"],
//           parentId: 34,
//         },
//       },
//     ],
//   },
//   {
//     path: "/systenConfig",
//     component: "Layout",
//     alwaysShow: true,
//     name: "systenConfig",
//     meta: {
//       title: "系统工具",
//       icon: "el-icon-document",
//       roles: ["sys:systenConfig"],
//       parentId: 0,
//     },
//     children: [
//       {
//         path: "/document",
//         component: "/system/config/systemDocument",
//         alwaysShow: false,
//         name: "http://42.193.158.170:8089/swagger-ui/index.html",
//         meta: {
//           title: "接口文档",
//           icon: "el-icon-document",
//           roles: ["sys:document"],
//           parentId: 42,
//         },
//       },
//     ],
//   },
// ]);
 
let menuList = reactive([]);

// 获取到  路由表的全部数据
const newRoutes = router.getRoutes();
console.log(newRoutes,'newRoutesnewRoutes');

const newMenuList = dynamicMenu(newRoutes);
menuList = newMenuList;
</script>

<style lang="scss" scoped>
.MenuBar {
  .el-menu {
    border-right: none;
  }
}
</style>
