<template>
    <form>
        <custom-input 
            v-focus
            v-model="title"
            class="input-title"
            placeholder="Название"
            type="text"
        />
        <custom-input
            v-model.number="quantity"
            class="input-quantity"
            placeholder="Количество"
        />
        <custom-input
            v-model.number="distance"
            class="input-distance"
            placeholder="Расстояние"
        />
        <custom-button @click="addRow" style="margin: 10px">Добавить строку</custom-button>
    </form>
</template>

<script>

    export default {
        data() {
            return {
                title: '',
                quantity: 1,
                distance: 0
            }
        },
        methods: {
            addRow() {
                this.$emit('create', this.title, this.quantity, this.distance)
                this.$emit('hide')
            }
        }
    }
</script>

<style lang="css" scoped>
    .input-title,
    .input-quantity,
    .input-distance {
        width: 400px;
    }
</style>