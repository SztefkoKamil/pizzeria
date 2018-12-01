<template>
  <div class="container">
    <app-header></app-header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="footer">
      <p>
        <span>Telefon: 11 222 33 44</span>
        <span>Adres: Krakowska 40, 43-340 Kozy</span>
        <span>Czynne codziennie od 10 do 22.</span>
      </p>
      <p>Kamil Sztefko 2018 &copy &#8195 Strona demonstracyjna. &#8195 e-mail: sztefkokamil@gmail.com</p>
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

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("assets/img/vintage-concrete.png");
    font-family: "Arial";
    
    .footer{
      background: $sectionColor;
      color: #ddd;
      text-align: center;
      padding: 20px;
      width: $mainWidth;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    p:first-child{
      margin-bottom: 10px;

      span:nth-child(2){
        margin: 0 20px;
      }
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
