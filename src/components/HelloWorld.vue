<template>
  <h1>{{ count }}</h1>
  <button @click="change">增加</button>
</template>

<script>
import { defineComponent,ref,watchEffect } from 'vue'
 
export default {
  setup(){
    let count = ref(0);

    let change = ()=>count.value++;

    watchEffect(()=>{
      console.log('hhh',count.value)
    })
    
    return {
      count,
      change
    }
  }
}
</script>
