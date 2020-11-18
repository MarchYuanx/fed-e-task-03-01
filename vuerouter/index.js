let _Vue = null

export default class VueRouter {

    static install (Vue) {
        // 1. 判断当前插件是否已经被安装
        if(VueRouter.install.installed){
            return
        }
        VueRouter.install.installed = true
        // 2. 把Vue构造函数记录到全局变量
        _Vue = Vue
        // 3. 把创建Vue实例时候传入的router对象注入到Vue实例上
        // 混入
        _Vue.mixin({
            beforeCreate(){
                if(this.$options.router){
                    _Vue.prototype.$router = this.$options.router
                    this.$options.router.init()
                } 
            }
        })
    }

    constructor(options){
        this.options = options
        this.routerMap = {}
        this.data = _Vue.observable({
            current: '/'
        })
    }

    init(){
        this.createRouteMap()
        this.initComponets(_Vue)
        this.initEvent()
    }

    createRouteMap() {
        // 遍历所有的路由规则，把路由规则解析成键值对的形式 存储到routeMap中
        this.options.routes.forEach(route => {
            this.routerMap[route.path] = route.component
        })
    }

    initComponets(Vue){
        Vue.component('router-link', {
            props: {
                to: String
            },
            //template: '<a :href="to"><slot></slot></a>'
            render(h){
                return h('a', {
                    attrs:{
                        href: this.to
                    },
                    on: {
                        click: this.clickHandler
                    }
                }, [this.$slots.default])
            },
            methods: {
                clickHandler(e){
                    e.preventDefault()
                    // history
                    // history.pushState({}, '', this.to)
                    // this.$router.data.current = this.to
                    
                    // hash
                    window.location.hash = this.to
                }
            }
        })

        const self = this
        Vue.component('router-view',{
            render(h){
                const component = self.routerMap[self.data.current] 
                return h(component)
            }
        })
    }   

    initEvent (){
        // history 
        // window.addEventListener('popstate',()=>{
        //     this.data.current = window.location.pathname
        // })

        // hash
        window.addEventListener('hashchange',()=>{
            console.log(window.location)
            this.data.current = window.location.hash.substr(1) 
        })
    }
}