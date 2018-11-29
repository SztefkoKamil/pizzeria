<template>
  <section class="contact">
    <div>
      <div>
        <h3>Zapraszamy do odwiedzin lub kontaktu telefonicznego.</h3>
        <p>Lokal czynny przez cały tydzień od 10 do 22.</p>
        <p>Dowóz w promieniu 20km gratis!</p>
      </div>
      <div>
        <p>Telefon: 11 222 33 44</p>
        <p>Adres: Krakowska 40, Kozy 43-340</p>
      </div>
      <div id="map"></div>
      <div>
        <h3>Masz pytania? Napisz do nas!</h3>
        <form>
          <div>
            <label for="form-name">Twoje imię</label>
            <input type="text" id="form-name">
          </div>
          <div>
            <label for="form-email">Twój e-mail</label>
            <input type="email" id="form-email">
          </div>
          <div>
            <label for="form-phone">Twój nr. telefonu</label>
            <input type="text" id="form-phone">
          </div>
          <div>
            <label for="form-message">Wiadomość</label>
            <textarea id="form-message" cols="30" rows="10"></textarea>
          </div>
        </form>
          <button @click="init">Wyślij</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted(){
    initMap();
  }
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";

  .contact{
    width: $mainWidth;
    min-height: 600px;
    background: $bgColor;

    #map{
      width: 100%;
      height: 400px;
    }
  }

</style>
