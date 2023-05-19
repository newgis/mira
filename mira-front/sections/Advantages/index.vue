<template>
  <section class="advantages">
    <div class="wrapper">
      <h2 class="advantages__header">Преимущества</h2>
      <div class="advantages__items">
        <v-advantage
          :icon="customClearance"
          title="Таможенное оформление"
          description="Все вопросы с таможней и документами закрываем мы"
        />
        <v-advantage
          :icon="onlineTracking"
          title="Онлайн отслеживание"
          description="Вы можете отслеживать доставку в личном кабинете"
        />
        <v-advantage
          :icon="landTransport"
          title="Наземный транспорт"
          description="Дорожные перевозки позволяют существенно снизить стоимость"
        />
        <img  :src="advantagesImage" alt="" class="containersImg" >
        <v-advantage
          :icon="protection"
          title="Ваш груз застрахован"
          description="Страхуем грузы от несчастных стечений обстоятельств"
        />
        <v-advantage
          :icon="minimumResource"
          title="Минимум сил на оформление"
          description="Вам необходимо расписаться всего в 3х уже подготовленных  документах"
        />
      </div>
    </div>
  </section>
</template>

<script>
import landTransport from "@/static/img/landTransport.svg";
import protection from "@/static/img/protection.svg";
import customClearance from "@/static/img/customClearance.svg";
import minimumResource from "@/static/img/minimumResource.svg";
import onlineTracking from "@/static/img/onlineTracking.svg";

import advantagesImage from '@/static/img/advantages-image.png';
import AdvantageComponent from '@/shared/Advantage';

export default {
  name: "AdvantagesSection",
  components: {
    'v-advantage': AdvantageComponent
  },
  data() {
    return {
      advantagesImage,
      landTransport,
      protection,
      customClearance,
      minimumResource,
      onlineTracking,
    }
  }
}
</script>

<style lang="scss">
.advantages {
  background: #E9EDEE;
  padding-top: 50px;
  padding-bottom: 90px;
  position: relative;

  &__header {
    margin-bottom: 70px;
    @media (max-width: 1024px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
.containersImg{
  position: relative;
  object-fit: cover;
  height: 100%;
  top: -32%;
  left: -30%;
  vertical-align: bottom;
  @media (max-width: 1024px) {
    display: none;
  }
}
  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  &__image {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35vw;
    @media (max-width: 1024px) {
      position: relative;
      max-width: 100%;
      width: 100%;
      left: -20px;
    }
  }
}
</style>
