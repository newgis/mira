<template>
    <div
        class="accordeon"
        :class="{'accordeon__open': isOpen}"
        @click="toggleIsOpen"
    >
        <div class="accordeon__header">
            <div class="accordeon__title">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit?
            </div>
            <button
                class="btn accordeon__toggle"
                :class="{'btn-white': isOpen}"
            >
                <img
                    :src="activeIcon"
                    alt=""
                >
            </button>
        </div>
        <p
            v-if="isOpen"
            class="accordeon__description"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
        </p>
    </div>
</template>

<script>
import whiteArrow from "@/static/img/accordeon-arrow-white.svg"
import blueArrow from "@/static/img/accordeon-arrow-blue.svg"

export default {
    name: 'AccordeonComponent',
    props: {
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            isOpen: false,
            activeIcon: whiteArrow
        }
    },
    watch: {
        isOpen(status) {
            if (status) {
                this.activeIcon = blueArrow;
                return;
            }
            this.activeIcon = whiteArrow;
        }
    },
    methods: {
        toggleIsOpen() {
            this.isOpen = !this.isOpen;
        }
    },
}
</script>

<style lang="scss">
.accordeon {
    width: 100%;
    background: white;
    padding: 40px 40px;
    border-radius: 15px;
    cursor: pointer;
    max-height: 130px;
    @media (max-width: 1024px) {
        padding: 10px;
    }
    &__open {
      max-height: unset;
    }
    .wrapper {
        max-width: 900px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        max-width: 80%;
        font-size: 22px;
        font-weight: 600;
        @media (max-width: 1024px) {
            font-size: 14px;
        }
    }

    &__description {
        max-width: 715px;
        margin-top: 15px;

        @media (max-width: 1024px) {
            font-size: 12px;
            text-align: left;
        }
    }

    &__toggle {
        box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
        padding: 0;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1024px) {
            width: 24px;
            height: 24px;
        }
    }
}
</style>
