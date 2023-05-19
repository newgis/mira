<template>
  <div class="track-widget">
      <span style="color: #2853C9; font-weight: 600; cursor: pointer; display: flex; align-items: center;"
            @click="togglePopup">
        <img :src="btnIcon">
        <span style="margin-left: 10px">Отследите свой груз </span>
        </span>
    <v-popup
      v-if="popup"
      class="track-widget__popup popup"
      @close-popup="popup = false"
    >
      <h2 class="popup__title">Поиск груза по трек-номеру</h2>
      <form class="track-widget__form form">
        <v-input
          class="form__input"
          placeholder="Укажите номер отправления"
          type="search"
          :icon="inputIcon"
        />
        <v-button class="form__button">
          Отследить
          <img :src="btnIconPopup" alt="">
        </v-button>
      </form>
      <div class="popup__track-info track-info">
        <h3 class="track-info__title">Отправление 123</h3>
        <ul class="track-info__description description">
          <li class="description__item">
            <strong>Откуда:</strong> Дубай
          </li>
          <li class="description__item">
            <strong>Куда:</strong> Москва
          </li>
          <li class="description__item">
            <strong>В пути:</strong> 2 дня
          </li>
        </ul>
      </div>
      <v-table
        class="popup__table"
        table-title=""
        :titles="['Дата', 'Местоположение']"
        :rows="[{ date: '03.02.2022', position: 'Киров' }]"
      />
    </v-popup>
  </div>
</template>

<script>
import inputIcon from '@/static/img/search-input.svg';
import Popup from '@/shared/Popup';
import Input from "@/shared/Input";
import Button from '@/shared/Buttons/ButtonDefault';
import Table from '@/shared/Table';
import btnIcon from '@/static/img/searchIcon.svg';
import btnIconPopup from '@/static/img/Ellipse 2 (Stroke).png';

export default {
  name: "TrackPopup",
  components: {
    'v-popup': Popup,
    'v-input': Input,
    'v-button': Button,
    'v-table': Table
  },
  data() {
    return {
      popup: false,
      inputIcon,
      btnIcon,
      btnIconPopup
    }
  },
  methods: {
    togglePopup() {
      this.popup = !this.popup;
      document.querySelector("body").style.overflow = "hidden"
    }
  }
}
</script>

<style lang="scss">
.track-widget {
  .popup {
    &__title {
      font-size: 39px;
      text-align: center;
      line-height: 140%;
      @media (max-width: 1024px) {
        max-width: 60%;
        font-size: 20px;
        text-align: left;
      }
    }

    &__table {
      pointer-events: none;
      cursor: default;
      width: 100%;
      margin-top: 10px;
    }

    .track-info {
      margin: 20px 0;
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 24px;
        text-align: left;
      }

      &__description {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 25px;
        margin-right: 40%;
        @media (max-width: 1024px) {
          justify-content: space-between;
          margin-right: 0;
        }
      }
    }
  }

  .form {
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 700px;
    gap: 15px; // nt
    margin-top: 24px;
    @media (max-width: 1024px) {
      width: 100%;
      grid-template-columns: 4fr 1fr;
    }

    &__button {
      @media (max-width: 1024px) {
        font-size: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        display: none;
        @media (max-width: 1024px) {
          //background-color: white;

          display: block;
        }
      }
    }
  }
}
</style>
