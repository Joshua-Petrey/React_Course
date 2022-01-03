import { Component } from "react";
import classes from "./Counter.module.css";
import {connect} from 'react-redux'

// A class based example of Counter
class classCounter extends Component {
  constructor(){
  }

   incrementHandler = () => {
    this.props.increment()
  };

   decrementHandler = () => {
    this.props.decrement();
  };

   toggleCounterHandler = () => {};

  render(){
    return (<main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
    )}
}
// Map Redux state to be an object passed as props to a recieving component(classCounter). 
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

// Send a props objects containing dispatch methods to a recieivng component(classCounter)
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
  }
}
// 
export default connect(mapStateToProps, mapDispatchToProps)(classCounter)