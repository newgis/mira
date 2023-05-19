<template>
  <div class="select input" @click="isOpen = !isOpen">
    <label v-if="label" class="select__label input__label">
      {{ label }}
    </label>
    <div
      class="select__field input__field"
      @click="toggleSelect"
    >
      {{ activeOption || "" }}
      <div v-show="isOpen" class="select__options">
        <div
          v-for="(option, key) in items"
          :key="key"
          class="select__option" @click="selectItem(option)">{{option}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    items: {
      type: Array,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      activeOption: '',
      isOpen: false
    }
  },
  mounted() {
    document.addEventListener("click", this.closeSelect, true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeSelect);
  },
  methods: {
    closeSelect() {
      this.$emit("select:close", this.id);
    },
    toggleSelect() {
      this.$emit(`select:${this.isOpen ? "close" : "open"}`, this.id);
    },
    selectOption(option) {
      this.$emit("select:change", this.id, option);
      this.$emit("select:close", this.id);
    },
    selectItem(item) {
      this.activeOption = item
      this.toggleSelect()
    }
  }
}
</script>

<style lang="scss">
.select {
  cursor: pointer;
  position: relative;
  border-radius: 10px;

  &__field {
    border-radius: 15px;
    position: relative;
    height: 54px;

    &::after {
      content: "";
      transition: .2s;
      width: 10px;
      height: 10px;
      border-top: 2px solid black;
      border-right: 2px solid black;
      transform: rotate(135deg);
      position: absolute;
      right: 15px;
      top: calc(40%);
    }

    &._active {
      &::after {
        transform: rotate(315deg);
      }
    }
  }

  &__options {
    width: 100%;
    position: absolute;
    border-radius: 10px;
    overflow: hidden;
    background: white;
    top: 65px;
    left: 0;
    z-index: 10000;
    box-shadow: 0 0 20px rgb(234, 234, 234);
  }

  &__option {
    padding: 10px;
    transition: .2s;
    background: white;
    position: relative;

    &:hover {
      background: rgb(245, 245, 245);
    }
  }
}
</style>
