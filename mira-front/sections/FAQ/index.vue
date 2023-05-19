<template>
  <section class="faq">
    <div class="wrapper">
      <h2 class="faq__title">Часто задаваемые вопросы</h2>
      <div class="faq__items">
        <v-accordeon class="faq__item"/>
        <v-accordeon class="faq__item"/>
        <v-accordeon class="faq__item"/>
        <v-accordeon class="faq__item"/>
      </div>

      <img :src="faqQuestion" alt="" class="faq__image--question">
      <img :src="carGone" alt="" class="faq__image--car">

    </div>
  </section>
</template>

<script>
import Accordeon from './Accordeon';

import faqQuestion from "@/static/img/faq-question.png";
import carGone from "@/static/img/carGone.png";

export default {
  name: "FaqSection",
  components: {
    "v-accordeon": Accordeon
  },
  data() {
    return {
      faqQuestion,
      carGone
    }
  }
}
</script>

<style lang="scss">
.faq {
  padding-top: 50px;
  position: relative;

  .wrapper {
    max-width: 900px;
  }

  &__title {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
  }

  &__items {
    display: grid;
    gap: 20px; //nt
    width: 100%;
  }

  &__image {
    &--question {
      z-index: -10;
      position: absolute;
      top: 10vh;
      left: 4%;

      @media (max-width: 1024px) {
        left: -16px;
        width: 100px;
        top: 42px;
      }
    }

    &--car {
      z-index: -10;
      position: absolute;
      right: 0;
      bottom: 6%;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
}
</style>
