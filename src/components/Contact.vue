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
        <div id="map"></div>
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
    min-height: 600px;
    background: $bgColor;
    display: flex;
    flex-direction: column;
    align-items: center;

    .contact-title{
      font-family: $titleFont;
      text-align: center;
      font-size: 30px;
      padding: 30px;
    }

    .contact-info{
      width: 760px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 40px;
      margin: 0 auto;

      span{
        font-size: 18px;
        padding: 10px;
        text-align: center;
      }
    }

    .map-wrapper{
      width: 100%;
      background: $sectionColor;
      padding: 40px 0;
      border-radius: 15px;
      margin: 50px 0;

      #map{
        width: 700px;
        height: 420px;
        margin: 0 auto;
      }
    }

    .contact-form{
      margin-bottom: 70px;

      .form-title{
        font-size: 24px;
        font-family: $titleFont;
      }

      label{
        font-size: 18px;
      }

      input{
        width: 250px;
        height: 36px;
        text-align: center;
        font-size: 18px;
      }

      textarea{
        width: 250px;
        height: 90px;
        padding: 5px;
        line-height: 20px;
        user-select: text;
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

  }

</style>
