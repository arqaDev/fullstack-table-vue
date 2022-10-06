<template>
    <input class="customInput"
        :value="modelValue"
        @input="updateInput"
    />
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Number]
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style lang="css" scoped>
    .customInput {
        padding: 10px;
        margin: 10px;
        border: 2px solid black;
        border-radius: 10px;
        display: block;
    }
</style>