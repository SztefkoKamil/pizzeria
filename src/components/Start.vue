<template>
  <section class="start">
    <h2 class="start-title">Zapraszamy na najlepszą pizzę w okolicy!</h2>
    <div class="swiper-wrapper">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-1.jpg" alt="slider pizza image 1">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-2.jpg" alt="slider pizza image 2">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-3.jpg" alt="slider pizza image 3">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-4.jpg" alt="slider pizza image 4">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-5.jpg" alt="slider pizza image 5">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-6.jpg" alt="slider pizza image 6">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-7.jpg" alt="slider pizza image 7">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-8.jpg" alt="slider pizza image 8">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/img/slide/slide-pizza-9.jpg" alt="slider pizza image 9">
        </swiper-slide>
      </swiper>
    </div>
    <p class="start-about">Witamy serdecznie na stronie naszej pizzerii. Działamy już ponad 8 lat i dzięki naszym klientom zapewne będziemy działać stale. Przez tak długi czas mieliśmy możliwość nauczyć się jak dopracować nasze pizze, aby były one najwyższej jakości przy możliwie najlepszej cenie. Ponieważ specjalnie duży nacisk kładziemy na jakość, nasze produkty są produkowane na bazie tylko naturalnych składników, nie używamy chemicznych spulchniaczy do ciasta, nie stosujemy konserwantów do sosów, wybieramy tylko lokalne firmy, które gwarantują najwyższą jakość produktu. Przekonaj się że najwyższa jakość naszej pizzy to nie plotka! Odwiedź nas, lub zamów pizzę z dostawą do domu, dzwoń pod numer <strong>11 222 33 44</strong>. Zapraszamy!</p>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          direction: 'horizontal',
          slidesPerView: 1,
          mousewheel: false,
          loop: true,
          spaceBetween: 0,
          speed: 1000,
          autoplay: {
            delay: 2000
          }
        }
      }
    }
}
</script>

<style lang="scss">
  @import "../scss/_common.scss";


  .start{
    width: $mainWidth;
    min-height: 600px;
    background: $bgColor;

    .start-title{
      font-family: $titleFont;
      text-align: center;
      font-size: 40px;
      padding: 30px;

      @media screen and (max-width: 880px){
        padding: 30px 140px;
      }

      @media screen and (max-width: 780px){
        font-size: 36px;
        padding: 30px 120px;
      }

      @media screen and (max-width: 690px){
        font-size: 36px;
        padding: 30px 76px;
      }

      @media screen and (max-width: 602px){
        font-size: 34px;
        padding: 30px 42px;
      }

      @media screen and (max-width: 342px){
        font-size: 30px;
        padding: 30px 42px;
      }
    } /*  .start-title  */

    .swiper-wrapper{
      background: $sectionColor;
      padding: 20px 0 18px 0;
      border-radius: 15px;
      
      .swiper-box {
        width: 700px;
        margin: 0 auto;
  
        .swiper-item {
          width: 100%;
        }

        @media screen and (max-width: 700px){
          width: 100vw;

          img{
            width: 100vw;
          }
        }
      }

      @media screen and (max-width: 960px){
        border-radius: 0;
      }
    } /*  .swiper-wrapper  */

    .start-about{
      padding: 40px;
      font-size: 18px;
      line-height: 24px;;
      text-align: center;

      @media screen and (max-width: 602px){
        font-size: 16px;
      }

      @media screen and (max-width: 420px){
        padding: 30px;
      }
    }

    @media screen and (max-width: 960px){
      width: 100vw;
    }
  }
</style>
