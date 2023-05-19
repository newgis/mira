<template>
    <section class="about-company">
        <div class="wrapper">
            <h2 class="about-company__header">О компании</h2>
            <div class="about-company__picture">
                <div class="about-company__label _left-bottom">
                    Надежные подрядчики
                </div>
                <div class="about-company__label _right-top">
                    Весь комплекс грузоперевозок
                </div>
                <img 
                    class="about-company__image"
                    :src="aboutCompanyImage" 
                    alt=""
                >
            </div>
            <p class="about-company__description">
                Компания Mira Logistics осуществляет весь комплекс автомобильных грузоперевозок 
                из ОАЭ как на короткие, так и на дальние расстояния.
            </p> 
            <p class="about-company__description">
                Компания использует 
                надежных подрядчиков, которые проходят специальную многоуровневую проверку 
                для доступа к перевозкам.
            </p>
        </div>
    </section>
</template>

<script>
import aboutCompanyImage from '@/static/img/about-company-image.png';

export default {
    name: "AboutCompany",
    data() {
        return {
            aboutCompanyImage
        }
    }
}
</script>

<style lang="scss">
.about-company {
    padding: 50px 0;
    overflow-x: hidden;
    background: #F5F5F5;

    .wrapper {
        max-width: 920px;
        position: relative;
    }

    &__header {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
        @media (max-width: 1024px) {
            margin-bottom: 15px;
        }
    }

    &__image {
        width: 100%;
    }

    &__description {
        text-align: center;
        margin-bottom: 20px;
    }

    &__picture {
        position: relative;
        margin-bottom: 50px;
        
        @media (max-width: 1024px) {
            order: 2;
            margin-bottom: 0;
            margin-top: 30px;
        }
    }

    &__label {
        position: absolute;
        padding: 20px 15px;
        background: rgba(255, 255, 255, 0.75);
        font-size: 20px;
        color: #494949;
        border-radius: 10px;
        backdrop-filter: blur(20px);

        @media (max-width: 1024px) {
            font-size: 14px;
            padding: 10px;
            img {
                width: 10px;
            }
        }

        &._left-bottom {
            bottom: 15%;
            left: -140px;
            @media (max-width: 1024px) {
                left: 0;
                bottom: 0%;
            }
        }

        &._right-top {
            top: 15%;
            right: -140px;
            @media (max-width: 1024px) {
                right: 0;
                top: 0%;
            }
        }

    }
}
</style>