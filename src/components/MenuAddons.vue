<template>
  <article class="menu-addons">
    <table class="addons-table">
      <thead class="cell">
        <th class="to-left cell">Dodatki</th>
        <th>mała</th>
        <th>średnia</th>
        <th>duża</th>
      </thead>
      <tbody>
        <tr v-for="addon in menu.addons.dodatki" :key="addon">
          <td class="cell">{{ addon.name }}</td>
          <td class="cell center">{{ addon.sm }}</td>
          <td class="cell center">{{ addon.md }}</td>
          <td class="cell center">{{ addon.lg }}</td>
        </tr>
      </tbody>
    </table>
    <table class="addons-table">
      <thead>
        <th class="to-left cell">Sosy</th>
      </thead>
      <tbody>
        <tr v-for="addon in menu.addons.sosy" :key="addon.name">
          <td class="cell">{{ addon.name }}</td>
          <td class="cell">{{ addon.price }}</td>
        </tr>
      </tbody>
    </table>
    <table class="addons-table">
      <thead>
        <th class="to-left cell">Napoje</th>
      </thead>
      <tbody>
        <tr v-for="addon in menu.addons.napoje" :key="addon.name">
          <td class="cell">{{ addon.name }}</td>
          <td class="cell">{{ addon.price }}</td>
        </tr>
      </tbody>
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

  .menu-addons{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .addons-table{
      background: lightblue;
      border-collapse: collapse;
      width: 860px;
      margin-bottom: 10px;

      .cell{
        padding: 5px 10px;
      }

      .to-left{
        text-align: left;
      }

      .center{
        text-align: center;
      }

      tr:nth-child(odd){
        background: skyblue;
      }
    }
  }

</style>
