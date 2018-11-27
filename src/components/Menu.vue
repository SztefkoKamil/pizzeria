<template>
  <div>
    <p>Menu</p>
    <router-link to="/menu">Pizza</router-link>
    <router-link to="/menu/addons">Napoje i Dodatki</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

</style>
