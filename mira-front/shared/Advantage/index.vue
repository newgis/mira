<template>
  <div class="advantage">
    <div class="advantage__icon">
      <img :src="icon" alt="">
    </div>
    <h4 class="advantage__title">{{ title }}</h4>
    <p class="advantage__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "AdvantageComponent",
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss">
.advantage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 5rem;


  &__icon {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    background: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 10px;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }

  &__description {
    font-size: 20px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
}
</style>
