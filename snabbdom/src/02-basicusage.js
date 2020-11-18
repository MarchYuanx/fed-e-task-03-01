import { h, init } from 'snabbdom'

let patch = init([])
let vnode = h('div#contaniner',[
    h('h1', 'Hello Snabbdom'),
    h('p', '这是一个P标签')
])

let app = document.querySelector('#app')

let oldVnode = patch(app, vnode)

setTimeout(()=>{
    vnode = h('div#contaniner',[
        h('h1', 'Hello March'),
        h('p', 'Hello P')
    ])
    //patch(oldVnode, vnode)

    patch(oldVnode, h('!'))
},2000)