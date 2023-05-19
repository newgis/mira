<template>
  <div class="slide">
    <div class="slide-user">
      <img
        class="slide-user__image"
        :src="userIcon"
        alt=""
      >
      <div class="slide-user__info info">
        <div class="userNameAndRating">
          <h3 class="info__name">{{ name }}</h3>
          <div class="rating">
            <img v-for="index in 5" :key="index" :src="starIcon" alt="star">
          </div>
        </div>
        <div class="details">
          <div style="display: flex; align-items: center">
            <div class="details__item">
              <strong>Откуда:</strong> Дубай
            </div>
            <div class="details__item" style="margin-left: 10px">
              <strong>Куда:</strong> Москва
            </div>
          </div>
          <div class="details__item" style="margin-left: 10px">
            <strong>Срок доставки:</strong> 7 дней
          </div>
        </div>
      </div>
    </div>
    <p class="slide-description">
      <slot/>
    </p>
  </div>
</template>

<script>
import userIcon from '@/static/img/reviews-slider-image.png';
import starIcon from '@/static/img/star.svg'

export default {
  name: "ReviewsSlide",
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {userIcon, starIcon}
  }
}
</script>
<style lang="scss">
.userNameAndRating {
  display: flex;
  align-items: center;
}

.rating {
  margin-bottom: 25px;
  margin-left: auto;
  display: flex;

 @media (max-width: 1024px) {
  margin-top: 15px;
}

}
</style>
