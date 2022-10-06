<template>
    <button class="customBtn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .customBtn {
        position: relative;
        padding: 10px 25px;
        font-size: 1.2rem;
        background-color: #314b99;
        color: #f0f5ff;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .customBtn:hover {
        background-color: #22346a;
    }

    .customBtn:active {
        transform: scale(0.95);
    }
</style>