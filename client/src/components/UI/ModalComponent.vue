<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div @click.stop class="modal__content">
            <row-form
                @create="addRow"
                @hide="hideModal"
            />
        </div>
    </div>
</template>

<script>
    import RowForm from '../RowForm.vue';

    export default {
        components: {
            RowForm
        },
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideModal() {
                this.$emit('update:show', false)
            },
            addRow(title, quantity, distance) {
                this.$emit('create', title, quantity, distance)
            }
        }
    }
</script>

<style lang="css" scoped>
    .modal {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(4px);
        z-index: 10000;
    }

    .modal__content {
        margin: auto;
        padding: 30px;
        background-color: #fff;
        border-radius: 20px;
    }
</style>