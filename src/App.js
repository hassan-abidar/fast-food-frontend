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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
