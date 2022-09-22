<template>
    <div class="inis-email-content__wrapper" @keyup.enter="handleCloseMessageBox">
        <div class="inis-email-content__message">
            <div class="inis-email-content__close" @click="handleCloseMessageBox">Close (Esc)</div>
            <div class="inis-actions__wrapper">
                <!-- Checkbox -->
                <CustomButton v-if="!emailData.isRead" @click="handleMarkAsRead">Mark as read (r)</CustomButton>
                <CustomButton @click="handleArchiveStatus">{{ archiveText }} (a)</CustomButton>
            </div>
            <h2 class="inis-email-content__heading">{{ emailData.text }}</h2>
            <p>{{ emailData.message }}</p>
        </div>
        <div class="inis-email-content__overlay" @click="handleCloseMessageBox" />
    </div>
</template>

<script>
//COMPONENTS
import CustomButton from '@/components/shared/CustomButton.vue';

//VUEX
import { createNamespacedHelpers } from 'vuex';
const mapEmailGetters = createNamespacedHelpers('email')['mapGetters']
const mapEmailActions = createNamespacedHelpers('email')['mapActions']


export default {
    components: {
        CustomButton
    },
    props: {
        emailId: {
            type: String,
            required: true,
            default: ''
        }
    },
    computed: {
        ...mapEmailGetters({
            'getEmailDetails': 'getEmailDetails'
        }),
        emailData(){
            if(this.emailId){
                return this.getEmailDetails(this.emailId);
            }
            return {}
        },
        archiveText(){
            if(this.emailData.isArchive){
                return 'Unarchive';
            }
            return 'Archive';
        },
    },
    methods: {
        ...mapEmailActions({
            "MARK_AS_READ": "MARK_AS_READ",
            "MARK_AS_ARCHIVE": "MARK_AS_ARCHIVE",
            "MARK_AS_UNARCHIVE": "MARK_AS_UNARCHIVE",
        }),
        handleCloseMessageBox(){
            this.$emit('close-email-box');
        },
        handleMarkAsRead(){
            this.MARK_AS_READ(this.emailId);
        },
        handleArchiveStatus(){
            if(this.emailData.isArchive){
                this.MARK_AS_UNARCHIVE(this.emailId);
            }
            else{
                this.MARK_AS_ARCHIVE(this.emailId);
            }
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                this.handleCloseMessageBox();
            }
            else if (e.key === 'a') {
                this.handleArchiveStatus();
            }
            else if (e.key === 'r') {
                this.handleMarkAsRead();
            }
        });
    },
    beforeDestroy(){
        window.removeEventListener('keydown', ()=>{});
    }
}
</script>

<style lang="scss" scoped>
.inis-email-content__wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .inis-email-content__overlay{
        background-color: #000;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        opacity: 0.6;
    }
    .inis-email-content__message{
        position: absolute;
        top: 0;
        right: 0;
        width: 50vw;
        max-width: 700px;
        height: 100vh;
        background-color: #fff;
        z-index: 3;
        padding: 30px;
        .inis-email-content__close{
            text-decoration: underline;
            margin-bottom: 20px;
            cursor: pointer;
            width: max-content;
        }
        .inis-actions__wrapper{
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
        }
        .inis-custom-button__wrapper{
            width: max-content;
            margin-bottom: 0;
        }
        .inis-email-content__heading{
            margin-bottom: 16px;
        }
    }
}
</style>