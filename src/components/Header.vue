<template>
  <header class="header">
    <div class="header-logo">
      <img class="logo-img" src="../assets/img/logo-pizza.png" alt="">
      <h1>
        <span class="header-title">Pizzeria</span>
        <span class="header-title">Don Mariano</span>
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
  @import "../scss/_common.scss";

  .header{
    height: 120px;
    width: $mainWidth;
    background: $sectionColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    .header-logo{
      display: flex;
      align-items: center;

      .logo-img{
        width: 150px;
        margin-right: 20px;
      }
    
      .header-title{
        font-family: 'Gloria Hallelujah', cursive;
        font-size: 50px;
        color: #471323;
        $shadowColor: #1bad34;
        text-shadow: 1px 1px 0 $shadowColor, -1px 1px 0 $shadowColor, 
                    -1px -1px 0 $shadowColor, 1px -1px 0 $shadowColor;
      }
    }

    .header-nav{
      width: 220px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #A690A4;
      padding: 7px;
      border-radius: 5px;

      .menu-link{
        text-decoration: none;
        font-weight: bold;
        color: #000;
        background: #A690A4;
        padding: 5px;
        border-radius: 5px;
        transition: all .2s;

        &:hover{
          background: rgb(131, 112, 129);
        }
      }
      .router-link-exact-active{
        border: 1px solid #000;
      }
    }
  }

</style>
