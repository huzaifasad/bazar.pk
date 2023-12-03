import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";

export default function Sidebar() {
    const [open, setOpen] = useState(true)
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const Menus = [
        {
             title: 'dashboard',
             move:'/dashboard',
             icon:<HiMenuAlt1/>
    
    },
        { title: 'pages' },
        {
          title: 'properties',
          submenu: true,
          submenuItem: [
            { title: 'menu1' },
            { title: 'menu2' },
            { title: 'menu3' }
          ]
        }
      ];
      const handleMenuClick = (index) => {
        if (openSubmenu === index) {
          // If the same submenu is clicked again, close it
          setOpenSubmenu(null);
        } else {
          // Otherwise, open the clicked submenu
          setOpenSubmenu(index);
        }
      };
    return (
        <>

            <div className='flex h-screen '>

                <div className={`bg-navy-blue text-white h-screen p-6 pt-9  ${open ? 'w-80' : 'w-20'}  transition-all duration-500 relative `}>
                  
                    
                    
                    < HiMenuAlt1 className={`bg-white text-5xl shadow-md ring-blue-500 cursor-pointer rounded text-black absolute transition-all duration-500 right-[-3rem] top-0 p-2 ${!open && 'rotate-180 transition-all duration-500'}`} onClick={() => setOpen(!open)} />
                    <Link to={`/productdash`}>
                    <div className='inline-flex mt-10'>

                        <BiSolidDashboard className='text-4xl cursor-pointer float-left block hover:bg-white hover:text-black  transition-all duration-500 hover:rounded-l hover:text-6xl' />

                        <h1 className={`origin-left text-2xl ml-2 ${!open && 'hidden'}`}>Dashboard</h1>
                    </div>
                    </Link>
                 
                  <Link to={`additem`}>
                    <div className='inline-flex'>

                        <BiSolidDashboard className='text-4xl cursor-pointer float-left block hover:bg-white hover:text-black  transition-all duration-500 hover:rounded-l hover:text-6xl' />

                        <h1 className={`origin-left text-2xl ml-2 ${!open && 'hidden'}`}>ADD PRODUCT</h1>
                    </div>
                    </Link>
                    <Link to={`removeitem`}>
                    {/* <div className='inline-flex'>

                        <BiSolidDashboard className='text-4xl cursor-pointer float-left block hover:bg-white hover:text-black  transition-all duration-500 hover:rounded-l hover:text-6xl' />

                        <h1 className={`origin-left text-2xl ml-2 ${!open && 'hidden'}`}>Orders details</h1>
                    </div> */}
                    </Link>
                    
      
    </div>
                
              


                </div>
           

        </>


    )
}
