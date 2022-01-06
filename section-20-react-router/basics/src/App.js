import { Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* parameter ProductId is passed to Route's child component */}
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
