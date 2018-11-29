<template>
  <header class="header">
    <div class="header-logo">
      <img class="logo-img" src="../assets/img/logo-pizza.png" alt="">
      <h1>
        <span>Pizzeria</span>
        <span>Don Mariano</span>
      </h1>
    </div>
    <nav class="header-nav">
      <router-link class="menu-link" to="/">Główna</router-link>
      <router-link class="menu-link" to="/menu">Menu</router-link>
      <router-link class="menu-link" to="/contact">Kontakt</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";

  .header{
    height: 100px;
    width: $mainWidth;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .header-logo{
      display: flex;
      align-items: center;

      .logo-img{
        width: 100px;
      }
    }

    .header-nav{
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .menu-link{
        text-decoration: none;
        color: #000;
        background: #c5f7e2;
        padding: 5px;
      }
    }
  }

</style>
