# React x Redux 

Project based on the Modern React & Redux [2019] Course on Udemy.

 ### REDUCERS
 
  Removing an element | state.filter(element => element !=== 'hi')
  
  Adding an element | [...state, 'hi' ]
 * 
 * Replacing an elment |ß state.map(el => el === 'hi) ? 'bye' : el)
 * 
 * Updating a property | { ...state, name: 'Sam' }
 * Adding a property | {...state, age: 30}
 * Removing a property | { ...state, age: undefined}
 * over write with ....
    Rules: 
        1. Must return any value besides 'undefined'
        2. Produces 'state' or data to be used inside of your app using only previous state and the action (reducers are pure)
    A reducer is only supposed to look at the previous state and the action type value and produce new state. never return the result of making some request. Return some combination or variation of state + action objects.
    Filter, map or whatever. 

### Action Creators

    Action creators can return action objects.
    Action creators can return functions!
    Actions can optionally have a 'payload'
    Actions must have a type property

    Action creator returns an 'action object' with the fetched data on the payload property in the dispatch method. Some reducers sees the action, 
    returns the data off the payload.

    Action creator executes some API or method and retrives some remote data and uses it as the payload/response. It stores it in the object.
    That's why it's an action creator. It creates the data the action is the dispatch utilizes that object to dispatch to all reducers which then processes that action object.

    State purely mutated.

### Middleware
    Has the ability to STOP, MODIFY or otherwise mess around with actions.
    Tons of open source middleware exist
    Most popular use of middleware is for dealing with async actions