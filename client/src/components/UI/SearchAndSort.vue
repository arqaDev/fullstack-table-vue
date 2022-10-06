<template>
    <div style="display: flex; align-items: center;">
        <sort-rows
            :modelValue="modelValue"
            @update:modelValue="setSelectedSort"
        />
        <custom-input class="search-input" maxlength="50" :value="searchValue" @input="updateValue"/>
    </div>
</template>

<script>
    import SortRows from './SortRows.vue';

    export default {
        components: {
            SortRows
        },
        props: {
            modelValue: {
                type: String
            },
            searchValue: {
                type: String
            }
        },
        methods: {
            setSelectedSort(e) {
                this.$emit('update:modelValue', e)
            },
            updateValue(e) {
                this.$emit('update:searchValue', e.target.value)
            }
        }
    }
</script>

<style lang="css" scoped>
</style>