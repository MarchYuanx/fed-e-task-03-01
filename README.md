# 一、简答题
### 1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。
```
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})
```
- name 属性不是响应式数据
- 可以通过 `Vue.set(dog, 'name', 'Trump')` 转化为响应式，set 会调用 Observer 的 defineReactive ，在 defineReactive中会调用Object.defineProperty，在 get 中将数据加入观察者dep中，当触发set 时发布者 dep 调用 notify 更新所有观察者从而实现响应式。

### 2、请简述 Diff 算法的执行过程
- 在 patch 中调用 sameVnode 方法
    - 如果 oldVnode 和 newVnode 不同，直接销毁 oldVnode 并挂载 newVnode 到 dom
    - 如果 oldVnode 和 newVnode 相同，调用 patchVnode 方法
        - 如果 oldVnode 和 newVnode 都是文本节点且不相等，将 newVnode 的文本挂载到 dom 上
        - 如果 oldVnode 有子节点而 newVnode 没有，则销毁 oldVnode 的子节点
        - 如果 oldVnode 没有子节点而 newVnode 有，将 newVnode 子节点挂载到 dom 上
        - 如果 oldVnode 和 newVnode 都有子节点，则调用 updateChildren（Diff 算法的核心），进行同级节点比较
            - 给新老节点定义索引，开始遍历
            - oldStartVnode / newStartVnode (旧开始节点 / 新开始节点)
            - oldEndVnode / newEndVnode (旧结束节点 / 新结束节点)
            - oldStartVnode / oldEndVnode (旧开始节点 / 新结束节点)
            - oldEndVnode / newStartVnode (旧结束节点 / 新开始节点)
            - 根据新节点的 key 在老节点中插找，没有则创建新节点
            - 如果老节点数组先遍历完，批量插入新节点的剩余节点
            - 如果新节点数组先遍历完，批量删除老节点的剩余节点。


# 二、编程题
### 1、模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。
 

### 2、在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。
- ![minivue](https://github.com/MarchYuanx/fed-e-task-03-01/blob/master/MINIVUE/vue.jpg)
- [compiler.js](https://github.com/MarchYuanx/fed-e-task-03-01/blob/master/MINIVUE/js/compiler.js)
- [index.html](https://github.com/MarchYuanx/fed-e-task-03-01/blob/master/MINIVUE/index.html)

### 3、参考 Snabbdom 提供的电影列表的示例，利用Snabbdom 实现类似的效果，如图：
- ![snabbdom](https://github.com/MarchYuanx/fed-e-task-03-01/blob/master/snabbdom/snabbdom.jpg)
- [app.js](https://github.com/MarchYuanx/fed-e-task-03-01/blob/master/snabbdom/src/app.js)
- [index.html](https://github.com/MarchYuanx/fed-e-task-03-01/blob/master/snabbdom/index.html)