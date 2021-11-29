import { useState } from 'react';
import styles from './AddUser.module.css'
import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';

const AddUser = (props) => {
  const [username, setUsername] = useState('') ;
  const [age, setAge] = useState('') ;
  const [error, setError] = useState();

  const updateUsernameHandler = (event) => {
    // get value of username input
    setUsername(event.target.value)
  }

  const updateAgeHandler = (event) => {
    // get value of age input
    setAge(event.target.value)
  }
 
  // change error state to dismisss modal
  const errorHandler = () => {
    setError(null)
  }

  const submitHandler = (e) => {
    e.preventDefault() ;
    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title: "Invalid input",
        message: "Values must be non-empty"
      })
      return
    }
    if(+age < 1){
      setError({
        title: "Invalid Age",
        message: "Age must be greater than 0",
      });
      return
    }
    // create new user
    const newUser = {
      username: username,
      age: age,
      id: Math.random()
    }
    // add new user to users array
    props.createUser(newUser)
    // reset
    setUsername('')
    setAge('')
  }


  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} handleError={errorHandler} />}

      <Card className={styles.input}>
        <form id="addUser" onSubmit={submitHandler}>
          <label htmlFor="name">Username</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={updateUsernameHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            className={styles.input}
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={updateAgeHandler}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser