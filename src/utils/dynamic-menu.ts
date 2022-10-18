
const filterParentAndChildren = (routes: any) => {
  return routes.filter((item:any) => item.children && item.children.length > 0);
};

const filterMenu = (hanChildren:any) => {
  const newMenuArray: any = [];
  if (hanChildren && hanChildren.length > 0) {
    hanChildren.forEach(item => {
        // 判断是不是根路由 根路由第一

        if (item.path === '/') {            
            let data = {
                path: item.path + item.children[0].path,
                component: "Layout",
                meta: {},
                children:[],                
            }

            if (item.children && item.children.length > 0) {
                data.meta=item.children[0].meta
            }
            newMenuArray.push(data)

        } else {
            let data = {
                path: item.path,
                component: "Layout",
                name: item.name,
                meta: item.meta,
                children:[]
            }
            if (item.children && item.children.length > 0) {
                item.children.forEach(child => {
                    data.children.push({
                        meta: child.meta,
                        name: child.name,
                        path :item.path+"/"+child.path
                    })
                })
                filterMenu(item.children)
            }
            newMenuArray.push(data)   
        }
    });
  }
  return newMenuArray;
};

/**
 * return 的 是 dynamicMenu
 * 第一步 过滤  要 item 里面有children 且长度 大于0 ，并返回符合条件的数据
 *  第二步 把返回 过后 的 数据 在进行遍历
 * 
 * 首先先定义一个空数组
 * 再判断 传进来的 参数 是否 存在 并且 长度不能小于 0
 * 
 * forEach 遍历 这个 参数
 * 
 * 
 * 在 判断 这个 item 的path 的 地址 是否 是 根路径 '/'
 * 如果 是的 话，则定义一个 data ,里面的 数据 是 路由样式 
 *  path: item.path + item.children[0].path, 
 *  因为 这个是 判断是否为 '/' 根元素 所以  path: / + item.children[0].path
 *  component: "Layout",    这个是地址  
 *  meta: {}, 
 *  children:[],
 * 在判断 他的 里面 有没有 children 且 他的children 的长度 要大于 0
 * 就把 item.clildren[0].meta 赋给 data 里面的 meta
 * 然后 在push 进新数组
 * 
 * else 如果 item.path  的不是 '/' 根路由 
 * 则 在定义 data 里面配置 路由数据、
 * 在判断 item 是否 有 children  且children 的长度 不能小于 0
 * 
 * 在 forEach 遍历 children 的 每一项
 * 然后 在 定义 每一项的 路由 配置
 * 
 * 在 从新 掉用这个方法 使用 递归的方法 继续调用 自己的方法
 * 实现递归方法
 * 然后 在push 进新数组
 */
const dynamicMenu = (routes: any) => {
  const hasChildren = filterParentAndChildren(routes);
  const menuList = filterMenu(hasChildren);
  return menuList;
};

export default dynamicMenu;
