import React, {useState, useEffect, useCallback} from "react"

let logoutTimer;

// define context shape
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
})

// return token's remaing time til expiry
const calculateTokenExpiryTime = (expirationTime) => {
  const currentTime = new Date().getTime()
  const convertedExpirationTime = new Date(expirationTime).getTime()
  const remainingTime = convertedExpirationTime - currentTime
  return remainingTime
}

const retreiveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storeExpirationTime = localStorage.getItem("tokenExpirationTime");
  const remainingtime = calculateTokenExpiryTime(storeExpirationTime)
  // if stored token is expired or expires in less than a minute
  if(remainingtime <= 60000){
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpirationTime");
    return null
  }
  // stored token data
  return {
      token: storedToken,
      remainingtime: remainingtime
  }
}

export const AuthContextProvider = (props) => {
  const tokenData = retreiveStoredToken();
  let initialToken;
  // look for existing auth token
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  // can infer isLoggedIn with token state. !! converts truthy/falsey to real boolean
  const userIsLoggenIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpirationTime");

    // clear timer if it was set
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    // store token for persistent auth
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpirationTime", expirationTime);
    // get token's time til expiry
    const remainingTokenTimeTilExpired =
      calculateTokenExpiryTime(expirationTime);
    // setTimer to autoLogout user
    logoutTimer = setTimeout(logoutHandler, remainingTokenTimeTilExpired);
  };

  // set timer if autologinned the user
  useEffect(() => {
       if (tokenData) {
         // remaining duration from stored token
         logoutTimer = setTimeout(logoutHandler, tokenData.remainingtime);
       }
  }, [tokenData, logoutHandler])

  // set context values
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggenIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext