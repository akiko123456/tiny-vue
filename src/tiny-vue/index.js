import { h } from './h'
import { render } from './renderer'
// 父组件类
class ParentComponent {
  isTrue = true

  mounted() {
    setTimeout(() => {
      this.isTrue = false
      this._update()
    }, 2000)
  }

  render() {
    // 如果 this.isTrue 的值为真，则渲染 ChildComponent1，否则渲染 ChildComponent2
    return this.isTrue ? h(ChildComponent1) : h(ChildComponent2)
  }
}
// 子组件类
class ChildComponent1 {
  unmounted(){
    console.log('1gg')
  }
  render() {
    // 子组件中访问外部状态：this.$props.text
    return h('div', {
      style:{
        background:'red'
      }
    }, 1)
  }
}
// 子组件类
class ChildComponent2 {
  render() {
    // 子组件中访问外部状态：this.$props.text
    return h('div', {
      style:{
        background:'blue'
      }
    }, 2)
  }
}
// 有状态组件 VNode
const compVNode = h(ParentComponent)

const prevNode = h('ul',null,[
  h('li',{key:1,style:{color:'red'}},1),
  h('li',{key:2},2),
  h('li',{key:3},3)
])
const nextNode = h('ul',null,[
  h('li',{key:2},2),
  h('li',{key:4},4),
  h('li',{key:1,style:{color:'blue'}},1),
])


render(prevNode, document.getElementById('app'))

setTimeout(()=>{
  render(nextNode, document.getElementById('app'))
},3000)