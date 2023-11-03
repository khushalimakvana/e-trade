import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Signin from './page/Signin'
import Signup from './page/Signup'
import Forgetpass from './page/forgetpass'
import Reset from './page/reset'
import Policy from './page/Policy'
import Coming from './page/comingsoon'
import Error from './page/error'
import Account from './page/account'
import Typography from './page/Typography'
import Header from './component/header'
import { Footer } from './component/Footer'
import { Wishlist } from './page/wishlist'
import { Checkout } from './page/checkout'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Signin/> */}
  {/* <Signup/> */}
  {/* <Forgetpass/> */}
   {/* <Reset/> */}
  {/* <Policy/> */}
  {/* <Coming/> */}
  <Error/>
  {/* <Account/> */}
    {/* <Typography/> */}
    {/* <Header/>  */}
    {/* <Footer/> */}
    {/* <Wishlist/> */}
    {/* <Checkout/> */}


  </React.StrictMode>,
)
