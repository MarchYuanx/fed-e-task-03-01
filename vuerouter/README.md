# 前端路由
在 Web 前端单页应用 SPA(Single Page Application)中，路由描述的是 URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面，请求服务器）。
- 改变 url 但不引起页面刷新
- 检测 url 变化并跟新页面 ui

## Hash 模式 
- URL 中 # 后面的内容作为路径地址
- 监听 hashchange 事件
- 根据当前路由地址找到对应组件重新渲染

## History 模式
- 通过 history.pushState() 方法改变地址栏 //仅仅是改变地址栏并不会发送请求
- 监听 popstate 事件
- 根据当前路由地址找到对应组件重新渲染

vue-router 中使用 routeMap 获取路由与组件的映射关系，使用 data 中的 current 记录当前路由，并且设为响应式，当 current 改变时，页面也重新加载组件。


runtime 运行时版本的 vue 没有编译器，无法编译template
单文件中tempalte可以编译是因为被预编译成了render
- 可以在vue.config.js中配置 runtimeCompiler: true 解决
- 可以使用render函数编译