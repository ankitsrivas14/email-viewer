import * as Types from './types'

export default {
    MARK_AS_READ({commit}, id){
        commit(Types.MARK_AS_READ, id);
    },
    MARK_AS_ARCHIVE({commit}, id){
        commit(Types.MARK_AS_ARCHIVE, id);
    },
    MARK_AS_UNARCHIVE({commit}, id){
        commit(Types.MARK_AS_UNARCHIVE, id);
    },
    MARK_SOME_AS_READ({commit}, ids){
        commit(Types.MARK_SOME_AS_READ, ids);
    },
    MARK_SOME_AS_ARCHIVE({commit}, ids){
        commit(Types.MARK_SOME_AS_ARCHIVE, ids);
    },
    MARK_SOME_AS_UNARCHIVE({commit}, ids){
        commit(Types.MARK_SOME_AS_UNARCHIVE, ids);
    },
}