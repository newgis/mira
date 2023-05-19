<template>
    <footer class="footer">
        <div class="wrapper">
            <img
                class="footer__logo" 
                :src="logoHorizontal" 
                alt=""
            >
            <p class="footer__copyright">2022. Все права защищены</p>
        </div>
    </footer>
</template>

<script>
import logoHorizontal from '@/static/img/logo-horizontal.svg';

export default {
    name: "FooterSection",
    data() {
        return {
            logoHorizontal
        }
    }
}
</script>

<style lang="scss">
.footer {
    padding: 25px 0;

    &__logo {
        @media (max-width: 1024px) {
            max-width: 115px;
        }
    }

    &__copyright {
        @media (max-width: 1024px) {
            font-size: 10px;
        }
    }

    .wrapper {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
</style>