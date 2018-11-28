<template>
  <section class="start">
    <h1>Witaj na stronie pizzeri Don Mariano, zapraszamy na najlepszą pizzę w okolicy!</h1>
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
          autoplay: {
            delay: 3000
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

    .swiper-box {
      width: 100%;
      height: 100%;
      margin: 0 auto;

      .swiper-item {
        width: 100%;
      }
    }
  }


</style>
