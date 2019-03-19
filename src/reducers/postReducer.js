
export default ( state = [], action ) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}

/**
 * 
 * export default (state, action) => {
 * 
 * }
 * Reducer is executed once to produe
 * 
 * state v1
 * 
 * The state is not going to be the same, the 2nd time.
 * the state is going to be the last time it was ran
 * 
 * State v2, state v3, state v4
 * 
 * A reducer is only supposed to look at the previous state
 * and the action type value and produce new state. never return the result
 * of making some request. 
 * return some combo or variation of
 * state + action objects.
 * filter, map or whatever.
 * Must not mutate it's input ( state argument )
 * Must not reach 'out of itself' to decide what value to return
 * (reducers are pure ! )
 */