<template>
  <div class="container">
    <app-header></app-header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="footer">
      <p class="footer-p">
        <span class="footer-span">Telefon: 11 222 33 44</span>
        <span class="footer-span footer-span-2">Adres: Krakowska 40, 43-340 Kozy</span>
        <span class="footer-span">Czynne codziennie od 10 do 22.</span>
      </p>
      <p class="footer-p">
        <span class="footer-span">Kamil Sztefko 2018 &copy</span>
        <span class="footer-span footer-span-2">Strona demonstracyjna.</span>
        <span class="footer-span">e-mail: sztefkokamil@gmail.com</span>
        </p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: { 'app-header': Header }
}
</script>

<style lang="scss">
  @import "./scss/_common.scss";
  @import url("https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Open+Sans:400,700&amp;subset=latin-ext");

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: url("assets/img/vintage-concrete.png");
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Arial";
    
    .footer{
      display: flex;
      flex-direction: column;
      align-items: center;
      background: $sectionColor;
      color: #ddd;
      padding: 10px;
      width: $mainWidth;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      .footer-p{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .footer-span{
          padding: 10px 0;

          @media screen and (max-width: 602px){
            padding: 4px 0;
          }

          @media screen and (max-width: 420px){
            font-size: 14px;
          }
        }

        .footer-span-2{
          margin: 0 20px;
        }
      }

      @media screen and (max-width: 960px){
        width: 100vw;
        border-radius: 0;
      }
    }

    @media screen and (max-width: 960px){
      display: block;
    }

  }

  /* ----- Vue transition ----- */

  .fade-enter-active{
    animation: fade-in .2s linear 1;
  }
  @keyframes fade-in{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  .fade-leave-active{
    animation: fade-out .2s linear 1;
  }
  @keyframes fade-out{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }


</style>
