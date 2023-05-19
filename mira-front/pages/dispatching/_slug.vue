<template>
    <section class="dispatching-page">
        <v-header
            :links="[
                { title:'Калькулятор', to: '#calculator' },
                { title:'О доставке', to: '#delivery' },
                { title:'Преимущества', to: '#advantages' },
                { title:'Отзывы', to: '#reviews' },
                { title:'FAQ', to: '#faq' },
                { title:'Контакты', to: '#contacts' },
            ]"
        />
        <div class="wrapper">
            <div class="dispatching-page__title">
                <NuxtLink to="/account">
                    <!-- <span class="return-btn">Назад</span> -->
                    <img class="return-btn" :src="returnIcon" alt="">
                </NuxtLink>
                <h2>Отправление {{ slug }}</h2>
            </div>
            <ul class="dispatching-page__description description">
                <li class="description__item">
                    <strong>Откуда: </strong> Дубай
                </li>
                <li class="description__item">
                    <strong>Куда: </strong> Москва
                </li>
                <li class="description__item">
                    <strong>В пути: </strong> 2 дня
                </li>
                <li class="description__item">
                    <strong>Вес: </strong> 300кг
                </li>
                <li class="description__item">
                    <strong>Объем: </strong> 300 м3
                </li>
            </ul>
            <v-table
                class="dispatching-page__table"
                :titles="['Дата', 'Местоположение']"
                :rows="[
                    { date: '13.08.2022', position: 'Москва' },
                ]"
            />
        </div>
    </section>
</template>

<script>
import returnIcon from "@/static/img/return-btn.svg"
import Header from "@/sections/Header";
import Table from "@/shared/Table";

export default {
    name: "DispatchingPage",
    components: {
        "v-header": Header,
        "v-table": Table
    },
    async asyncData({ params }) {
        const slug = await params.slug;
        return { slug };
    },
    data() {
        return {
            returnIcon
        }
    }
}
</script>

<style lang="scss">
.dispatching-page {
    &__title {
        display: flex;
        gap: 20px; //где вообще этот блок????
        align-items: center;
        .return-btn {
            border-radius: 100%;
            padding: 10px;

            @media (max-width: 1024px) {
                width: 30px;
                padding: 0;
            }

            &:hover {
                background: rgb(239, 239, 239);
                cursor: pointer;
            }
        }
    }

    .description {
        display: flex;
        gap: 15px; // ++++
        flex-wrap: wrap;
        margin-top: 45px;
        &__item {
            font-size: 20px;
            @media (max-width: 1024px) {
                font-size: 14px;
            }
        }
    }

    &__table {
        width: 50%;
        max-width: 100%;
    }

    .table__link {
        pointer-events: none;
        cursor: default;
    }

    .table {
        margin-top: 40px;
        @media (max-width: 1024px) {
            width: 100%;
        }
        &__title {
            @media (max-width: 1024px) {
                display: none;
            }
        }
    }
}
</style>
