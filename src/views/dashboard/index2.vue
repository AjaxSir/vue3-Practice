<template>
  <button @click='back'>back</button>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log(route.query.sxl)
    const methods = {
      back: () => {
        router.go(-1)
      }
    }
    return {
      ...methods
    }
  }
}
</script>
<style lang="scss" scoped>

</style>