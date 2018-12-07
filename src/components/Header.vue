<template>
  <header class="header">
    <h1 class="header-logo">
      <div class="header-title">
        <img class="logo-img" src="../assets/img/logo-pizza.png" alt="pizza logo">
        <span>Pizzeria</span>
      </div>
      <span class="header-title">Don Mariano</span>
    </h1>
    <nav v-if="!mobile" class="header-nav">
      <router-link class="menu-link" to="/" exact>Główna</router-link>
      <router-link class="menu-link" to="/menu">Menu</router-link>
      <router-link class="menu-link" to="/contact" exact>Kontakt</router-link>
    </nav>
    <nav v-if="mobile" class="mobile-nav">
      <div class="mobile-menu">
        <router-link class="mobile-link" to="/" exact>Główna</router-link>
        <router-link class="mobile-link" to="/menu">Menu</router-link>
        <router-link class="mobile-link" to="/contact" exact>Kontakt</router-link>
      </div>
      <div class="mobile-icon-wrapper">
        <div class="mobile-icon-container">
          <div class="mobile-icon-bar"></div>
          <div class="mobile-icon-bar"></div>
          <div class="mobile-icon-bar"></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return {
      mobile: true
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/_common.scss";

  .header{
    min-height: 120px;
    width: $mainWidth;
    background: $sectionColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    @media screen and (max-width: 960px){
      border-radius: 0;
      width: 100vw;
    }
    @media screen and (max-width: 750px){
      justify-content: space-around;
    }

    .header-logo{
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      @media screen and (max-width: 750px){
        width: 270px;
      }
      @media screen and (max-width: 380px){
        width: 300px;
      }

      .logo-img{
        width: 150px;
        margin-right: 5px;

        @media screen and (max-width: 920px){
          width: 100px;
        }
        @media screen and (max-width: 870px){
          width: 70px;
        }
      }
    
      .header-title{
        display: flex;
        align-items: center;
        font-family: 'Gloria Hallelujah', cursive;
        font-size: 50px;
        color: #471323;
        letter-spacing: 0px;
        $shadowColor: #1bad34;
        text-shadow: 1px 1px 0 $shadowColor, -1px 1px 0 $shadowColor, 
                    -1px -1px 0 $shadowColor, 1px -1px 0 $shadowColor;

        @media screen and (max-width: 870px){
          font-size: 40px;
        }
        @media screen and (max-width: 750px){
          height: 50px;
        }
      }

      span.header-title{
        padding: 0 10px 0 20px;
      }
    }   // header-logo

    .header-nav{
      width: 220px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: skyblue;
      padding: 7px;
      border-radius: 5px;

      .menu-link{
        text-decoration: none;
        font-weight: bold;
        color: #000;
        background: transparent;
        padding: 5px;
        border-radius: 5px;
        transition: all .2s;

        &:hover{
          background: lightblue;
        }
      }
      .router-link-active{
        border: 1px solid #000;
        background: lightblue;
      }
    } // header-nav

    .mobile-nav{
      position: absolute;
      height: 75px;
      width: 100vw;
      top: 0;
      left: 0;
      background: skyblue;
      z-index: 2;

      .mobile-menu{
        width: 75vw;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .mobile-link{
          text-decoration: none;
          color: #000;
          font-size: 18px;
          padding: 5px;
          border-radius: 5px;
          transition: all .2s;
        }

        .router-link-active{
          border: 1px solid #000;
          background: lightblue;
        }
      }

      .mobile-icon-wrapper{
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height: 70px;
        background: transparent;
        z-index: 4;
        display: flex;
        justify-content: center;
        align-items: center;

        .mobile-icon-container{
          width: 50px;
          height: 50px;
          border: 1px solid #000;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 10px 0;
          transition: all 1s;

          .mobile-icon-bar{
            width: 30px;
            height: 5px;
            background: #000;
          }
        }

        .mobile-icon-open{
          transform: rotate(90deg);
        }
      }

      
    } // mobile-nav
  }

</style>
