<template>
  <div>
    <h1 @click="change">大家好 kkb欢迎你</h1>
  <ul ref="uls">
    <li v-for="(item,index) in lists" :key="index">{{item}}</li>
  </ul>
  </div>
</template>

<script>
import {ref,computed,reactive} from 'vue'
export default {
  setup(props,context){
    const count = ref(0)
    const lists = reactive([1,2,3,4,5]);
    const uls = ref(null)
    function add(){
      count.value++
    }
    function change(){
      lists.sort((a,b)=>{
        return Math.random() * 3 - Math.random() * 3;
      })
      console.log(uls.value)
    }
    const double = computed(()=>count.value*2)
    return {count,add,double,lists,change,uls}
  }
}
</script>