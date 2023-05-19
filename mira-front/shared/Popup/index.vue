<template>
  <div class="popup">
    <div class="popup__wrapper">
            <span
              class="popup__cross"
              @click="closePopup"
            >+</span>
      <h3 class="popup__title">{{ title }}</h3>
      <div class="popup__content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupBlock",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    closePopup () {
      this.$emit('close-popup')
      document.querySelector("body").style.overflow = "auto"
    }
  }
}
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #494949bc;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
  }

  &__wrapper {
    padding: 40px;
    background: #F5F5F5;
    position: relative;
    border-radius: 20px;
    min-width: 50%;

    @media (max-width: 1024px) {
      margin: 8px;
      border-radius: 20px;
      padding: 13px 13px 60px;
      min-width: 90%;
    }
  }

  &__cross {
    color: #bbbbbb;
    font-size: 56px;
    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    right: 0;
    cursor: pointer;
    top: 0;
    overflow: hidden;
  }
}
</style>
