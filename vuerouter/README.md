Hash 模式 
- URL 中 # 后面的内容作为路径地址
- 监听 hashchange 事件
- 根据当前路由地址找到对应组件重新渲染

History 模式
- 通过 history.pushState() 方法改变地址栏 //仅仅是改变地址栏并不会发送请求
- 监听 popstate 事件
- 根据当前路由地址找到对应组件重新渲染

runtime 运行时版本的 vue 没有编译器，无法编译template
单文件中tempalte可以编译是因为被预编译成了render
可以在vue.config.js中配置 runtimeCompiler: true 解决
可以使用render函数编译