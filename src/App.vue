<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <main>
      <router-view></router-view>
    </main>
    <hr>
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
  @import "./scss/_variables.scss";

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: lightgray;
    font-family: "Arial";
    
    .footer{
      background: #000;
      color: #fff;
      text-align: center;
      padding: 20px;
      width: $mainWidth;
    }
  }


</style>
