<template>
  <div>
    公共页面5
    <br>
    <input type="text" v-model="text">
    <button @click="goBack">返回进入页面</button>
    <button @click="goNext">跳转下一页</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
   goNext () {
      this.$router.push('/Page6')
      // this.$router.back()
    }
  }
}
</script>
