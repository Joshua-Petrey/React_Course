import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import {fetchCartData, sendCartData} from './store/cart-actions'

// won't reinitalize on component rerender
let isInitialRun = true;

function App() {
  const cartVisibility = useSelector(state => state.ui.cartIsVisible)
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart)
  const notificationStatus = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
   if(isInitialRun){
     isInitialRun = false;
     return
   }
   // only send cart data to server if items change
   if(cart.changed){
    dispatch(sendCartData(cart.items));
   }

  },[cart, dispatch])

  return (
    <Fragment>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          title={notificationStatus.title}
          message={notificationStatus.message}
        ></Notification>
      )}
      <Layout>
        {cartVisibility && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
