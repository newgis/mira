<template>
  <div class="auth-widget">
    <v-popup v-if="popup" title="Регистрация" :on-close="togglePopup">
      <form class="auth-widget__form form">
        <v-input label="Имя"/>
        <v-input label="E-mail"/>
        <v-input label="Пароль"/>
        <span class="form__policy policy">
                    Регистрируясь, вы принимаете
                    <NuxtLink class="policy__link" to="https://google.com">пользовательское соглашение</NuxtLink>
                    и
                    <NuxtLink class="policy__link" to="https://google.com">политику конфиденциальности</NuxtLink>
                </span>
        <v-button>Зарегистрироваться</v-button>
      </form>
      <p v-if="type === 'signup'" class="auth-widget__toggler toggler">
        Уже есть аккаунт?
        <button class="toggler__btn" @click="() => changeFormType('signin')">Войти</button>
      </p>
      <p v-if="type === 'signin'" class="auth-widget__toggler toggler">
        Ещё нет акканта?
        <button class="toggler__btn" @click="() => changeFormType('signup')">Создать</button>
      </p>
    </v-popup>
  </div>
</template>

<script>
import Popup from "@/shared/Popup";
import Input from '@/shared/Input';
import Button from '@/shared/Buttons/ButtonDefault';

export default {
  name: "AuthWidget",
  components: {
    'v-popup': Popup,
    'v-input': Input,
    'v-button': Button
  },
  data() {
    return {
      popup: false,
      type: 'signup' // 'signup' | 'signin' | 'change'
    }
  },
  methods: {
    changeFormType(newType) {
      this.type = newType;
    },
    togglePopup() {
      this.popup = !this.popup;
    }
  }
}
</script>

<style lang="scss">
.auth-widget {
  &__form {
    display: grid;
    gap: 20px; //nt
    margin-top: 20px;
    width: 480px;

    @media (max-width: 1024px) {
      width: 100%;
    }

    .btn {
      margin: auto;
    }
  }

  .toggler {
    margin-top: 20px;
    text-align: center;

    &__btn {
      color: #1E42A3;
    }
  }

  .popup {
    &__title {
      font-size: 39px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }

  .policy {
    &__link {
      color: #4E68AD;
    }
  }
}
</style>
