<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <main>
      <router-view></router-view>
    </main>
    <hr>
    <footer class="footer">footer</footer>
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
