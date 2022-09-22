export default {
    emails(state){
        return state.emails;
    },
    getEmailDetails(state){
        return function(id){
            return state.emails.find(el => el.id === id);
        }
    }
}