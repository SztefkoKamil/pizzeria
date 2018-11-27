<template>
  <div>
    <app-header></app-header>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: { 'app-header': Header }
}
</script>

<style lang="scss">
</style>
