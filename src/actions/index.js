import jsonPlaceholder from '../apis/jsonPlacehodler';


export const fetchPosts = () => {
    return function(dispatch, getState ) {
        const promise = jsonPlaceholder.get('/posts');
        promise.then(data => 
        dispatch({ type: 'FETCH_POSTS', payload: data.data
    })
    )
};
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
}


// TOTALLY TIME!
export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
};

/**
 * REDUX THUNK
 * Action creators can return action objects
 * Action creators can return functions!
 * Actions can optionally have a 'payload',
 * Actions must have a type property
 */
/**
 * 
 * 
 * Action creator runs code to make API REQUEST
 * 
 * API responds with data
 * 
 * Action creator returns an 'action object' with the fetched data
 * on the payload property in the dispatch method
 * 
 * Some reducer sees the action, returns the data off the payload
 * 
 * 
 * 
 * [ ACTION CREATOR] => [ACTION] -> DISPATCH -> REDUCERS -> STATE
 * Action creator,
 *  Executes some API or method and retrieves some remote data
 *  uses it as the payload response, stores it in the object.
 * That's why it's an action creator. It creates the data the action 
 * is  
 *  - returns action object 
 * Dispatch
 *      takes that action object
 *  Reducers 
 *      process that action object.
 * State
 *  State purely mutated
 * 
 * 
 * Action creator called ==== Request made to Typicode API
 * Action returned.
 * Action sent to all reducers.
 * Reducers run.
 *     Data not here     ==== We get response!
 * 
 * Synchronous action creator  - 
 *  Instantly returns an action with data
 *  ready to go!
 * 
 * Asynchronous action creator 
 *  Takes some amount of time for it to
 *  get it's data ready to go.
 * 
 * 
 * redux - redux library.
 * react-redux - Integration layer between react and redux
 * axios - helps us make network requests
 * redux-thunk middleware to help us make requests in a redux app
 * When we dispatch an action, rather than sending to all our
 * reducers, an action is going to sent to all different
 * middleware
 * 
 * MIDDLEWARE IN REDUX
 * Function that gets called with every action we dispatch
 * 
 * Has the ability to STOP, MODIFY or otherwise mess around with actions
 * Tons of open source middleware exist
 * Most popular use of middleware is for dealing with async actions
 * 
 *
 */