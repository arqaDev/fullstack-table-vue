<template>
    <select class="sort-select" :value="modelValue" @change="changeOption">
        <option value=""></option>
        <option value="title">Название</option>
        <option value="quantity">Количество</option>
        <option value="distance">Расстояние</option>
    </select>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: String
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style lang="css" scoped>
    .sort-select {
        height: 40px;
        width: 200px;
        align-items: center;
        background-color: inherit;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        margin-right: 30px;
        cursor: pointer;
    }

</style>