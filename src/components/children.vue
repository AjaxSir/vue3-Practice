<template>
  <span>from parent {{value}}</span>
  <div></div>
  <button @click='changeName'>change parent value</button>
</template>  
<script>
import { watchEffect, watch } from 'vue'
export default {
  props: {
    value: {
      default: 'defalut',
      type: String
    }
  },
  setup(props, context) {
    console.log(context, 'context')
    watchEffect(() => {
      console.log(props.value)
    })
    const methods = {
      changeName: () => {
        context.emit('toParent', 'change')
      }
    }
    return {
      ...methods
    }
  }
}
</script>