import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import { RestaurantDetails } from './component/Restaurant/RestaurantDetails';
import {Cart} from './component/Cart/Cart.jsx'
import { Profile } from './component/Profile/Profile.jsx';
import { CustomerRouter } from './Routers/CustomerRouter.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './state/Authentification/Action.js';

import { findCart } from './state/Cart/Action.js';
import { Routers } from './Routers/Routers.jsx';
import { getRestaurantByUserId } from './state/Restaurant/Actions.js';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser( auth.jwt ||jwt ));
    dispatch(findCart(jwt))
  },[auth.jwt]);

  useEffect(()=>{
    dispatch(getRestaurantByUserId(auth.jwt || jwt))
    
  },[auth.user]);

 

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      <Routers/>
      </ThemeProvider>
    </div>
  );
}

export default App;
