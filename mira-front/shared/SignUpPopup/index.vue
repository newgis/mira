<template>
  <div>
    <v-popup
      v-if="openPopup"
      class="track-widget__popup popup"
      @close-popup="closePopUp">
      <div class="signUpHeader">
        <h2 class="popup__title">{{ alreadyHaveAccount ? 'Войти' : 'Регистрация' }}</h2>
      </div>
      <form ref="form" class="track-widget__form form">
        <div v-if="!alreadyHaveAccount" style="margin-top: 1.5rem">Имя</div>
        <v-input
          v-if="!alreadyHaveAccount"
          v-model="name"
          class="form__inputSignUp"/>
        <div style="margin-top: 1.5rem">E-mail</div>
        <v-input
          v-model="mail"
          class="form__inputSignUp"/>
        <div v-if="!alreadyHaveAccount" style="margin-top: 1.5rem">Номер телефона</div>
        <v-input
          v-if="!alreadyHaveAccount"
          v-model="phoneNumber"
          class="form__inputSignUp"/>
        <div style="margin-top: 1.5rem">Пароль</div>
        <v-input
          v-model="password"
          type="password"
          class="form__inputSignUp"/>
      </form>
      <div
        v-if="!alreadyHaveAccount"
        style="margin-top: 15px">
        Регистрируясь, вы принимаете
        <span class="loginButton">пользовательское соглашение и политику конфиденциальности</span></div>
      <div
        v-if="alreadyHaveAccount"
        style="margin-top: 15px">
        Забыли пароль?
        <span class="loginButton" @click="sendUserData">Восстановить</span>
      </div>
      <div class="alreadyHaveAccount">
        <!--        <v-button class="form__button" style="margin-top: 20px; width: 150px" type="button" :onclick="()=>sendUserData">-->
        <!--          {{ alreadyHaveAccount ? 'Войти' : 'Регистрация' }}-->
        <!--        </v-button>-->
        <button class="btn" @click.prevent="sendUserData">
          {{ alreadyHaveAccount ? 'Войти' : 'Регистрация' }}
        </button>
      </div>
      <div class="alreadyHaveAccount">
        <span>{{ alreadyHaveAccount ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?' }}</span>
        &nbsp;
        <span class="loginButton" @click="alreadyHaveAccount = !alreadyHaveAccount">
           {{ alreadyHaveAccount ? 'Создать' : 'Войти' }}
         </span>
      </div>
    </v-popup>
  </div>
</template>

<script>
import Popup from '@/shared/Popup';
import Input from "@/shared/Input";

export default {
  name: "SignUpPopup",
  components: {
    'v-popup': Popup,
    'v-input': Input,
  },
  props: {
    openPopup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mail: '',
      password: '',
      name: '',
      phoneNumber:'',
      alreadyHaveAccount: true
    }
  },
  methods: {
    togglePopup() {
      this.popup = !this.popup;
      document.querySelector("body").style.overflowY = "hidden";

    },
    closePopUp() {
      this.$emit('close-popup')
      this.alreadyHaveAccount = false
    },
    async sendUserData() {
      if (this.alreadyHaveAccount) {
        const data = await this.$axios.post(`api/auth/signin`, {
          "user": {
            "email": this.mail,
            "password": this.password
          }
        }, {withCredentials: true})
        this.$cookies.set('jwt', data.data.data.accessToken)
        document.querySelector("body").style.overflow = "auto"
        await this.$router.push('/account')
      } else {
        const data = await this.$axios.post(`api/auth/signup`, {
          "user": {
            "email": this.mail,
            "login": this.mail,
            "password": this.password,
            phoneNumber: this.phoneNumber,
            "name": this.name
          }
        })
        document.querySelector("body").style.overflow = "auto"
        this.$cookies.set('jwt', data.data.data.accessToken)
        await this.$router.push('/account')
      }
      this.$refs.form.reset()
      document.querySelector("body").style.overflow = "auto"
    },

  },
  deleteAllTokens() {
    this.$cookies.removeAll()
  },
  async refreshCookie() {
    this.$cookies.remove('jwt')
    const data = await this.$axios.post('api/auth/refreshTokens')
    this.$cookies.set('jwt', data.data.data.accessToken)
  },
  async registerUser() {
    await this.$axios.post('api/auth/signup', {
      "user": {
        "email": this.mail,
        "login": this.name,
        "password": this.password
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.signUpHeader {
  display: flex;
  justify-content: center;
}

.alreadyHaveAccount {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.loginButton {
  cursor: pointer;
  color: rgba(30, 66, 163, 1);
}

.btn {
  padding: 10px 20px;
  border-radius: 100px;
  background: #2853C9;
  color: white;
  transition: .2s;
  line-height: 200%;

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 5px 20px;
  }

  &:hover {
    background: #1E42A3;
  }

  &:disabled {
    background: #AEAEAE;
  }

  &:active {
    background: #2853C9;
  }

  &-white {
    background: white;
    color: #121212;

    &:hover {
      background: white;
    }
  }
}
</style>
