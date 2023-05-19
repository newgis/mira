<template>
  <section class="about-delivery">
    <div class="wrapper">
      <h2 class="about-delivery__title">О доставке</h2>
      <p class="about-delivery__description">Работаем с различными видами грузов, соблюдая условия их транспортировки и
        хранения</p>
      <img
        class="about-delivery__image"
        :src="deliveryImage"
        alt=""
      >
      <div class="about-delivery__toggle toggle">
        <button
          class="btn toggle__btn"
          :class="{'btn-white': deliveryType === 'to'}"
          @click="setDeliveryType('from')"
        >Из ОАЭ
        </button>
        <button
          class="btn toggle__btn"
          :class="{'btn-white': deliveryType === 'from'}"
          @click="setDeliveryType('to')"
        >В ОАЭ
        </button>
      </div>
      <div class="about-delivery__prems prems">
        <div class="prems__items">
          <div class="prems__item">
            <span class="prems__title">{{ deliveryAmountInfo[deliveryType].departuresAmount }}</span>
            <div class="prems__throw-line"></div>
            <p class="prems__description" style="margin-left: 40px">Количество отправлений в месяц (машин)</p>
          </div>
          <div class="prems__item" style="margin-top: 35px">
            <span class="prems__title">{{ deliveryAmountInfo[deliveryType].averageTime }}</span>
            <div class="prems__throw-line"></div>
            <p class="prems__description">Среднее время доставки</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import deliveryImage from '@/static/img/about-delivery-bg.png';

export default {
  name: "AboutDelivery",
  data() {
    return {
      toggleState: 0,
      deliveryType: "from",
      deliveryImage,
      deliveryAmountInfo: {
        to: {
          departuresAmount: 2473,
          averageTime: '12-20'
        },
        from: {
          departuresAmount: 1420,
          averageTime: '9-22'
        }
      }
    }
  },
  methods: {
    setDeliveryType(type) {
      this.deliveryType = type;
    },
  }
}
</script>

<style lang="scss">
.about-delivery {
  position: relative;
  overflow-x: hidden;
  padding-top: 50px;
  padding-bottom: 180px;
  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }

  &__title {
    margin-bottom: 15px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  &__description {
    margin-bottom: 60px;
    @media (max-width: 1024px) {
      margin-bottom: 20px;
    }
  }

  &__image {
    position: absolute;
    right: 0;
    top: 10%;
    height: 80%;
    left: 50%;
    z-index: -100;
    @media (max-width: 1024px) {
      max-width: 130%;
      position: relative;
      height: unset;
      margin-left: auto;
      margin-right: 0;
      right: -15%;
      left: -15%;
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 1000px;
    align-items: flex-start;
    width: unset;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
      margin: 20px auto;
    }
  }

  .prems {
    @media (max-width: 1024px) {
      width: 100%;
    }

    &__items {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: 1024px) {
        align-items: stretch;
      }
    }

    &__item {
      background: white;
      border-radius: 15px;
      display: flex;
      align-items: center;
      padding: 26px 40px;
      min-width: 100%;

      @media (max-width: 1024px) {
        padding: 10px;
        display: grid;
        grid-template-columns: 25% 1% 60%;
        gap: 20px; //nt
      }
    }

    &__title {
      font-weight: 600;
      font-size: 36px;
      line-height: 140%;

      @media (max-width: 1024px) {
        font-size: 18px;
        width: 100%;
        text-align: center;
      }
    }

    &__description {
      max-width: 270px;
      margin-left: 40px;

      @media (max-width: 1024px) {
        max-width: 170px;
        text-align: left;
        margin-left: 0;

      }
    }

    &__throw-line {
      width: 1px;
      height: 50px !important;
      display: block;
      background: #AFAFAF;
      margin-left: 40px;
      @media (max-width: 1024px) {
       margin-left: 0;
      }
    }
  }
}
</style>
