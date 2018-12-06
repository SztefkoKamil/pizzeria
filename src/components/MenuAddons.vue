<template>
  <article class="menu-addons">
    <div class="addons-table">
      <h4 class="table-row">
        <span class="table-cell mobile-adjust">Dodatki</span>
        <span class="table-cell">mała</span>
        <span class="table-cell">średnia</span>
        <span class="table-cell">duża</span>
      </h4>
      <ul class="table-body">
        <li class="table-row" v-for="addon in menu.addons.dodatki" :key="addon.name">
          <span class="table-cell mobile-adjust">{{ addon.name }}</span>
          <span class="table-cell">{{ addon.sm }}</span>
          <span class="table-cell">{{ addon.md }}</span>
          <span class="table-cell">{{ addon.lg }}</span>
        </li>
      </ul>
    </div>
    <div class="addons-table">
      <h4 class="table-row">
        <span class="table-cell">Sosy</span>
      </h4>
      <ul class="table-body">
        <li class="table-row" v-for="addon in menu.addons.sosy" :key="addon.name">
          <span class="table-cell">{{ addon.name }}</span>
          <span class="table-cell">{{ addon.price }}</span>
        </li>
      </ul>
    </div>
    <div class="addons-table">
      <h4 class="table-row">
        <span class="table-cell">Napoje</span>
      </h4>
      <ul class="table-body">
        <li class="table-row" v-for="addon in menu.addons.napoje" :key="addon.name">
          <span class="table-cell">{{ addon.name }}</span>
          <span class="table-cell">{{ addon.price }}</span>
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

  .menu-addons{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width: 900px){
      width: 100vw;
    }

    .addons-table{
      background: lightblue;
      display: flex;
      flex-direction: column;
      width: 860px;
      margin-bottom: 10px;

      @media screen and (max-width: 860px){
        width: 100vw;
      }

      .table-row{
        display: flex;
        padding-left: 5px;

        .table-cell{
          text-align: center;
          flex-grow: 1;
          flex-basis: 100px;
          padding: 5px;

          &:first-child{
            text-align: left;
            flex-grow: 3;
          }
        }

        .table-cell.mobile-adjust{
          @media screen and (max-width: 550px){
            flex-grow: 20;
          }
        }
      }

      .table-body{
        .table-row:nth-child(odd){
          background: skyblue;
        }
      }
    }
  }

</style>
