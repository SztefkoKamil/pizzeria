<template>
  <article class="menu-pizza">
    <table>
      <thead>
        <th>Nr</th>
        <th>Nazwa</th>
        <th>Składniki</th>
        <th>mała: 32cm</th>
        <th>średnia: 40cm</th>
        <th>duża: 50cm</th>
      </thead>
      <tr v-for="pizza in menu.pizza" :key="pizza.id">
        <td>{{ pizza.id }}</td>
        <td>{{ pizza.name }}</td>
        <td>{{ pizza.components }}</td>
        <td>{{ pizza.sm }}</td>
        <td>{{ pizza.md }}</td>
        <td>{{ pizza.lg }}</td>
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
  @import "../scss/_variables.scss";

  .menu-pizza{
    background: skyblue;
  }

</style>
