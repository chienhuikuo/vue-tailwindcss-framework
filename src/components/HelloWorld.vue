<template>
  <div class="hello">
    <h1 class="text-3xl text-blue-200 border-4 border-red-500 inline-block mx-auto p-5">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
