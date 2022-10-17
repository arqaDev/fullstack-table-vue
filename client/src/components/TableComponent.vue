<template>
    <table class="table">
        <thead class="table__head">
            <th class="table__head__col">Дата</th>
            <th class="table__head__col">Название</th>
            <th class="table__head__col">Количество</th>
            <th class="table__head__col">Расстояние</th>
        </thead>
        <tbody class="table__body">
            <row-component v-for="row in rows"
                :row="row"
                :key="row.id"
            />
        </tbody>
    </table>
</template>

<script>
    import RowComponent from './RowComponent.vue'

    export default {
        components: {
            RowComponent
        },
        props: {
            rows: {
                type: Array,
            }
        }
    }
</script>

<style lang="css" scoped>
  .table {
    width: 100%;
    margin-top: 30px;
    padding: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    background-color: #d2e1e6;
    border-collapse: collapse;
    border: 2px solid black;
  }

  .table__head__col {
    border: 3px solid black;
    padding: 7px 0;
  }
</style>