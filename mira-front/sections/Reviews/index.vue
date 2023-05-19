<template>
  <section class="reviews">
    <div class="wrapper">
      <h2 class="reviews__title">Отзывы</h2>
      <div class="reviews__content">
        <Popup
          v-if="openPopup"
          class="track-widget__popup popup"
          @close-popup="openPopup = false"
          @focusout="openPopup = false">
          <div class="signUpHeader">
            <div class="popupReviewTitle">Ваш отзыв</div>
          </div>
          <div class="signUpHeader" style="margin-top: 30px">
            <div class="popup__subHeader">Пожалуйста оцените нашу работу</div>
          </div>
          <form class="track-widget__form form">
            <div style="display: flex; justify-content: center; margin-top: 15px;"><img
              v-for="index in 5"
              :key="index"
              :src="rating+1>index ? star : starDisabled"
              style="cursor: pointer"
              alt=""
              @click="setRating(index)">
            </div>
            <div class="popup__subHeader" style="margin-top: 40px">Имя</div>
            <Input
              v-model="name"
              class="form__input"/>
            <div class="popup__subHeader" style="margin-top: 21px">Трек номер последнего груза</div>
            <Input
              v-model="trackNumber"
              class="form__input"/>
            <div class="popup__subHeader" style="margin-top: 21px">Комментарий</div>
            <textarea
              v-model="comment"
              class="textAreaReview"/>
          </form>
          <div style="display: flex; justify-content: center">
            <button class="btn" style="margin-top: 40px" @click.prevent="sendUserData">
              Отправить
            </button>
          </div>
        </Popup>
        <div class="reviews__description">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor.Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, dis parturient montes,
            nascetur ridiculus mus
          </p>
          <div class="btn" style="margin-top: 40px" @click="openModal">
            Оставить отзыв
          </div>
        </div>

        <div class="swiperAndQuotes">
          <img :src="quotes" alt="" class="swiperAndQuotes__quotes">
          <swiper
            ref="swiper"
            class="reviews__slider">
            <swiper-slide>
              <reviews-slide name="Ирина" class="reviews__slide">

                Один раз пользовалась услугами Mira Logistics. Отправляла груз из Дубай в Москву. Я очень довольна, что
                выбрала эту транспортную компанию. Очень быстро и вещи
                в идеальном состоянии.
              </reviews-slide>
            </swiper-slide>
            <swiper-slide>
              <reviews-slide name="Марина" class="reviews__slide">
                Два раза пользовалась услугами Mira Logistics. Отправляла груз из Дубай в Москву. Я очень довольна, что
                выбрала эту транспортную компанию. Очень быстро и вещи
                в идеальном состоянии.
              </reviews-slide>
            </swiper-slide>
            <swiper-slide>
              <reviews-slide name="Паулина" class="reviews__slide">
                Три раза пользовалась услугами Mira Logistics. Отправляла груз из Дубай в Москву. Я очень довольна, что
                выбрала эту транспортную компанию. Очень быстро и вещи
                в идеальном состоянии.
              </reviews-slide>
            </swiper-slide>
          </swiper>
          <div class="navigation">
            <button style="margin-right: 5px" @click="slidePrev"><img :src="arrowBackButton" alt=""></button>
            <button style="margin-left: 5px" @click="slideNext"><img :src="arrowButton" alt=""></button>
          </div>
        </div>
        <img :src="reviewsPen" alt="" class="reviews__image--pen">
      </div>
    </div>
  </section>
</template>

<script>
import {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import ReviewsSlide from './ReviewsSlide/index.vue';
import reviewsPen from "@/static/img/pen.svg";
import quotes from "@/static/img/quotes.svg";
import star from "@/static/img/reviewStar.svg";
import starDisabled from "@/static/img/starDisabled.svg";
import arrowButton from "@/static/img/arrowButton.svg";
import arrowBackButton from "@/static/img/arrowBackButton.svg";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Popup from '@/shared/Popup';
import Input from "@/shared/Input";


export default {
  name: "ReviewsSection",
  components: {
    Swiper,
    SwiperSlide,
    ReviewsSlide,
    Popup,
    Input
  },
  setup() {
  },
  data() {
    return {
      swiper: null,
      modules: [Pagination, Navigation],
      reviewsPen,
      quotes,
      arrowButton,
      arrowBackButton,
      openPopup: false,
      star,
      starDisabled,
      name: '',
      trackNumber: '',
      comment: '',
      rating: 0
    }
  },
  methods: {
    slidePrev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    slideNext() {
      this.$refs.swiper.$swiper.slideNext();
    },
    setRating(starIndex) {
      this.rating = starIndex
    },
    openModal(){
      this.openPopup = true
      document.querySelector("body").style.overflow = "hidden"
    },
    async sendUserData() {
      await this.$axios.post('api/sendReview', {
        "name": this.name,
        "comment": this.comment,
        "rating": this.rating + 1,
        "trackNumber": this.trackNumber
      },)
      document.querySelector("body").style.overflow = "auto"
      this.openPopup = false
    },
  },
}
</script>

<style lang="scss">
.popupReviewTitle{
  font-weight: 600;
  font-size: 1.25rem;
}
.reviews {
  padding: 60px 0;
  background: #E9EDEE;
  position: relative;

  .wrapper {
    position: relative;
  }

  @media (max-width: 1024px) {
    text-align: left !important;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px; //nt

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    margin-bottom: 30px;

    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
      margin-bottom: 0;
    }
  }

  &__image {
    &--pen {
      position: absolute;
      z-index: 0;
      right: -108px;

      @media (max-width: 1024px) {
        width: 218px;
        right: -39px;
        bottom: -18px;
      }
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;

    @media (max-width: 1024px) {
      align-items: center;
      margin-top: 20px;
    }
  }

  &__slider {
    width: 100%;
    background: white;
    border-radius: 15px;

    .swiper {
      &-slide {
        width: 100% !important;
      }
    }
  }

  .slide {
    display: flex;
    flex-direction: column;
    padding: 20px 35px 50px;
    min-height: 300px;

    @media (max-width: 1024px) {
      min-height: 0;
      padding: 10px 15px;
    }

    &-user {
      display: flex;
      margin-bottom: 22px;
      align-items: center;

      @media (max-width: 1024px) {
        gap: 10px;
        margin-bottom: 10px;
      }

      &__image {
        @media (max-width: 1024px) {
          width: 70px;
        }
      }
    }

    &-description {
      @media (max-width: 1024px) {
        text-align: left;
        font-size: 12px;
      }
    }
  }

  .info {
    margin-left: 20px;
    @media (max-width: 1024px) {
      margin-left: 10px;
    }
    &__name {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 25px;

      @media (max-width: 1024px) {
        text-align: left;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }

  .details {
    display: flex;
    flex-wrap: wrap;


    @media (max-width: 1024px) {
      font-size: 10px;

    }
  }
}

.swiperAndQuotes {
  &__quotes {
    z-index: 1000;
    position: absolute;
    right: 586px;
    top: 17%;
    @media (max-width: 1024px) {
      max-width: 5%;
      margin-left: 2px;
      z-index: 1000;
      position: absolute;
      top: 56%;
      left: 0;
      bottom: 0
    }
    @media (max-width: 500px) {
      max-width: 9%;
      margin-left: 2px;
      z-index: 1000;
      position: absolute;
      top: 53%;
      left: 0;
      bottom: 0
    }
  }
}

.navigation {
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1500;
  @media (max-width: 1024px) {
    position: unset;
    right: 0;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
}

.signUpHeader {
  display: flex;
  justify-content: center;
}

.popup {
  &__title {
    font-size: 39px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  &__subHeader {
    font-weight: 600;
    font-size: 19px;
  }
}

.textAreaReview {
  width: 100%;
  height: 100px;
  border-radius: 10px;
}
</style>
