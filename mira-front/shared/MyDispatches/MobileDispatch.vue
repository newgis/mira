<template>
    <section class="mobile-dispatch">
        <h2 class="mobile-dispatch__title">
            Мои отправления
        </h2>
        <div class="mobile-dispatch__items">
            <NuxtLink to="/dispatching/123">
                <div class="mobile-dispatch__card card">
                    <div class="card__header">
                        <p class="card__number order-number">234234</p>
                        <p class="card__title">Дубай-Москва</p>
                        <div class="card__page-link">></div>
                    </div>
                    <ul class="card__description description">
                        <div class="description__item">
                            <span class="description__key">Дата отправления</span>
                            <span>03.08.2022</span>
                        </div>
                        <div class="description__item">
                            <span class="description__key">Дата доставки</span>
                            <span>03.08.2022</span>
                        </div>
                        <div class="description__item">
                            <span class="description__key">Статус</span>
                            <span class="status--delivered">Доставлено</span>
                        </div>
                    </ul>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script>
export default {
    name: "MobileDispatch"
}
</script>

<style lang="scss">
.mobile-dispatch {
    &__title {
        margin-top: 20px;
        margin-bottom: 15px;
        text-align: left;
        font-size: 18px;
    }
    .card {
        background: white;
        border-radius: 10px;
        padding: 15px;
        display: grid;
        gap: 6px; // w8ing CRM
        font-size: 12px;
        &__title {
            margin-left: 10px;
            margin-right: auto;
        }
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__page-link {
            width: 16px;
            height: 16px;
            background: white;
            box-shadow: 0 0 10px rgb(228, 228, 228);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .description {
            &__item {
                display: flex;
                justify-content: space-between;
            }
            &__key {
                font-weight: 500;
            }
        }
    }
}
</style>
