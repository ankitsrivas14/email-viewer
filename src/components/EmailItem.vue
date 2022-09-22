<template>
    <div class="inis-email-item__wrapper" :class="{'is-read': item.isRead}" @click="handleShowEmail" >
        <input type="checkbox" :checked="getCheckedStatus" :disabled="item.isRead" @click.stop=" () => {}" @change.stop="handleToggleStatus" />
        {{ item.text }}
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: () =>({})
        },
        checkedStatus: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    computed:{
        getCheckedStatus(){
            return this.checkedStatus;
        },
    },
    methods: {
        handleToggleStatus(){
            this.$emit('toggle-status', this.item.id);
        },
        handleShowEmail(){
            this.$emit('show-email', this.item.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.inis-email-item__wrapper{
    padding: 20px;
    width: 100%;
    min-width: 200px;
    max-width: 600px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
    margin-bottom: 20px;
    text-align: left;
    color: #000;
    background-color: #F9F9F9;
    border: 1px solid #F0F0F0;
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;
    &.is-read{
        color: rgba(0, 0, 0, 0.477);
    }
}
</style>