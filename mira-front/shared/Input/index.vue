<template>
  <div class="input">
    <label v-if="label" class="input__label">
      {{ label }}
    </label>
    <div class="input__field-wrapper">
      <img v-if="icon" :src="icon" class="input__icon" alt="Mira Logistic">
      <input class="input__field" :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
      <span v-if="metric" class="input__metric">
                {{ metric }}
            </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    type: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    metric: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    }
  }
}
</script>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 22px;
    font-weight: 700;
    color: #121212;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  &__icon {
    margin-left: 15px;
    margin-right: 0;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__field-wrapper {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background: white;
  }

  &__field {
    width: 100%;
    background: white;
    outline: none;
    padding: 15px 50px 15px 15px;

    @media (max-width: 1024px) {
      font-size: 14px;
      padding-right: 0px;
    }
  }

  &__metric {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
    background: white;
  }
}
</style>
