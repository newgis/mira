<template>
  <header class="header">
    <div class="wrapper">
      <sign-up-popup :open-popup="openPopup" @close-popup="openPopup = false"/>
      <NuxtLink to="/">
        <img class="header__logo"  :src="logo"/>
      </NuxtLink>
      <nav class="header__nav nav" style="margin-left: auto">
        <ul class="nav__items" :class="{ '_active': mobileOpen }">
          <li class="nav__item nav__item--lk-link">
            <span class="nav__item" @click="checkCookie">Личный кабинет</span>
          </li>
          <li v-for="link in links" :key="link.to" class="nav__item" @click="toggleMenu">
            <a class="nav__item" :href="link.to">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </nav>
      <div style="margin-left: auto" @click="checkCookie">
        <v-button class="header__admin-panel">Личный кабинет</v-button>
      </div>
      <v-auth-widget/>
      <div class="header__menu-toggler" :class="{ '_mobile': mobileOpen }" @click="toggleMenu"></div>
    </div>
  </header>
</template>

<script>
import ButtonComponent from '@/shared/Buttons/ButtonDefault.vue';
import logoHorizontal from '@/static/img/logo-horizontal.svg';
import AuthWidget from '@/widgets/AuthWidget';
import SignUpPopup from "@/shared/SignUpPopup";

export default {
  name: "PageHeader",
  components: {
    SignUpPopup,
    "v-button": ButtonComponent,
    'v-auth-widget': AuthWidget,
  },
  props: {
    links: []
  },
  data() {
    return {
      logo: logoHorizontal,
      mobileOpen: true,
      openPopup: false
    }
  },
  watch: {
    mobileOpen(isOpen) {
      if (isOpen) {
        // document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "";
    }
  },
  mounted() {
    if (window.innerWidth < 1024) {
      this.mobileOpen = false;
    }
  },
  methods: {
    toggleMenu() {
      this.mobileOpen = !this.mobileOpen;
      document.body.style.overflowY = "hidden";
    },
    checkCookie() {
      const cookie = this.$cookies.get('refresh')
      if (!cookie) {
        this.openPopup = true
        document.querySelector("body").style.overflow = "hidden"
      } else {
        this.$router.push('/account')
      }
    }
  },
}
</script>

<style lang="scss">
.header {
  padding: 25px 0;
  position: relative;
  z-index: 10000;
  overflow: hidden;

  &__logo {
    cursor: pointer;

    @media (max-width: 1024px) {
      width: 150px;
      position: absolute;
      z-index: 1000;
      top: 20px;
      left: 20px;
      &._fixed {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
      }
    }
  }

  &__admin-panel {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__menu-toggler {
    width: 30px;
    height: 20px;
    border-top: 1px solid #2853C9;
    border-bottom: 1px solid #2853C9;
    position: relative;
    transition: .2s;
    display: none;

    @media (max-width: 1024px) {
      display: block;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: #2853C9;
      top: calc(50% - 1px);
    }

    &._mobile {
      position: fixed;
      right: 20px;
      top: 20px;
      transform: rotate(45deg);
      border: 0;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: #2853C9;
        top: calc(50% - 1px);
        transform: rotate(90deg);
      }
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .nav {
    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;

      @media (max-width: 1024px) {
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: #F5F5F5;
        top: 0;
        padding-top: 100px;
        left: 0;
        gap: 0;
        &._active {
          display: flex;
        }
      }
    }


    &__item {
      &:hover {
        opacity: .7;
      }
      @media (max-width: 1024px) {
        margin-top: 35px;
      }
      &--lk-link {
        @media (min-width: 1024px) {
          display: none;
        }
      }
    }
  }
}
</style>
