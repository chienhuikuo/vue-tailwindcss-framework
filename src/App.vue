<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

export default {
  name: 'App'
}
</script>

<style lang="css">
@import "./assets/css/main-output.css";
</style>

<style lang="scss">
@import './assets/css/style.scss';
</style>


