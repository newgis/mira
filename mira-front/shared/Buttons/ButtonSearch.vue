<template>
    <button
        class="btn-search"
        @mouse-over="onMouseMove"
        @click="onClick"
    >
        <div class="btn-search__animation-content animation-content">
            <div class="animation-content__search"></div>
        </div>
        <div class="btn-search__content">
            <div class="btn-search__title">
                <slot />
            </div>
        </div>
    </button>
</template>

<script>
import btnIcon from '@/static/img/btn-serach-icon.svg';

export default {
    name: "ButtonSearch",
    props: {
        onClick: {},
    },
    data() {
        return {
            btnIcon,
            isAnimation: true
        }
    },
    methods: {
        onMouseMove(event) {
            console.log("mouse move");
            this.isAnimation = false;
        }
    }
}
</script>

<style lang="scss">
.btn-search {
    display: flex;
    flex-direction: column;
    gap: 10px; // отсутствие
    &__animation-content {
        width: 320px;
        height: 50px;
        background: white;
        border-radius: 100px;
        box-shadow: 0 0 10px rgb(233, 233, 233);
        padding: 0 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &::before {
            content: "№";
            animation: textAnimation 8s infinite;
            color: rgb(87, 87, 87);

            @keyframes textAnimation {
                0% {
                    content: "№"
                }
                10% {
                    content: "№ 5"
                }
                20% {
                    content: "№ 51"
                }
                60% {
                    content: "№ 514"
                }
                70% {
                    content: "№ 5142"
                }
                80% {
                    content: "№ 51423"
                }
                90% {
                    content: "№ 514234"
                }
            }
        }

        &::after {
            content: "|";
            color: rgb(87, 87, 87);
            animation: appear 1s infinite;
            opacity: 0;

            @keyframes appear {
                50% {
                    opacity: 1;
                }
            }
        }
    }

    &__content {
        gap: 10px; //+++
        align-items: center;
        display: flex;
        animation: appear 0.3s;
        @keyframes appear {
            0% {
                transform: translateY(20px);
            }
        }

        &:hover {
            .btn-search__loop {
                background: #2853C9;
            }

            .btn-search__title {
                color: #2853C9;
            }
        }
    }


    &__loop {
        background: #2853C9;
        padding: 15px;
        border-radius: 100px;

        @media (max-width: 1024px) {
            width: 40px;
        }
    }

    &__title {
        font-weight: 600;
        font-size: 16px;
        color: #2853C9;
        @media (max-width: 1024px) {
            font-size: 12px;
        }
    }
}
</style>
