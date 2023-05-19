<template>
    <div class="wrapper main-offer__wrapper">
        <section class="main-offer">
            <h1 class="main-offer__header">Грузоперевозки из ОАЭ автомобильным транспортом</h1>
            <p class="main-offer__description">
                Подберем оптимальный вариант транспортировки,
                а также обеспечим сохранность груза.
            </p>
            <div class="main-offer__buttons">
                <v-button :onclick="emitClick" class="calculateButton">Рассчитать стоимость доставки онлайн</v-button>
                <v-track-widget class="searchBlock"/>
            </div>
        </section>
        <img class="main-offer__image" :src="mainImage" alt="">
    </div>
</template>

<script>
import mainImage from '../../static/img/main-image.png';
import ButtonDefault from '@/shared/Buttons/ButtonDefault.vue';
import TrackWidget from "@/widgets/TrackWidget";

export default {
    name: "MainBlock",
    components: {
        'v-button': ButtonDefault,
        // 'v-button-search': ButtonSearch,
        'v-track-widget': TrackWidget,
    },
    data() {
        return {
            mainImage,
            trackPopup: false,
        }
    },
    methods: {
        toggleTrackPopup() {
            this.trackPopup = !this.trackPopup;
        },
        emitClick(){
          this.$emit('clicked')
        }
    }
}
</script>

<style lang="scss">
.main-offer {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
        height: unset;
        margin-top: 50px;
    }

    &__wrapper {
        overflow: clip;

        @media (min-width: 1024px) {
            height: 90vh;
        }
    }

    &__header {
        max-width: 700px;
        margin-bottom: 40px;

        @media (max-width: 1024px) {
            margin-bottom: 20px;
        }
    }

    &__description {
        max-width: 526px;
        margin-bottom: 70px;

        @media (max-width: 1024px) {
            margin-bottom: 40px;
        }
    }

    &__image {
        position: absolute;
        right: 0;
        top: 10%;
        height: 80%;
        z-index: -10;

        @media (max-width: 1024px) {
            position: relative;
            margin-right: -20px;
            margin-left: auto;
            width: 90vw;
        }
    }

    &__buttons {
        display: flex;
        align-items: center;

        @media (max-width: 1024px) {
            width: 100%;
            flex-direction: column;
        }
    }
}
.searchBlock{
  margin-left: 50px;
  @media (max-width: 1024px) {
    margin-top: 30px;
    margin-left: 0 ;
  }
}
.calculateButton {
  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 5px 0;
    width: inherit;
  }
}

.track-popup {
    &__title {
        width: 100%;
        text-align: center;
        font-size: 39px;
    }
}
</style>
