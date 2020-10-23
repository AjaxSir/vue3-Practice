<template>
2
  <span class="name">{{name}}</span>
  <div :ref='getRef' class='getRef'>获取ref</div>
  <button @click='changeName'>changeName</button>
  <div></div>
  <ul class="ul">
    <li v-for="(item, idx) in list" :key='idx'>{{item}}</li>
  </ul>
  {{ num }}
  <br />
  {{ newNum }}
  <br />
  <a-button>111</a-button>
  <a-rate v-model:value="rateVal" />
  <children :value='name' @toParent='fromChild'></children>
  <button @click='toPath'>to index2</button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, onBeforeUpdate, getCurrentInstance } from 'vue';
import { ref, toRefs, reactive, computed,  watch, isRef, nextTick } from 'vue'
import { inject } from 'vue'
import children from '@/components/children.vue'
export default {
  components: {
    children,
  },
  setup() {
    const userLocation = inject('location')
    const updataLocation = inject('updataLocation')
    const formatTimeOther = inject('formatTimeOther')
    const { ctx, proxy } = getCurrentInstance(); // 使用ctx 在生产环境下报错 应使用proxy
    const router = useRouter()
    const routeInfo = useRoute()
    console.log(routeInfo)
    const data = reactive({
      num: 1,
      list: [
        1,2,3,4
      ]
    })
    let divRef = null
    const getRef = ref => {
      divRef = ref
    } // 获取dom节点
    nextTick(() => {
      console.dir(divRef)
    })
    const name = ref('sxl')
    const rateVal = ref(2)
    const methods = {
      changeName: () => {
        name.value = 'sxlsxlslx'
      },
      fromChild: (val) => {
        name.value = val
        data.num = ++data.num
        data.list.push(data.list.length + 1)
        console.log(val, 'from child',data.num,data.list)
      },
      toPath() {
        router.push({
          path: '/index2',
          query: {
            sxl: '1'
          }
        })
      }
    }
    onBeforeUpdate(() => {
      console.log('update')
    })
    onMounted(() => {
      console.log(userLocation.value, 'start')
      updataLocation()
      console.log(userLocation.value, 'change')
      console.log(ctx.$formatTime(new Date()), '使用全局变量、方法')
      console.log(proxy.$formatTime(new Date()), '使用全局变量、方法')
      console.log(formatTimeOther(new Date()), '推荐使用的全局变量、方法')
      console.log('加载完成')
    })
    watch(name,
    (n, o) => {
      console.log(n, '<-new', 'old->', o)
    },{lazy: false}) // 第一次不监听
    console.log(isRef(data))
    watch(() => [data.num, data.list],
    ([nNum, nList], [preNum, preList]) => {
      console.log(nNum, preNum,'<-num', 'list->', nList, preList)
    }) // 监听多个数值
    const newNum = computed(() => {
      return data.num + 10
    })
    return {
      ...methods,
      ...toRefs(data),
      name,
      getRef,
      rateVal,
      newNum
    }
  }
}
</script>

<style scoped lang='scss'>
.name{
  font-size: 24px;
}
img {
  width: 200px;
}
.ul{
  li{
    font-size: 20px;
  }
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
