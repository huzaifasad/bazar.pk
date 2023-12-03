/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React ,{ Fragment, useEffect, useState,useContext } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import CardC from "../../Check/CardC";
import { GloabalInfo } from "../../../App";
import { Link } from "react-router-dom";
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Dell", href: "#" },
  { name: "Microsoft Surface", href: "#" },
  { name: "Apple (MacBooks)", href: "#" },
  { name: "HP", href: "#" },
  { name: "Lenovo", href: "#" },
  { name: "ASUS", href: "#" },
  { name: "Acer", href: "#" },
];
const filters = [
  {
    id: "Type",
    name: "TYPE",
    options: [
      { value: "ultrabooks", label: "Ultrabooks", checked: false },
      { value: "GamingLaptops", label: "Gaming Laptops", checked: false },
      { value: "BusinessLaptops", label: "Business Laptops", checked: true },
      { value: "Workstations", label: "Workstations", checked: false },
      { value: "Chromebooks", label: "Chromebooks", checked: false },
    ],
  },
  {
    id: "RAMSize",
    name: "RAM SIZE",
    options: [
      { value: "4GB", label: "4GB", checked: false },
      { value: "8GB", label: "8GB", checked: false },
      { value: "16GB", label: "16GB", checked: true },
      { value: "32GB", label: "32GB", checked: false },
      { value: "64GB+", label: "64GB+", checked: false },
    ],
  },
  {
    id: "Features",
    name: "Features",
    options: [
      { value: "Touchscreen", label: "Touchscreen", checked: false },
      { value: "BacklitKeyboard", label: "Backlit Keyboard", checked: false },
      {
        value: "FingerprintReader",
        label: "Fingerprint Reader",
        checked: false,
      },
      { value: "DVDDrive", label: "DVD Drive", checked: false },
      {
        value: "Thunderbolt 4/USB-C",
        label: "Thunderbolt 4/USB-C",
        checked: false,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Laptop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [data, setData] = useState([]);
  const { cart, setcart ,cartdata,setCartData,settotall} = useContext(GloabalInfo);
  const totallprice=()=>{
    let totalPrice = 0;

    for (const item of cartdata) {
      totalPrice += item.price;
    }
    settotall(totalPrice)
  }
  const handleAddToCart = (id, title,price) => {
    const itemIndex = cartdata.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      cartdata[itemIndex].quantity++;
      cartdata[itemIndex].price += price;
      totallprice();
      setCartData([...cartdata]); 
         } else {
      const newItem = {
        id: id,
        title: title,
        price: price,
        quantity: 1, 
      };
      setcart(cart + 1);

      setCartData([...cartdata, newItem]);
    }

  };
  
 
  
 const fetchprod = async () => {
    try {
      const result = await fetch('http://localhost:1000/laptop/get');
      const products = await result.json();
      console.log(products)
      setData(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

useEffect(()=>{
  fetchprod()
  console.log(data.title)
},[]) ;
useEffect(() => {
  totallprice();
}, [cartdata]); // Use cartdata as a dependency here

 
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900 "
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3 ">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Laptop & Accessories
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="md:col-span-3">
  {/* {data.map((product, index) => (
    <div key={product.id}>
      <CardC image={product.images[0]} name={product.title} price={product.price} />
    </div>
  ))} */}



<div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products List</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
        {data.map((product, index) => (
       
<div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-none border border-3  bg-white hover:shadow-xl shadow-md">
<a
  className="relative mx-3 w-full flex h-60 overflow-hidden rounded-none"
  href="#"
>
  <img
    className="peer absolute top-0 right-0 h-full w-full object-cover p-0"
    src={``}
    alt="product image"
  />
  <img
    className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
    src={``}
    alt="product image"
  />
  {/* <div class="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
<div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
<div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
<div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
  </div> */}
  <svg
    className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
    />
  </svg>
  {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
</a>
<div className="mt-4 px-5 pb-5">
  <a href="#">
    <h5 className="text-xl tracking-tight text-slate-900">
      {product.name}
    </h5>
  </a>
  <div className="mt-2 mb-5 flex items-center justify-between">
    <p>
      <span className="text-3xl font-bold text-slate-900">{product.price}</span>
      <span className="text-sm text-slate-900 line-through">{product.price}</span>
    </p>
  </div>
  <button 
        onClick={() => handleAddToCart(product._id,product.name,product.price)}

    className="flex items-center justify-center rounded-none bg-dark-blue px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 text-white w-full focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    Add to cart
  </button>
  <Link to={`/view/${product.name}/${product.price}`}>
    <button >Quick View</button>
  </Link>
</div>
</div>

))}


</div>
      </div>
    </div>

</div>



            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
