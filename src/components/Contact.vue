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
            <input class="form-border" type="text" id="form-name" 
            v-model="name" :class="{ 'input-error': nameValid }">
            <span v-if="nameValid" class="input-tip">Musisz podać imię.</span>
          </div>
          <div class="form-flex">
            <label for="form-email">Twój e-mail</label>
            <input class="form-border" type="email" id="form-email" 
            v-model="email" :class="{ 'input-error': emailValid }">
            <span v-if="emailValid" class="input-tip">Podaj poprawny email lub telefon.</span>
          </div>
          <div class="form-flex">
            <label for="form-phone">Twój nr. telefonu</label>
            <input class="form-border" type="text" id="form-phone" 
            v-model="phone" :class="{ 'input-error': phoneValid }">
            <span v-if="phoneValid" class="input-tip">Podaj poprawny email lub telefon.</span>
          </div>
          <div class="form-flex">
            <label for="form-message">Wiadomość</label>
            <textarea class="form-border" id="form-message" 
            v-model="message" :class="{ 'input-error': messageValid }"></textarea>
            <span v-if="messageValid" class="input-tip">Musisz wpisać wiadomość.</span>
          </div>
          <button class="send-btn form-border" @click.prevent="submit">Wyślij</button>
          <div class="response">
            <span v-if="responseSuccess" class="response-success">Wiadomość została wysłana. Dziękujemy!</span>
            <span v-if="responseError" class="response-error">Błąd wysyłania. Spróbuj ponownie za kilka minut.</span>
          </div>
        </form>
      </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      name: '',
      nameValid: false,
      email: '',
      emailValid: false,
      phone: '',
      phoneValid: false,
      message: '',
      messageValid: false,
      responseSuccess: false,
      responseError: false
    }
  },
  mounted(){
    initMap();
  },
  methods: {
    nameValidation(){
      if(this.name == ''){ this.nameValid = true; }
      else { this.nameValid = false }
    },
    emailValidation(){
      const pattern = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
      const isValid = pattern.test(this.email);
      this.emailValid = !isValid;
    },
    phoneValidation(){
      const pattern = /^[0-9]{7,9}$/;
      const isValid = pattern.test(this.phone);
      this.phoneValid = !isValid;
    },
    messageValidation(){
      if(this.message == ''){ this.messageValid = true; }
      else { this.messageValid = false }
    },
    submit(){
      
      this.nameValidation();
      this.emailValidation();
      this.phoneValidation();
      this.messageValidation();

      if(!this.emailValid || !this.phoneValid){
        this.emailValid = false;
        this.phoneValid = false;
      }

      if(!this.nameValid && !this.emailValid && !this.phoneValid && !this.messageValid){

        const data = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        };

        this.$http.post('mail.php', data).then(resp => {
          if(resp.body == 'success'){
            this.responseSuccess = true;
            this.responseError = false;
          }
          else if(resp.body = 'error'){
            this.responseSuccess = false;
            this.responseError = true;
          }
        })
      }

    }
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

        .response-success{
          color: green;
        }
        .response-error{
          color: red;
        }
      }

      .input-error{
        border: 2px solid red;
        border-radius: 6px;
      }
      .input-tip{
        color: red;
        margin-top: 5px;
      }
    } /*  .contact-form  */

  }

</style>
