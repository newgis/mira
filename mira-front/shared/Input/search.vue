<template>
    <div class="input input-search">
        <label v-if="label" class="input__label">
            {{ label }}
        </label>
        <div class="input__field-wrapper">
            <img src="" alt="Mira Logistic" class="input__icon">
            <input 
                v-model="value"
                class="input__field"
                :type="type"
                :placeholder="placeholder"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchInput",
    props: {
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String,
            default: "Откуда"
        },
        placeholder: {
            type: String,
            default: "test"
        },
        metric: {
            type: String,
            default: "m"
        }
    },
    data() {
        return {
            value: ""
        }
    },
    watch: {
        value(val) {
            console.log(val);
        }
    }
}
</script>
