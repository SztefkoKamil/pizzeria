<template>
  <article class="menu-pizza">
    <div class="pizza-table">
      <div class="table-row">
        <h4 class="name">Nr i Nazwa</h4>
        <h4 class="components">Składniki</h4>
        <h4 class="price">
          <div class="size"><span>mała:</span><span>32cm</span></div>
          <div class="size"><span>średnia:</span><span>40cm</span></div>
          <div class="size"><span>duża:</span><span>50cm</span></div>
        </h4>
      </div>
      <ul>
        <li class="table-row" v-for="pizza in menu.pizza" :key="pizza.id">
          <div class="name">{{ pizza.id }}. {{ pizza.name }}</div>
          <div class="components">{{ pizza.components }}</div>
          <div class="price">
            <span>{{ pizza.sm }}</span>
            <span>{{ pizza.md }}</span>
            <span>{{ pizza.lg }}</span>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  export default {
    props: ['menu']
  }
</script>

<style lang="scss">
  @import "../scss/_common.scss";

  .menu-pizza{
    display: flex;
    justify-content: center;
    overflow: hidden;

    .pizza-table{
      background: lightblue;
      width: 860px;

      @media screen and (max-width: 860px){
        width: 100vw;
      }

      h4{
        display: flex;
        align-items: center;
      }

      .table-row{
        display: grid;
        grid-template-columns: 165px 1fr 180px;
        padding: 5px;

        @media screen and (max-width: 750px){
          grid-template-columns: 1fr 1fr;
          grid-row-gap: 5px;
          padding: 10px 5px;
        }

        .name{
          grid-column: 1;

          @media screen and (max-width: 750px){
            grid-column: 1;
            grid-row: 1;
          }
        }
        .components{
          grid-column: 2;

          @media screen and (max-width: 750px){
            grid-column: 1/3;
            grid-row: 2;
            text-align: center;
            border-top: 1px solid #191051;
            padding-top: 5px;
          }
        }
        .price{
          grid-column: 3;
          display: flex;
          justify-content: space-around;

          @media screen and (max-width: 750px){
            grid-column: 2;
            grid-row: 1;
          }

          @media screen and (max-width: 420px){
            font-size: 14px;
          }

          .size{
            display: flex;
            flex-direction: column;
          }
        }
      }

      li.table-row:nth-child(odd){
        background: skyblue;
      }
      
    }
  }

</style>
