import React,{useContext,useRef} from "react";
import { useState, useEffect } from "react";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { Tooltip } from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { GloabalInfo } from "../../App";

//Drawer imports
import "../../App.css";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "Cell Phone & Accecrories",
    description: "Learn about our story and our mission statement.",
    move: "/Mobile",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Laptop & Accecories",
    description: "News and writings, press releases, and resources",
    move: "/Laptop",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Jewellary{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="New added!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
    move: "/Jewellary",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Toys",
    description: "All the stuff that we dan from legal made us add.",
    move: "/Toys",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Home & Garden",
    description: "Checkout our products that helps a startup running.",
    move: "/Homegarden",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Fashion",
    description: "Set of beautiful icons that you can use in your project.",
    move: "/Fashion",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "Books",
    description: "High quality UI Kits helps you to 2x faster.",
    move: "/Books",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Health",
    description: "List of all our open-source projects, it's all free.",
    move: "/Health",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, move }, key) => (
      <Link to={`${move}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Shop by Category
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 rounded-none">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        {/* <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Blocks
        </ListItem> */}
      </Typography>
      <NavListMenu />
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Home
        </ListItem>
      </Typography> */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to={`brand`}>
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Brands
        </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to={`Alldeals`}>
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Offers
        </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function Header() {
  const navigate=useNavigate()
  const [openNav, setOpenNav] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const {cart,totall,un,setun}=useContext(GloabalInfo)
  const inputRef = useRef(null);
  const handleremovuser=()=>{
    localStorage.removeItem('user');
    navigate('/')
    window.location.reload();
  }
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [isFixed, setIsFixed] = useState(false);
  console.log(isFixed);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={``}
      >
        {/* <header className={`bg-grey shadow-md ${isFixed ? 'fixed top-0 left-0 w-full z-10' : ''}`}> */}
        <div className=" h-8 pl-3  bg-dark-blue text-white ">
          <Link to={`productdash`}>Sell on Kharedo</Link>
        </div>
        <div className={`h-16 bg-white p-3 transition-all	 duration-500 pt-5 flex justify-between w-full  bg-grey  ${isFixed ? 'fixed top-0 shadow-lg left-0 w-full z-40 transition-all	 duration-500' : ''}`}>
          <div>
            <h1 className="tracking-widest cursor-pointer">kharedo.pk</h1>
          </div>
          <div className="flex justify-center items-center  relative">
            <input
              type="search"
              className="border border-2 w-[35rem] p-2 mb-3 rounded-xl hover:shadow-md"
              placeholder="Search Product"
            />
            <TfiSearch className="cursor-pointer mb-4 mr-[-2rem]  absolute right-[2.5rem] hover:shadow-md mt-1 hover:rounded-md text-2xl transition-all duration-500 hover:text-4xl" onClick={focusInput}/>
          </div>
          {/* also show navbar not fixed */}
          <div className="flex mr-5  font-thin	text-text-ligh cursor-pointer ">
            

            <div className="mr-3 text-1xl text-text-ligh">
  {un ? (
   <div className="flex items-center">
   <p className="mr-2">{un}</p>
   <Tooltip content="Log Out" placement="left-end">

   <BiLogOut className="mr-3 text-3xl text-text-ligh " onClick={handleremovuser}/>
   </Tooltip>
 </div>
    
  ) : (
    <Link to='/regester'>
      < CgProfile className="mr-3 text-3xl text-text-ligh"/>
    </Link>
    
  )}
</div>

            
           
            <div className="mr-3 text-3xl text-text-ligh">
              {/* Cart Drawer */}
              <Link to={`cart`}>
              <Badge className="bg-dark-blue text-white pl-2 pr-2" content={cart}>
  <AiOutlineShoppingCart />
</Badge>
</Link>

            </div>
            <button class="text-sm	 border border-2 pl-5 pr-5 w-17  rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-customRed hover:text-white hover:transition-all duration-700">
              <p>{totall}</p>
            </button>
          </div>
        </div>

        <Navbar className="mx-auto bg-white shadow-none max-w-screen-xl  px-4 py-2 rounded-none">
          {/* text-blue-gray-900 */}
          <div className="flex items-center  justify-between text-black rounded-none">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
              {/* <Link to='/'>Nexa Bazar</Link> */}
              <Link to="/">Home</Link>
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex rounded-none">
              <Link to={`dailydeals`}>
                <Button variant="text" size="sm" color="blue-gray">
                  About Us
                </Button>
              </Link>
              <Link to={`blogs`}>
              <Button variant="text" size="sm" color="blue-gray">
                Blogs
              </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                Sign In
              </Button>
              <Button variant="gradient" size="sm" fullWidth>
                Sign Up
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </header>
    </div>
  );
}
