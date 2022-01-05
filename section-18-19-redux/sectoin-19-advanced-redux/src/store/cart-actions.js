import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// thunk
export const sendCartData = (cartData) => {
  // can run code here

  // receives the disptach function from react-redux's dispatch function automatically
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data to server",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-hhtp-32085-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw new Error("An error occured");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Data transfer complete",
          message: "Data was sent to server",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An error occurred",
          message: "Failed to sent data to server",
        })
      );
    }
  };
};

// thunk
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async() => {
      const response = await fetch(
        "https://react-hhtp-32085-default-rtdb.firebaseio.com/cart.json"
      );
       if (!response.ok) {
         throw new Error("An error occured");
       }
      const cartData = response.json()
      return cartData
    }

    try {
      // get cart from server
      const cartData = await fetchData()
      // replace cart with cart from server
      dispatch(cartActions.replaceCart(cartData))
    } catch(err){
       dispatch(
         uiActions.showNotification({
           status: "error",
           title: "An error occurred",
           message: "Fetching cart failed",
         })
       );
    }
  };
};
