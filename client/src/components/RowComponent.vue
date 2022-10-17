<template>
    <tr class="table__body__row">
        <td class="table__body__col">{{ row.date }}</td>
        <td class="table__body__col">{{ row.title }}</td>
        <td class="table__body__col">{{ row.quantity }}</td>
        <td class="table__body__col">{{ row.distance }}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            row: {
                type: Object
            }
        }
    }
</script>

<style lang="css" scoped>
    .table__body__row {
        background-color: #fff;
    }

    .table__body__col{
        text-align: center;
        border: 1px solid black;
        padding: 10px;
    }

    .table__body__col:nth-child(1),
    .table__body__col:nth-child(3),
    .table__body__col:nth-child(4)
    {
        width: 12%;
    }

    .table__body__col:nth-child(2) {
        text-align: left;
    }
</style>