<template>
  <article class="menu-addons">
    <table>
      <thead>Dodatki:</thead>
      <tbody>
        <tr v-for="addon in menu.addons.dodatki" :key="addon">
          <td>{{ addon.name }}</td>
          <td>{{ addon.sm }}</td>
          <td>{{ addon.md }}</td>
          <td>{{ addon.lg }}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>Sosy:</thead>
      <tbody>
        <tr v-for="addon in menu.addons.sosy" :key="addon.name">
          <td>{{ addon.name }}</td>
          <td>{{ addon.price }}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>Napoje:</thead>
      <tbody>
        <tr v-for="addon in menu.addons.napoje" :key="addon.name">
          <td>{{ addon.name }}</td>
          <td>{{ addon.price }}</td>
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
  @import "../scss/_variables.scss";

  .menu-addons{
    background: skyblue;
  }

</style>
