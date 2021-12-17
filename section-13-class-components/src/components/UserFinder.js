import { Fragment,  Component } from "react";
import styles from './UserFinder.module.css'
import Users from "./Users";
import UsersContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  // give component access to context property. Classes can only use contentType once per class
  static contextType = UsersContext

  constructor(){
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }
  
  componentDidMount() {
    // update state
    this.setState({filteredUsers: this.context.users})
  }

  componentDidUpdate(prevProps, prevState) {
     // if searchTerm changed run function
      if(prevState.searchTerm !== this.state.searchTerm) {
         this.setState({
           filteredUsers: this.context.users.filter((user) =>
             user.name.includes(this.state.searchTerm)
           ),
         });
      }
  }

  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value})
  };

  render() {
  return (
    <Fragment>
      <div className={styles.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
      </ErrorBoundary>
    </Fragment>
  );}
};

export default UserFinder;
