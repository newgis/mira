<template>
    <button
        class="btn"
        :disabled="isDisabled"
        @click="onclick"
    >
        <slot />
    </button>
</template>

<script>
    export default {
        name: "ButtonComponent",
        props: {
            title: {
                type: String,
                default: ""
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            onclick: {
                type: Function,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
.btn {
    padding: 10px 20px;
    border-radius: 100px;
    background: #2853C9;
    color: white;
    transition: .2s;
    line-height: 200%;
    cursor: pointer;

    @media (max-width: 1024px) {
        font-size: 12px;
        padding: 5px 20px;
    }

    &:hover {
        background: #1E42A3;
    }

    &:disabled {
        background: #AEAEAE;
    }

    &:active {
        background: #2853C9;
    }

    &-white {
        background: white;
        color: #121212;

        &:hover {
            background: white;
        }
    }
}
</style>
