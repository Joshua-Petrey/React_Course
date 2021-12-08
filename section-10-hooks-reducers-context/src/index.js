import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './components/store/auth-context';

ReactDOM.render(
  // Provide App with our AuthContext 
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);

