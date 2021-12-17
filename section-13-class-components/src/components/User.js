import { Component } from 'react';
import classes from './User.module.css';

// Component allows access to props
class User extends Component {
  // react adds the constructor and calls super() by itself in newer versoins
  // constructor() {
  //   super();
  // }

  // class components can have many method

  // react expects to find a render method in a class component
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
};

export default User;
