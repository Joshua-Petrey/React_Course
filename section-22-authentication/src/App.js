import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';

function App() {
  const authContext = useContext(AuthContext)

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {/* Only acccess login page if not logged in */}
        {!authContext.isLoggedIn && (<Route path='/auth'>
          <AuthPage />
        </Route>)}
        {/* Only access user profile if logged in */}
        {authContext.isLoggedIn && <Route path='/profile'>
          <UserProfile />
        {!authContext.isLoggedIn && <Redirect to='/auth'/>}
        </Route>}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
