<template>
  <div class="hello">
    <h1 class=" text-gray-500 my-3 text-center">{{ msg }}</h1>
    <h2 class="text-gray-500 my-3 text-center">h2文字</h2>
    <h3 class="text-gray-500 my-3 text-center">h3文字</h3>
    <h4 class="text-gray-500 my-3 text-center">h4文字</h4>
    <h5 class="text-gray-500 my-3 text-center">h5文字</h5>
    <p class="text-gray-500 my-3 text-center">p文字</p>
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
