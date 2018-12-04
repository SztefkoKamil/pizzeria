<template>
  <section class="contact">
      <div>
        <h3 class="contact-title">Zapraszamy do odwiedzin lub kontaktu telefonicznego.</h3>
        <div class="contact-info">
          <span>Lokal czynny przez cały tydzień od 10 do 22.</span>
          <span>Dowóz w promieniu 20km gratis!</span>
          <span>Telefon: 11 222 33 44</span>
          <span>Adres: Krakowska 40, Kozy 43-340</span>
        </div>
      </div>
      <div class="map-wrapper">
        <div id="map" class="map"></div>
      </div>
      <div class="contact-form">
        <h3 class="form-title">Masz pytania? Napisz do nas!</h3>
        <form class="form-flex">
          <div class="form-flex">
            <label for="form-name">Twoje imię</label>
            <input class="form-border" type="text" id="form-name">
          </div>
          <div class="form-flex">
            <label for="form-email">Twój e-mail</label>
            <input class="form-border" type="email" id="form-email">
          </div>
          <div class="form-flex">
            <label for="form-phone">Twój nr. telefonu</label>
            <input class="form-border" type="text" id="form-phone">
          </div>
          <div class="form-flex">
            <label for="form-message">Wiadomość</label>
            <textarea class="form-border" id="form-message"></textarea>
          </div>
          <button class="send-btn form-border">Wyślij</button>
          <div class="response">
            <!-- <span class="success">Wiadomość została wysłana. Dziękujemy!</span> -->
            <!-- <span class="error">Błąd wysyłania. Spróbuj ponownie za kilka minut.</span> -->
          </div>
        </form>
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
  @import "../scss/_common.scss";

  .contact{
    width: $mainWidth;
    background: $bgColor;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 960px){
      width: 100vw;
    }

    .contact-title{
      font-family: $titleFont;
      text-align: center;
      font-size: 30px;
      padding: 30px;

      @media screen and (max-width: 890px){
        padding: 30px 160px;
      }
      @media screen and (max-width: 765px){
        padding: 30px 90px;
      }
      @media screen and (max-width: 624px){
        padding: 30px 20px;
      }
      @media screen and (max-width: 500px){
        font-size: 26px;
        padding: 30px 20px;
      }
    }

    .contact-info{
      width: 760px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 40px;
      margin: 0 auto;

      @media screen and (max-width: 760px){
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      span{
        font-size: 18px;
        padding: 10px;
        text-align: center;

        @media screen and (max-width: 760px){
          padding: 10px 20px;
        }
      }
    }

    .map-wrapper{
      width: 100%;
      background: $sectionColor;
      padding: 40px 0;
      border-radius: 15px;
      margin: 50px 0;

      @media screen and (max-width: 960px){
        border-radius: 0;
      }

      .map{
        width: 700px;
        height: 420px;
        margin: 0 auto;

        @media screen and (max-width: 700px){
          width: 100vw;
        }
        @media screen and (max-width: 500px){
          height: 320px;
        }
      }
    } /*  .map-wrapper  */

    .contact-form{
      margin-bottom: 70px;

      .form-title{
        font-size: 24px;
        font-family: $titleFont;
        padding: 10px 20px;
        text-align: center;

        @media screen and (max-width: 390px){
          padding: 10px 70px;
        }
      }

      label{
        font-size: 18px;
      }

      input{
        width: 250px;
        height: 36px;
        text-align: center;
        font-size: 18px;
        background: #fff;
        color: #000;
      }

      textarea{
        width: 250px;
        height: 90px;
        padding: 5px;
        line-height: 20px;
        user-select: text;
        background: #fff;
        color: #000;
      }

      .form-flex{
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      div.form-flex{
        margin-top: 20px;
      }

      .form-border{
        border: 2px solid $sectionColor;
        border-radius: 6px;
      }

      .send-btn{
        margin-top: 20px;
        width: 100px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        color: #000;
        background: #fff;
        animation: button-pulse 1s alternate-reverse infinite linear;

          @keyframes button-pulse{
            0%{
              box-shadow: 0 0 0 0 #444;
            }
            100%{
              box-shadow: 0 0 20px 5px #444;
            }
          }
      }

      .response{
        width: 300px;
        height: 50px;
        padding: 15px;
        text-align: center;

        .success{
          color: green;
        }
        .error{
          color: red;
        }
      }
    } /*  .contact-form  */

  }

</style>
