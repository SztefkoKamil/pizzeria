<template>
  <article class="menu-pizza">
    <table class="pizza-table">
      <thead>
        <th>Nr</th>
        <th>Nazwa</th>
        <th>Składniki</th>
        <th class="pizza-size">mała: 32cm</th>
        <th class="pizza-size">średnia: 40cm</th>
        <th class="pizza-size">duża: 50cm</th>
      </thead>
      <tr class="pizza-row" v-for="pizza in menu.pizza" :key="pizza.id">
        <td>{{ pizza.id }}</td>
        <td class="pizza-name">{{ pizza.name }}</td>
        <td class="components">{{ pizza.components }}</td>
        <td class="pizza-price">{{ pizza.sm }}</td>
        <td class="pizza-price">{{ pizza.md }}</td>
        <td class="pizza-price">{{ pizza.lg }}</td>
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
    background: skyblue;

    .pizza-table{
      padding: 10px;
      border-collapse: collapse;
    }

    .pizza-size{
      font-size: 14px;

    }

    .pizza-row{
      padding: 1px;

      .pizza-name{
        text-align: center;
        padding: 0 5px;
      }
      .components{
        font-size: 14px;
      }
      .pizza-price{
        text-align: center;
      }
    }
    .pizza-row:nth-child(odd){
      background: lightblue;

    }

  }

</style>
