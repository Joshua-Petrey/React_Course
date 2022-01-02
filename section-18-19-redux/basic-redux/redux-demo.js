const redux = require('redux')

// Reducer takes old state and action object.Reducers runs once when a store is created, give state a default value or error will occur. Pure function no side effects.
const counterReducer = (oldState = {counter: 0}, action) => {
  if(action.type === 'increment') {
    return {
      counter: oldState.counter + 1,
    };
  }
  // returns a new state object. This runs by default if an action type is unkown
  return oldState
}

// create store. createStore takes all reducers that will operate on the data inside the store
const centralStore = redux.createStore(counterReducer)

// subscriber function is fired by Redux on state change
const counterSubscriber = () => {
  const latestState = centralStore.getState()
  console.log(latestState)
}

// make redux aware of subscriber function
centralStore.subscribe(counterSubscriber)

// disptach an action. Counter is 2
centralStore.dispatch({type: 'increment'})