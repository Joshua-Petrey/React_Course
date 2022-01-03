import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';
const Counter = () => {

  // takes Redux state and returns a slice of the state.
  // useSelector automatically sets up a subscription
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter);

  // returns a dispatch function for sending actions to the reducer
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const increaseHandler = () => {
    // Redux Toolkit auto attaches value to payload property .To access value use payload key on action object in the reducer.
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
      dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
