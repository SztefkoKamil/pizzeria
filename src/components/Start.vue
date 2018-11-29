<template>
  <section class="start">
    <h2 class="start-title">Zapraszamy na najlepszą pizzę w okolicy!</h2>
    <div>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-1.jpg" alt="slider pizza image 1">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-2.jpg" alt="slider pizza image 2">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-3.jpg" alt="slider pizza image 3">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-4.jpg" alt="slider pizza image 4">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-5.jpg" alt="slider pizza image 5">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-6.jpg" alt="slider pizza image 6">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-7.jpg" alt="slider pizza image 7">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-8.jpg" alt="slider pizza image 8">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="src/assets/img/slide/slide-pizza-9.jpg" alt="slider pizza image 9">
        </swiper-slide>
      </swiper>
    </div>
    <p>Witamy serdecznie na stronie naszej pizzerii. Działamy już ponad 8 lat i dzięki naszym klientom zapewne będziemy działać stale. Przez tak długi czas mieliśmy możliwość nauczyć się jak dopracować nasze pizze, aby były one najwyższej jakości przy możliwie najlepszej cenie. Ponieważ specjalnie duży nacisk kładziemy na jakość, nasze produkty są produkowane na bazie tylko naturalnych składników, nie używamy chemicznych spulchniaczy do ciasta, nie stosujemy konserwantów do sosów, wybieramy tylko lokalne firmy, które gwarantują najwyższą jakość produktu. Przekonaj się że najwyższa jakość naszej pizzy to nie plotka! Odwiedź nas, lub zamów pizzę z dostawą do domu, dzwoń pod numer <strong>11 222 33 44</strong>. Zapraszamy!</p>
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
  @import "../scss/_variables.scss";


  .start{
    width: $mainWidth;
    min-height: 600px;
    background: $bgColor;

    .start-title{
      font-family: 'Open Sans', sans-serif;
    }

    .swiper-box {
      width: 700px;
      margin: 0 auto;

      .swiper-item {
        width: 100%;
      }
    }
  }


</style>
