import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete} from 'react-icons/md';
import { GloabalInfo } from "../../App";
export default function Cart() {
  const { cart, setcart, cartdata, setCartData ,totall,settotall} = useContext(GloabalInfo);
  const [shipcost,setshiping]=useState(0)
  const handlequantityplus = (id) => {

    const itemIndex = cartdata.findIndex((item) => item.id === id);
    const pri=cartdata[itemIndex].price;
    const quan=cartdata[itemIndex].quantity;
    if (itemIndex !== -1) {
      cartdata[itemIndex].quantity++;
    const updatedPrice = pri / quan;
    cartdata[itemIndex].price = cartdata[itemIndex].price+updatedPrice;
      setCartData([...cartdata]);
      totallprice();
    } else {
      alert("Item not found in the cart.");
    }
  };
  const handlequantitysub = (id) => {

    const itemIndex = cartdata.findIndex((item) => item.id === id);
    if(cartdata[itemIndex].quantity>1){
      const pri=cartdata[itemIndex].price;
      const quan=cartdata[itemIndex].quantity;
      if (itemIndex !== -1) {
        cartdata[itemIndex].quantity--;
      const updatedPrice = pri / quan;
      cartdata[itemIndex].price = cartdata[itemIndex].price-updatedPrice;
        setCartData([...cartdata]);
        totallprice();

      } else {
        alert("Item not found in the cart.");
      }
    }
    else{
      handleremoveitem(id)
      totallprice();

    }
    
  };
  const handleremoveitem = (id) => {
    const updatedCartData = cartdata.filter((item) => item.id !== id);
    setcart(cart - 1);
    setCartData(updatedCartData);
    totallprice();

  };
  const totallprice=()=>{
    let totalPrice = 0;

    for (const item of cartdata) {
      totalPrice += item.price;
    }
    settotall(totalPrice)
  }
  useEffect(()=>{
    totallprice();
  },[cartdata])

  return (
    <div>
      <>
     
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n',
          }}
        />
        <div className="h-screen bg-gray-100 pt-20 overflow-auto">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartdata.map((item) => (
                <div
                  key={item.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item.imag}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:text-white hover:bg-dark-blue"
                        onClick={()=>handlequantitysub(item.id)}
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={item.quantity}
                          min={1}

                        />
                        <span
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3.5 duration-100 hover:text-white hover:bg-dark-blue"
                          onClick={() => handlequantityplus(item.id)}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div
                        className="flex items-center space-x-4"
                        
                      >
                        <p className="text-sm">{item.price} Rs</p>
                              <MdDelete className="cursor-pointer text-3xl text-dark-blue hover:text-red" onClick={() => handleremoveitem(item.id)}/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sub total */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">Rs {totall}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">Rs {shipcost}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">Rs {totall+shipcost} Rupees</p>
                  {/* <p className="text-sm text-gray-700">including VAT</p> */}
                </div>
              </div>
              {totall ? (<div>
                <Link to='checkout'>
              <button className="mt-6 w-full rounded-none hover:shadow-lg bg-dark-blue py-1.5 font-medium text-white hover:bg-dark-blue">
                Check out
              </button>
              </Link>


              </div>) : (<div>
                <button className="mt-6 w-full rounded-none hover:shadow-lg bg-dark-blue py-1.5 font-medium text-white hover:bg-dark-blue">
                First Add Some Item in Cart
              </button>

              </div>)}
            
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
