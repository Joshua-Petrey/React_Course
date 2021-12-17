import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';

class Users extends Component{
  constructor() {
    super();
    this.state = {
      showUsers: true,
      nestedState: {},
      data: []
    }
   
  }

  componentDidUpdate() {
    if(this.props.users.length === 0){
      throw new Error("No users provided")
    }
  }

  toggleUsersHandler()  {
    // currState is the state object. We must return a new object with the updated state
    this.setState((currState) => {
      return {
        showUsers: !currState.showUsers
      }
    })
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
  );}
};

export default Users;
