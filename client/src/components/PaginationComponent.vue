<template>
    <div class="pagination__wrapper">
        <ul v-for="pageNumber in pages" :key="pageNumber" @click="changePage(pageNumber)">
            <li class="pagination__pages" :class="{'pagination__current-page': page === pageNumber}">
                {{ pageNumber }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            page: {
                type: Number,
                required: true
            },
            pages: {
                type: Number,
                required: true
            }
        },
        methods: {
            changePage(pageNumber) {
                this.$emit('update:page', pageNumber)
            }
        }
    }
</script>

<style lang="css" scoped>
    .pagination__wrapper {
        display: flex;
        margin-top: 60px;
    }

    .pagination__pages {
        margin: 2px;
        height: 44px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        list-style-type: none;
        border: 2px solid #4469d8;
        cursor: pointer;
    }


    .pagination__current-page, .pagination__pages:hover {
        background-color: #4469d8;
        color: #fff;
    }
</style>