import { combineReducers } from 'redux';
import postReducer from './postReducer';


export default combineReducers({
    posts: postReducer
});


/**
 * 
 * REDUCERS
 * 
 * Removing an element | state.filter(element => element !=== 'hi')
 * 
 * Adding an element | [...state, 'hi' ]
 * 
 * Replacing an elment | state.map(el => el === 'hi) ? 'bye' : el)
 * 
 * Updating a property | { ...state, name: 'Sam' }
 * Adding a property | {...state, age: 30}
 * Removing a property | { ...state, age: undefined}
 * over write with ....
 *
 */

/**
 * 
 * ACTION CREATORS:::::
 * 
 *  fetchPosts()
 * 
 * 
 * ACTION:::::
 * type: 'FETCH_POSTS'  
 * PAYLOAD: response
 * so the response can be stored in state ofcourse
 * dispatch({type: 'FETCH_POSTS', payload: response })
 *  
 * 
 * STORE ::: :::::
 * postsReducer
 * if(action.type=== 'FETCH_POSTS')
 */

 /**
  * 
  * REDUCERS RULE
  * 
  * * Must return any value besides 'undefined'
  * 
  * * Produces 'state' or data to be used inside of
  * your app using only previous state and the action (reducers are pure)
  * 
  * Must not return reach 'out of itself' to decide what value to return
  * 
  * 
  */