import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

// won't reinitalize on component rerender
let isInitialRun = true;

function App() {
  const cartVisibility = useSelector(state => state.ui.cartIsVisible)
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items)
  const notificationStatus = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data to server'
      }))

      const response = await fetch("https://react-hhtp-32085-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cartItems),
      });

      if(!response.ok){
        throw new Error("An error occured")
      }
     
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Data transfer complete",
          message: "Data was sent to server",
        })
      );
    }

    if(isInitialRun){
      isInitialRun = false
      return
    }

    sendCartData().catch(error => {
       dispatch(
         uiActions.showNotification({
           status: "error",
           title: "An error occurred",
           message: "Failed to sent data to server",
         })
       );
    })
  },[cartItems, dispatch])

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
