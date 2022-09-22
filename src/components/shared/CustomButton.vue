<template>
    <div @click="$emit('click')" class="inis-custom-button__wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.inis-custom-button__wrapper{
    padding: 6px 20px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
    margin-bottom: 20px;
    text-align: left;
    cursor: pointer;
    color: #000;
    background-color: #F9F9F9;
    border: 1px solid #F0F0F0;
}
</style>