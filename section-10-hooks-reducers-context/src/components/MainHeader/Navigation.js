import React, {useContext} from 'react';
import AuthContext from '../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const authContextData = useContext(AuthContext)
  return (
          <nav className={classes.nav}>
            <ul>
              {authContextData.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {authContextData.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {authContextData.isLoggedIn && (
                <li>
                  <button onClick={authContextData.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      
};

export default Navigation;
