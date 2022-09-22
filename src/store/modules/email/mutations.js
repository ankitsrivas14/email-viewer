import * as Types from './types'

export default{
    [Types.MARK_AS_READ]: (state, id) => {
        state.emails = state.emails.map(el => {
            if(el.id === id){
                return {
                    ...el,
                    isRead: true
                }
            }
            return el;
        })
    },
    [Types.MARK_AS_ARCHIVE]: (state, id) => {
        state.emails = state.emails.map(el => {
            if(el.id === id){
                return {
                    ...el,
                    isArchive: true
                }
            }
            return el;
        })
    },
    [Types.MARK_AS_UNARCHIVE]: (state, id) => {
        state.emails = state.emails.map(el => {
            if(el.id === id){
                return {
                    ...el,
                    isArchive: false
                }
            }
            return el;
        })
    },
    [Types.MARK_SOME_AS_READ]: (state, ids) => {
        state.emails = state.emails.map(el => {
            if(ids.includes(el.id)){
                return {
                    ...el,
                    isRead: true
                }
            }
            return el;
        })
    },
    [Types.MARK_SOME_AS_ARCHIVE]: (state, ids) => {
        state.emails = state.emails.map(el => {
            if(ids.includes(el.id)){
                return {
                    ...el,
                    isArchive: true
                }
            }
            return el;
        })
    },
    [Types.MARK_SOME_AS_UNARCHIVE]: (state, ids) => {
        state.emails = state.emails.map(el => {
            if(ids.includes(el.id)){
                return {
                    ...el,
                    isArchive: false
                }
            }
            return el;
        })
    },
}