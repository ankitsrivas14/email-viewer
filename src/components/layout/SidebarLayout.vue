<template>
    <div class="inis-sidebar__wrapper">
        <div class="inis-sidebar__top-items">
            <div v-for="item in sidebarRouteItems" :key="item.id">
                <router-link :to="`/${item.linkTo}`"><CustomButton>{{ item.title }}</CustomButton></router-link>
            </div>
        </div>
        <div class="inis-sidebar__bottom-items">
            <CustomButton>Logout</CustomButton>
        </div>
    </div>
</template>

<script>

//COMPONENTS
import CustomButton from '@/components/shared/CustomButton.vue';
export default {
    components: {
        CustomButton,
    },
    computed: {
        sidebarRouteItems(){
            return [
                {
                    id: 'inbox',
                    title: 'Inbox',
                    linkTo: 'inbox',
                    count: '3'
                },
                {
                    id: 'archive',
                    title: 'Archive',
                    linkTo: 'archive',
                    count: '0'
                }
            ]
        },
    }
}
</script>

<style lang="scss" scoped>
.inis-sidebar__wrapper{
    width: 30vw;
    max-width: 300px;
    min-width: 200px;
    background-color: #373636;
    color: #000;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a{
        text-decoration: none;
    }
}
</style>