<template>
    <section class="track-search">
        <label class="input__label">
            Поиск груза по трек-номеру
        </label>
        <form class="track-search__form form">
            <v-input
                class="form__input"
                placeholder="Укажите номер отправления"
                type="search"
                :icon="inputIcon"
            />
            <v-button>
                Отследить
                <img :src="btnIcon" alt="">
            </v-button>
        </form>
        <v-my-dispatches />
    </section>
</template>

<script>
import inputIcon from '@/static/img/search-input.svg';
import Input from '@/shared/Input';
import ButtonDefaultVue from '@/shared/Buttons/ButtonDefault';
import MyDispatches from '@/shared/MyDispatches';
import btnIcon from '@/static/img/btn-serach-icon.svg';


export default {
    name: "TrackSearch",
    components: {
        "v-input": Input,
        "v-button": ButtonDefaultVue,
        "v-my-dispatches": MyDispatches
    },
    data() {
        return {
            inputIcon,
            btnIcon
        }
    }
}
</script>

<style lang="scss">
.track-search {
    margin-top: 50px;

    @media (max-width: 1024px) {
        margin-top: 20px;
        width: 100%;
    }

    .input__label {
        display: block;
        margin-bottom: 8px;
    }

    .form {
        display: flex;
        align-items: stretch;
        &__input {
            width: 25vw;
            @media (max-width: 1024px) {
                width: 100%;
            }
        }

        .btn {
            @media (max-width: 1024px) {
                font-size: 0 !important;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            img {
                display: none;
                @media (max-width: 1024px) {
                    display: block;
                }
            }
        }
    }
}
</style>
