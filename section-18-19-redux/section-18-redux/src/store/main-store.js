import {configureStore} from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { authReducer } from './authSlice'
// create Redux store
const store = configureStore({
  // merges map of reducers in to one reducer. This changes how we access state. To access the counter state we use state.counter.counter. Auth is state.auth.isAuthenticated
  reducer: {
    counter:  counterReducer,
    auth: authReducer
  }
})


// export store to provide to react app
export default store

