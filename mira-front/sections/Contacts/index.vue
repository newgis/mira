<template>
  <section class="contacts">
    <div class="wrapper">
      <h2 class="contacts__title">Контакты</h2>
    </div>
    <div class="contacts__content">
      <div class="wrapper">
        <div class="contacts__info info">
          <div class="info__block" style="margin-top: 10px">
            <h4 class="info__title">Номер телефона:</h4>
            <p class="info__description" style="margin-top: 5px">+7 962 000 00 00</p>
          </div>
          <div class="info__block" style="margin-top: 10px">
            <h4 class="info__title">Адрес:</h4>
            <p class="info__description" style="margin-top: 5px">Россия, г. Москва, ул. Трубная, 26</p>
          </div>
          <div class="info__block" style="margin-top: 10px">
            <h4 class="info__title">Почта:</h4>
            <p class="info__description" style="margin-top: 5px">MiraLogistics@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import map from "@/static/img/map.png";


export default {
  name: "ContactsSection",

  data() {
    return {
      isShow: false,
      map
    }
  },
  mounted() {
    this.isShow = true;
  }
}
</script>

<style lang="scss">
.contacts {
  position: relative;


  &__title {
    padding: 50px 0;
    @media (max-width: 1024px) {
      text-align: center;
      padding: 25px 0;
      width: 100%;
    }
  }

  .info {
    background: white;
    padding: 35px 50px;
    border-radius: 15px;
    margin: 60px 0;
    @media (max-width: 1024px) {
      padding: 15px;
      width: 70%;
    }

    &__block {
      display: flex;
      flex-direction: column;
      padding: 20px 15px;
      @media (max-width: 1024px) {
        padding: 5px;
      }
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
      color: #2853C9;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }

    &__description {
      font-size: 20px;
      color: #121212;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }

  &__content {
    position: relative;
    background-image: url("static/img/map.png");
    background-size: 100%;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      background-size: 240%;
    }
  }

  &__map {
    animation: mapAnimation 2s infinite;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -10;
    @keyframes mapAnimation {
      50% {
        background: rgb(229, 229, 229);
      }
    }
  }
}
</style>
