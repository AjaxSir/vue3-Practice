<template>
2
  <span class="name">{{name}}</span>
  <div :ref='getRef'>获取ref</div>
  <button @click='changeName'>changeName</button>
  <div></div>
  <ul class="ul">
    <li v-for="(item, idx) in list" :key='idx'>{{item}}</li>
  </ul>
  {{ num }}
  <br />
  {{ newNum }}
  <br />
  <children :value='name' @toParent='fromChild'></children>
  <button @click='toPath'>to index2</button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, toRefs, reactive, computed, onMounted, watch, isRef, nextTick } from 'vue'
import children from '@/components/children.vue'
export default {
  components: {
    children,
  },
  setup() {
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
    }
    nextTick(() => {
      console.dir(divRef)
    })
    const name = ref('sxl')
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

    onMounted(() => {
      console.log('加载完成')
    })
    watch(() => name.value,
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
