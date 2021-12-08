import React, {useState, useEffect} from "react"

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
  // removed from app.js
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // store related author functions
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
     setIsLoggedIn(false);
   };

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggenIn', '1')
       setIsLoggedIn(true);
     };

   useEffect(() => {
        const storedLoginInformation = localStorage.getItem("isLoggedIn");
        if (storedLoginInformation === "1") {
          setIsLoggedIn(true);
        }
      }, []);

  return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
      {props.children}
        </AuthContext.Provider>
}

export default AuthContext;