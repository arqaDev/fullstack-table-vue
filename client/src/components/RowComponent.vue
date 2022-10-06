<template>
    <tr>
        <td>{{ row.date }}</td>
        <td>{{ row.title }}</td>
        <td>{{ row.quantity }}</td>
        <td>{{ row.distance }}</td>
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
    .table__body tr {
        background-color: #fff;
    }

    .table__body td{
        text-align: center;
        border: 1px solid black;
        padding: 10px;
    }

    .table__body td:nth-child(1),
    .table__body td:nth-child(3),
    .table__body td:nth-child(4)
    {
        width: 12%;
    }

    .table__body td:nth-child(2) {
        text-align: left;
    }
</style>