import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: {
          title: "首页",
          icon: "HomeFilled",
          roles: ["sys:manage"],
        },
        component: () => import("@/views/dashboard/index.vue"),
      },

      
    ],
  },
  {
    path: "/system",
    name: "system",
    component: Layout,
    redirect: "/system/department",
    meta: {
      title: "系统管理",
      icon: "Setting",
    },
    children: [
      {
        path: "department",
        name: "department",
        component: () => import("@/views/system/department/index.vue"),
        meta: {
          title: "机构管理",
          icon: "Memo",
        },
      },
      {
        path: "userList",
        name: "userList",
        component: () => import("@/views/system/userList.vue"),
        meta: {
          title: "用户管理",
          icon: "UserFilled",
        },
      },
      {
        path: "roleList",
        name: "roleList",
        component: () => import("@/views/system/roleList/index.vue"),
        meta: {
          title: "角色管理",
          icon: "FolderOpened",
        },
      },
      {
        path: "menuList",
        name: "menuList",
        component: () => import("@/views/system/menuList/index.vue"),
        meta: {
          title: "权限管理",
          icon: "Menu",
        },
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: Layout,
    redirect: "/test/test3",
    meta: {
      title: "测试",
      icon: "el-icon-document",
    },
    children: [
      {
        path: "test3",
        name: "test3",
        component: () => import("@/views/test/test3.vue"),
        meta: {
          title: "测试3",
          icon: "el-icon-document",
        },
      },
    ]
  },
  {
    path: "/goods",
    name: "goods",
    component: Layout,
    redirect: "/goods/phone1/phone",
    meta: {
      title: "商品管理",
      icon: "el-icon-document",
    },
    children: [
      {
        path: "phone1",
        name: "phone1",
        component:() => import("@/views/goods/phone1/phone.vue"),
        meta: {
          title: "手机管理",
          icon: "el-icon-document",
        },
        // children: [
        //   {
        //     path: "phone",
        //     name: "phone",
        //     component: () => import("@/views/goods/phone1/phone.vue"),
        //     meta: {
        //       title: "华为手机",
        //       icon: "el-icon-document",
        //     },
        //   }
        // ]
      },
      {
        path: "goodsCategory",
        name: "goodsCategory",
        component: () => import("@/views/goods/goodsCategory/index.vue"),
        meta: {
          title: "分类管理",
          icon: "el-icon-document",
        },
      }
    ],
  },
   {
    path: "/systenConfig",
    name: "systenConfig",
    component: Layout,
    redirect: "/systenConfig/department",
    meta: {
      title: "系统工具",
      icon: "el-icon-document",
    },
    children: [
      {
        path: "department",
        name: "department",
        component: () => import("@/views/systenConfig/config/code.vue"),
        meta: {
          title: "日志管理",
          icon: "el-icon-document",
        },
      },
      {
        path: "userList",
        name: "userList",
        component: () => import("@/views/systenConfig/config/systemDocument.vue"),
        meta: {
          title: "接口管理",
          icon: "el-icon-s-custom",
        },
      },
     
    ],
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
