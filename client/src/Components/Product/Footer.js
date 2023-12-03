import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div class="bg-dark-blue p-4 items-center">
        <div class="flex justify-center pt-10 pb-14 md:pb-9">
          {" "}
          <img
            class="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]"
            src="images/cucet-footer-logo.png"
            alt=""
            srcset=""
          />{" "}
        </div>
        <div class="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
          <div class="text-[#6d6d6d] font-[650] text-[16px] leading-7">
            <div class="flex justify-start md:mt-10">
              <h1 class="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                About{" "}
              </h1>{" "}
              <span class="text-white font-sans uppercase font-normal tracking-wider">
                us
              </span>
            </div>
            <p class="">
              {" "}
              <Link class="hover:text-[#cacaca]" to={`/Laptop`}>
                About Company
              </Link>{" "}
            </p>
            <p class="">
              {" "}
              <Link class="hover:text-[#cacaca]" to={`/Laptop`}>
                Contact us
              </Link>{" "}
            </p>
            <p class="">
              {" "}
              <Link class="hover:text-[#cacaca]" to={`/productdash`}>
                Sell On Kharedo.com
              </Link>{" "}
            </p>
          </div>
          <div class="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
            <div>
              <pre class="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                {" "}
                deals &nbsp;
              </pre>
            </div>
            <p class="">
              {" "}
              <Link class="hover:text-[#cacaca]" to={`/Laptop`}>
                Today's Deals
              </Link>{" "}
            </p>
            <p class="">
              {" "}
              <Link class="hover:text-[#cacaca]" to={`/Laptop`}>
                Top's Deals
              </Link>{" "}
            </p>
            <p class="">
              {" "}
              <Link class="hover:text-[#cacaca]" to={`/Laptop`}>
                Mysterioue Box
              </Link>{" "}
            </p>
          </div>
          <div class="md:flex flex-col justify-between">
            <div class="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
              <div class="flex justify-start">
                <h1 class="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  CATEGORIES{" "}
                </h1>{" "}
                <span class="text-white font-sans uppercase font-normal tracking-wider">
                  {" "}
                  list
                </span>
              </div>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Laptop`}>
                  Laptop
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Mobile`}>
                  Mobile
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Toys`}>
                  Toys
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Jewellary`}>
                  Jewellary
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Homegarden`}>
                  Homegarden
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Fashion`}>
                  Fashion
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Books`}>
                  Books
                </Link>{" "}
              </p>
              <p class="">
                {" "}
                <Link class="hover:text-[#cacaca]" to={`/Health`}>
                  Health
                </Link>{" "}
              </p>
            </div>
            <div class="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
              <div class="flex justify-start md:-mt-32">
                <h1 class="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  suppor{" "}
                </h1>{" "}
                <span class="text-white font-sans uppercase font-normal tracking-wider">
                  t
                </span>
              </div>
              <p class="">
                {" "}
                <a href="#" class="hover:text-[#cacaca]">
                  FAQ's
                </a>{" "}
              </p>
            </div>
          </div>
          <div class="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
            <div class="flex justify-start">
              <h1 class="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                get in t{" "}
              </h1>{" "}
              <span class="text-white font-sans uppercase font-normal tracking-wider">
                ouch
              </span>
            </div>
            <p class="space-x-3">
              {" "}
              <i class="fa fa-home text-[17px]"></i>
              <strong class="text-[#8b8b8b] text-[15px] tracking-wide">
                Our Company
              </strong>{" "}
            </p>
            <div class="leading-7">
              <p class="">
                Paksitan, <br /> KPK ,Peshawar <br /> General Helpline No:+92
                310 9602985{" "}
              </p>
            </div>
            <div class="leading-7 mt-4 text-[15px] font-[500]">
              <p class="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i class="fa fa-phone text-[17px]"></i>{" "}
                <a href="#">
                  92 310 9602985 ({" "}
                  <span class="text-[13px] font-[500]">General Enquiry</span> )
                </a>{" "}
              </p>

              <p class="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i class="fa fa-envelope text-[16px]"></i>{" "}
                <a href="#">huzaifa084567@gmail.com</a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div class="flex justify-center  md:mb-1 text-[#afafaf] text-center text-2xl cursor-pointer space-x-3">
          <BiLogoFacebookSquare className="" />
          <BsInstagram />
          <AiFillYoutube />
          <AiFillTwitterSquare />
        </div>
      </div>
    </>
  );
}
