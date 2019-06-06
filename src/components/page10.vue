<template>
  <div>
    公共页面10
    <br>
    <button @click="goBack">返回进入页面</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
