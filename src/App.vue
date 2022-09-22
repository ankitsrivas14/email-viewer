<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <EmailContent
      v-if="showEmail" 
      :emailId="emailId"
      @close-email-box="handleCloseEmail" 
    />
    <div class="inis-home__container">
      <SidebarLayout />
      <div>
        <router-view 
          @show-email="handleShowEmail"
        />
      </div>
    </div>
  </div>
</template>

<script>
  //COMPONENTS
import SidebarLayout from '@/components/layout/SidebarLayout.vue';
import EmailContent from '@/components/EmailContent.vue';


export default {
    components: {
      SidebarLayout,
      EmailContent,
    },
    data(){
      return {
        showEmail: false,
        emailId: ''
      }
    },
    methods: {
      handleShowEmail(id){
        this.emailId = id;
        this.showEmail = true;
      },
      handleCloseEmail(){
        this.emailId = '';
        this.showEmail = false;
      }
    }
}
</script>



<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.inis-home__container{
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
