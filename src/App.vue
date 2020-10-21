<template>
 <router-view />
  
</template>

<script>
import { ref, readonly, provide } from 'vue';
import { formatTime } from './util'

export default {
  setup() {
    let location=ref('location')
        const updataLocation=()=>{
           location.value='变身后的大Location'
        }
        /*readonly包裹后可以在组件内引用时不被改变值。
        否则在组件内可以直接通过location.value=***将值改变，
        包裹后只能通过updataLocation()方法改变*/
        provide('location',readonly(location))
        provide('updataLocation',updataLocation)
        provide('formatTimeOther', formatTime)
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
