<template>
  <section class="calculator">
    <div class="wrapper">
      <h2 class="calculator__title">Онлайн-калькулятор</h2>
      <p class="calculator__description">Рассчитайте стоимость и срок доставки</p>
      <div class="calculator__body">
        <form class="calculator__form form">
          <div class="form__inputs">
            <v-select
              id="from"
              label="Откуда"
              :is-open="selectIsOpen.from"
              :active-option="formData.delivery?.from"
              :items="['Москва', 'Дубай']"
              class="form__select"
              @select:open="setActiveSelectId"
              @select:close="closeSelect"
              @select:change="handleOptionChange"
            />
            <v-select
              id="to"
              label="Куда"
              class="form__select"
              :active-option="formData.delivery?.to"
              :is-open="selectIsOpen.to"
              :items="['Москва', 'Дубай']"
              @select:open="setActiveSelectId"
              @select:close="closeSelect"
              @select:change="handleOptionChange"
            />
            <v-input
              class="form__input"
              label="Вес"
              placeholder="100"
            />
            <v-input
              class="form__input"
              label="Объем"
              placeholder="100"
            />
          </div>
          <div class="calculator__result result">
            <div class="result__block">
              <p class="result__title">
                Предварительная стоимость
              </p>
              <h3 class="result__total">
                $ 7000
              </h3>
            </div>
            <div class="result__block result__item">
              <p class="result__title">
                Сроки доставки
              </p>
              <h3 class="result__total">
                10 дней
              </h3>
            </div>
            <div class="btn result__item" @click="modalOpen">Оставить заявку</div>
          </div>
          <leave-request :open-popup="popupOpen" @close-popup="popupOpen = false"/>
        </form>
        <img
          class="calculator__image"
          :src="calculatorImage"
          alt=""
        />
      </div>
      <div class="calculator__advantages">
        <v-advantage
          :icon="deliveryIcon"
          title="Скорость доставки"
          description="Обеспечим доставку вашего груза в кратчайшие сроки"
        />
        <v-advantage
          :icon="secureIcon"
          title="Безопасность"
          description="Гарантируем сохранность вашего груза"
        />
        <v-advantage
          :icon="optimalIcon"
          title="Оптимальный маршрут"
          description="Подберем лучший вариант транспортировки"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Advantage from '@/shared/Advantage';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import calculatorImage from '@/static/img/calculator.png';
import optimalIcon from "@/static/img/optimal-way.svg";
import deliveryIcon from "@/static/img/delivery-speed.svg";
import secureIcon from "@/static/img/secure.svg";
import LeaveRequest from "@/shared/LeaveRequest";

export default {
  name: "CalcularoSection",
  components: {
    LeaveRequest,
    'v-advantage': Advantage,
    'v-input': Input,
    'v-select': Select
  },
  data() {
    return {
      popupOpen: false,
      // images
      calculatorImage,
      optimalIcon,
      deliveryIcon,
      secureIcon,
      // state
      activeSelectId: null,
      selectIsOpen: {
        from: false,
        to: false
      },
      formData: {
        delivery: {
          from: "Москва",
          to: "Дубай",
        },
        size: {
          weight: null,
          volume: null
        },
        name: null,
        email: null,
        phone: null,
      }
    }
  },
  methods: {
    setActiveSelectId(id) {
      Object.keys(this.selectIsOpen).forEach(key => {
        this.selectIsOpen[key] = false;
      });

      if (id) {
        this.selectIsOpen[id] = true;
      }
    },
    handleOptionChange(id, option) {
      this.formData[id] = option;
    },
    closeSelect(id) {
      this.selectIsOpen[id] = false;
    },
    modalOpen(){
      this.popupOpen = true
      document.querySelector("body").style.overflow = "hidden"
    }
  }
}
</script>

<style lang="scss">
.calculator {
  background: #E9EDEE;
  padding: 50px 0;
  position: relative;

  &__title {
    margin-bottom: 15px;
    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
    }
  }

  &__description {
    margin-bottom: 50px;
    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
    }
  }

  &__body {
    width: 100%;
    margin-bottom: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1024px) {
      flex-direction: column;
      width: unset;
    }
  }

  .form {
    display: grid;
    gap: 24px;//nt

    &__inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px; //nt
      @media (max-width: 1024px) {
        display: grid;
        column-gap: 10%; //nt
      }
    }

    &__select {
      @media (max-width: 1024px) {
        width: 100%;
      }
    }

    &__input {
      @media (max-width: 1024px) {
        width: 100%;
      }

      &__inputSignUp {
        @media (max-width: 1024px) {
          width: 100%;
        }
      }
    }
  }

  .result {
    &__total {
      color: #2853C9;
      font-size: 36px;
      font-weight: 700;

      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
  }
.whereTo {
  margin-left: 24px;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
}
  .result {
    padding: 20px;
    border-radius: 10px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
    &__item {
      margin-left: 70px;
      @media (max-width: 1024px) {
        margin-left: 20px;
        margin-top: 20px;
      }
    }
  }

  &__advantages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 80px; //nt

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  &__image {
    @media (max-width: 1024px) {
      position: absolute;
      width: 30vw;
      bottom: -80px;
      right: -20px;
    }
  }
}
</style>
