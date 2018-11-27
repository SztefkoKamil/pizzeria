<template>
  <section class="menu">
    <div class="submenu">
      <router-link class="submenu-link" to="/menu">Pizza</router-link>
      <router-link class="submenu-link" to="/menu/addons">Napoje i Dodatki</router-link>
    </div>
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";

  .menu{
    width: $mainWidth;
    min-height: 600px;

    .submenu{
      text-align: center;
      padding: 10px;

      .submenu-link{
        text-decoration: none;
        background: #c5f7e2;
        color: #000;
        padding: 5px;
        font-size: 20px;
        margin: 0 10px;
      }
    }
  }


</style>
