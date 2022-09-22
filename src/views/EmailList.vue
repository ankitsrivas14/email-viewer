<template>
    <div class="inis-email-list__wrapper">
        <h1 class="inis-email-list__heading">{{ pageHeading }}</h1>
        <h2 class="inis-email-list__sub-heading">Emails selected ({{ selectedCount }})</h2>
        <div class="inis-actions__wrapper">
            <!-- Checkbox -->
            <input type="checkbox" :checked="isAllMarkedRead" @change="handleMarkAllRead" />
            <CustomButton @click="markSomeAsRead">Mark as read (r)</CustomButton>
            <CustomButton @click="markSomeAsArchive">{{ archiveText }} (a)</CustomButton>
        </div>
        <div>
            <EmailItem 
                v-for="item in emailList" 
                :key="item.id" 
                :item="item"
                :checkedStatus="getCheckedStatus(item.id)"
                @toggle-status="handleToggleCheckStatus"   
                @show-email="handleShowEmail"
            />
        </div>
    </div>
</template>

<script>

//COMPONENTS
import CustomButton from '@/components/shared/CustomButton.vue';
import EmailItem from '@/components/EmailItem.vue';

//VUEX
import { createNamespacedHelpers } from 'vuex';
const mapEmailGetters = createNamespacedHelpers('email')['mapGetters']
const mapEmailActions = createNamespacedHelpers('email')['mapActions']

export default {
    components: {
        CustomButton,
        EmailItem,
    },
    data(){
        return {
            checkedStatus: [],
        }
    },
    computed: {
        ...mapEmailGetters({
            'emails': 'emails'
        }),
        emailList(){
            const emailSection = this.$route.name;
            if(emailSection === 'inbox'){
                return this.emails.filter(el => !el.isArchive);
            }
            else{
                return this.emails.filter(el => el.isArchive);
            }
        },
        pageHeading(){
            if(this.$route.name === 'inbox'){
                return 'Inbox';
            }
            if(this.$route.name === 'archive'){
                return 'Archive';
            }
            return '';
        },
        archiveText(){
            if(this.$route.name === 'inbox'){
                return 'Archive';
            }
            if(this.$route.name === 'archive'){
                return 'Unarchive';
            }
            return '';
        },
        selectedCount(){
            return this.checkedStatus.reduce((acc, el) => {
                if(el.status === true){
                    return acc += 1;
                }
                return acc;
            }, 0)
        },
        isAllMarkedRead(){
            if(this.emailList?.length === 0){return false}
            if(this.checkedStatus.every(el => el.status === true)){
                return true;
            }
            return false;
        }
    },
    methods: {
        ...mapEmailActions({
            'MARK_SOME_AS_READ': 'MARK_SOME_AS_READ',
            'MARK_SOME_AS_ARCHIVE': 'MARK_SOME_AS_ARCHIVE',
        }),
        handleMarkAllRead(){
            const currentStatus = this.isAllMarkedRead;
            this.checkedStatus = this.checkedStatus.map(el => ({...el, status: !currentStatus}));
        },
        handleToggleCheckStatus(id){
            this.checkedStatus = this.checkedStatus.map(el => {
                if(el.id === id){
                    return {
                        ...el,
                        status: !el.status
                    }
                }
                return el;
            })
        },
        handleShowEmail(id){
            this.$emit('show-email', id)
        },
        markSomeAsRead(){
            const ids = this.checkedStatus.filter(el => el.status).map(el => el.id)
            this.MARK_SOME_AS_READ(ids);
            this.createCheckedStatus();
        },
        markSomeAsArchive(){
            const ids = this.checkedStatus.filter(el => el.status).map(el => el.id)
            this.MARK_SOME_AS_ARCHIVE(ids);
            this.createCheckedStatus();
        },
        getCheckedStatus(id){
            return this.checkedStatus.find(el => el.id === id)?.status;
        },
        createCheckedStatus(){
            this.checkedStatus = []
            this.emailList.forEach(el => {
                this.checkedStatus.push({
                    id: el.id,
                    status: false,
                });
            })
        }
    },
    watch: {
        '$route.name'(){
            this.checkedStatus = [];
            this.createCheckedStatus();
        }
    },
    mounted(){
        this.createCheckedStatus();
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'r') {
                this.markSomeAsRead();
            }
            else if (e.key === 'a') {
                this.markSomeAsArchive();
            }
        });
    },
    beforeDestroy(){
        window.removeEventListener('keydown', ()=>{});
    }
}
</script>

<style lang="scss">
.inis-email-list__wrapper{
    padding: 30px 60px;
    .inis-email-list__heading{
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 6px;
    }
    .inis-email-list__sub-heading{
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .inis-actions__wrapper{
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 30px;
        .inis-custom-button__wrapper{
            width: max-content;
            margin-bottom: 0;
        }
    }
}
</style>