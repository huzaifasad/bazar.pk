import React,{createContext, useContext, useState} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Mobile from './Components/Product/Category/Mobile';
import { Header } from './Components/Product/Header';
import Laptop from './Components/Product/Category/Laptop';
import Toys from './Components/Product/Category/Toys';
import Jewellary from './Components/Product/Category/Jewellary';
import Fashion from './Components/Product/Category/Fashion';
import Homegarden from './Components/Product/Category/Homegarden';
import Book from './Components/Product/Category/Book';
import Health from './Components/Product/Category/Health';
import HomeDash from './Components/Dashboard/Navs/HomeDash';
import Footer from './Components/Product/Footer';
import Productdetails from './Components/Check/Productdetails';
import Cart from './Components/Check/Cart';
import { useEffect } from 'react';
import Register from './Components/Check/Register';
import Home from './Components/Product/Home';
import CheckoutForm from './Components/Check/CheckoutForm';
import Brand from './Components/Product/Brand';
import Blogs from './Components/Product/Blogs';
import ProductDetail from './Components/Product/ProductDetail';
import About from './Components/Product/About';
import AllDeals from './Components/Product/AllDeals';
import Signup from './Components/Check/Signup';
import UpdateAccount from './Components/Check/UpdateAccount';
export  const GloabalInfo=createContext();
export default function App() {
  const[cart,setcart]=useState(0)
  const [cartdata, setCartData] = useState([]);
  const[totall,settotall]=useState(0)
  const [un,setun]=useState('')
  useEffect(() => {
    try {
      const auth = JSON.parse(localStorage.getItem('user'));
  
      if (auth && auth.name) {
        const username = auth.name;
        console.log('Username:', username);
        setun(username);
      } else {
        console.error('User information not found or not in the expected format.');
      }
    } catch (error) {
      console.error('Error parsing user information from localStorage:', error);
    }
  }, []);
  
  return (

    <BrowserRouter>
           <GloabalInfo.Provider  value={{ cart, setcart ,cartdata,setCartData ,totall,settotall,un,setun}}>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Default header */}
              <Header />
              <Outlet />
              <Footer/>
            </>
          }
        >
          {/* <Route index element={<Hometest />} /> */}
          <Route index element={<Home/>}/>
          <Route exact path="/Mobile" element={<Mobile />} />
          <Route exact path="/Laptop" element={<Laptop />} />
          <Route exact path="/Toys" element={<Toys />} />
          <Route exact path="/Jewellary" element={<Jewellary />} />
          <Route exact path="/Homegarden" element={<Homegarden />} />
          <Route exact path="/Fashion" element={<Fashion />} />
          <Route exact path="/Books" element={<Book />} />
          <Route exact path="/Health" element={<Health />} />
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path="/dailydeals" element={<About />} />
          <Route path='/productdetail/:id' element={<Productdetails/>}/>
          <Route exact path='regester' element={<Register/>}/>
          <Route exact path='/cart/checkout' element={<CheckoutForm/>}/>
          <Route exact path='/brand' element={<Brand/>}/>
          <Route exact path='/blogs' element={<Blogs/>}/>
          <Route exact path='/sign' element={<Signup/>}/>
          <Route exact path='/updateacount' element={<UpdateAccount/>}/>

          {/* <Route exact path ='/Alldeals' element={<AllDeals/>}/> */}
          <Route exact path='/Alldeals' element={<AllDeals/>} />
          <Route exact path='view/:title/:price' element={<ProductDetail/>}/>

        </Route>
        <Route
          path="/productdash"
          element={
            <>
              <HomeDash/>
              <Outlet />
           
            </>
          }
        >
       

          <Route path="additem"  />
          <Route path="removeitem/:id"  />
        </Route>
      </Routes>
      </GloabalInfo.Provider>

    </BrowserRouter>

  );
}
