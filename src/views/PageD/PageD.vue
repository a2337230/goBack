<template>
  <div>
    pageD
    <button @click="toPath">page1</button>
  </div>
</template>
<script>
export default {
  methods: {
    toPath () {
      this.$router.push('/Page1')
    }
  }
}
</script>

