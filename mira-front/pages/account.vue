<template>
    <div class="account">
        <v-header 
            :links="[ 
                { title:'Калькулятор', to:'/#calculator' },
                { title:'О доставке', to:'/#delivery' },
                { title:'Преимущества', to:'/#advantages' },
                { title:'Отзывы', to:'/#reviews' },
                { title:'FAQ', to:'/#faq' },
                { title:'Контакты', to:'/#contacts' },
            ]"
        />
        <div class="wrapper">
            <h1 class="account__title">Личный кабинет</h1>
            <v-track-search />
        </div>
    </div>
</template>

<script>
import Header from '@/sections/Header';
import TrackSearch from '@/sections/TrackSearch';

export default {
    name: "AccountPage",
    components: {
        'v-header': Header,
        'v-track-search': TrackSearch
    },
}
</script>

<style lang="scss">
.account {
    &__title {
        margin-top: 20px;
    }
}
</style>