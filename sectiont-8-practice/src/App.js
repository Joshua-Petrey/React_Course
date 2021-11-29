import React, { useState } from 'react';
import AddUser from './components/AddUser'
import UserList from './components/UserList';

function App() {
  const [users, addUsers] = useState([])

  // So AddUser can add a new user to users 
  const addUserToListHandler = (newUser) => {
    addUsers(oldUsers => [...oldUsers, newUser])
  }

  return (
    <div>
      <AddUser createUser={addUserToListHandler} listOfUsers={users}></AddUser>
      <UserList listOfUsers={users}></UserList>
    </div>
  );
}

export default App;
