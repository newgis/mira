<template>
  <div>
    <v-popup
      v-if="openPopup"
      class="track-widget__popup popup"
      @close-popup="closePopUp">
      <div class="leaveRequestHeader">
        <div class="popup__title">Оставьте заявку,<br/>
          и мы с вами свяжемся</div>
      </div>
      <form ref="form" style="margin-top: 40px" class="track-widget__form form">
        <div>Имя</div>
        <v-input
          v-model="name"
          class="form__inputSignUp"/>
        <div>E-mail</div>
        <v-input
          v-model="mail"
          class="form__inputSignUp"/>
        <div>Номер телефона</div>
        <v-input
          v-model="phoneNumber"
          class="form__inputSignUp"/>
      </form>

      <div class="buttonSend">

        <button class="btn" @click.prevent="leaveRequest">
          Отправить
        </button>
      </div>
    </v-popup>
  </div>
</template>

<script>
import Popup from '@/shared/Popup';
import Input from "@/shared/Input";

export default {
  name: "LeaveRequest",
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
      phoneNumber: '',
      popup: false,
    }
  },
  methods: {
    togglePopup() {
      this.popup = !this.popup;
    },
    closePopUp() {
      this.$emit('close-popup')
      document.querySelector("body").style.overflow = "auto"
    },
    async leaveRequest() {
      await this.$axios.post(`api/leaveRequest`, {
        "email": this.mail,
        "name": this.name,
        "phoneNumber": this.phoneNumber
      })
      document.querySelector("body").style.overflow = "auto"
      this.$refs.form.reset()
    },
  },
}
</script>

<style lang="scss" scoped>
.leaveRequestHeader {
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
}

.buttonSend {
  display: flex;
  justify-content:center;
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
