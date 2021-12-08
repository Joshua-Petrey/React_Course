import { Fragment, useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  // consumne our context
  const authContextData = useContext(AuthContext)
  return (
    
      <Fragment>
        <MainHeader />
        <main>
          {!authContextData.isLoggedIn && <Login />}
          {authContextData.isLoggedIn && <Home />}
        </main>
      </Fragment>

    
  );
}

export default App;
