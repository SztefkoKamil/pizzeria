<template>
  <article class="menu-pizza">
    <table class="pizza-table">
      <thead>
        <th class="cell head-name">
          <span>Nr</span>
          <span>Nazwa</span>
        </th>
        <th class="cell">Składniki</th>
        <th class="pizza-size cell">
          <div><span></span>mała:<span class="size">32cm</span></div>
          <div><span>średnia:</span><span class="size">40cm</span></div>
          <div><span>duża:</span><span class="size">50cm</span></div>
        </th>
      </thead>
      <tr class="pizza-row" v-for="pizza in menu.pizza" :key="pizza.id">
        <td class="pizza-name cell">{{ pizza.id }}. {{ pizza.name }}</td>
        <td class="components cell">{{ pizza.components }}</td>
        <td class="pizza-price cell">
          <span>{{ pizza.sm }}</span>
          <span>{{ pizza.md }}</span>
          <span>{{ pizza.lg }}</span>
        </td>
      </tr>
    </table>
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
      padding: 10px;
      border-collapse: collapse;
      background: skyblue;
      width: 860px;

      .cell{
        padding: 5px 10px;
      }

      th{
        background: lightblue;
      }

      .head-name{
        width: 180px;
      }

      .pizza-size{
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        width: 300px;
        padding: 6px 10px;

        .size{
          margin-left: 5px;
        }
      }

      .pizza-row{
        padding: 1px;

        .components{
          font-size: 14px;
        }
        .pizza-price{
          display: flex;
          justify-content: space-around;
        }
      }
      .pizza-row:nth-child(odd){
        background: lightblue;

      }
    }
  }

</style>
