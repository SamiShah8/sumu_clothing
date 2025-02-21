import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

import Logo from "../assets/logo.png";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function showMenu() {
    setShowMobileNav(true);
  }

  function hideMenu() {
    setShowMobileNav(false);
  }
  return (
    <>
      <header>
        <div className="container--fluid">
          {/* <for small screen size */}
          <div className="flex justify-between  items-center py-4 md:hidden">
            <div className="border border-[var(--btn-color)] rounded-lg  hover:border-[var(--secondary-color)] md:hidden">
              <GiHamburgerMenu
                onClick={showMenu}
                className={`h-[2rem] w-[2rem] p-2 cursor-pointer ${
                  showMobileNav ? "hidden" : "block"
                }`}
              />
            </div>

            <Link className="flex gap-2 items-center" to={"/"}>
              <div className="h-[2.5rem] w-[2.5rem] flex items-center">
                <img src={Logo} alt="logo" />
              </div>
              <h1 className="text[0.5rem]">Sumu Clothing</h1>
            </Link>

            <div className="border border-[var(--btn-color)] rounded-lg hover:border-[var(--secondary-color)]">
              <FaCartArrowDown className="h-[2rem] w-[2rem] p-2 cursor-pointer z-50" />
            </div>
          </div>

          {/* for tablates */}

          <div className="md:flex justify-between  items-center hidden  py-6">
            <nav className="flex gap-2 items-center lg:w-[40%] xl:w-[33.33%]  ">
              <Link to={"/"}>
                <div className="flex gap-2 items-center">
                  <div className="h-[2.5rem] w-[2.5rem] flex lg:w[3rem] lg:w-[3rem] items-center">
                    <img src={Logo} alt="logo" />
                  </div>
                  <h1 className="hidden lg:block font-bold">Sumu Clothing</h1>
                </div>
              </Link>
              <ul className="flex pt-[0.25rem] gap-4 cursor-pointer text-[0.875rem] pl-[0.4rem]   ">
                <li>
                  <Link to="/products" className="[&.active]:font-bold">
                    All
                  </Link>
                </li>
                <li>
                  <a>Shirt</a>
                </li>
                <li>
                  <a>Stikers</a>
                </li>
              </ul>
            </nav>
            <div className="relative flex lg:w-[30%]  xl:w-[33.33%]">
              <input
                type="text"
                className="p-1 border border-[var(--btn-color)] rounded-lg w-full placeholder:text-[0.875rem] "
                placeholder="Search for products"
              />
              <span className="absolute right-2 top-[50%] flex items-center translate-y-[-50%] ]">
                <button>
                  <FaSearch />
                </button>
              </span>
            </div>
            <div className=" xl:w-[33.33%] flex justify-end gap-4 lg:w-[30%]">
              <FaCartArrowDown className="h-[2rem] w-[2rem] p-2 cursor-pointer border border-[var(--btn-color)]  rounded-lg hover:border-[var(--secondary-color)]" />
              <button
                onClick={() => {
                  setCrossBtn(true);
                }}
                className="border border-[var(--btn-color)] rounded-lg hidden md:block px-2.5 py-1 py text-[0.6rem] font-extrabold"
              >
                Hello, Signin
              </button>
            </div>
          </div>
        </div>
        {/* navlinks */}
        <nav
          className={` ${
            showMobileNav ? "translate-x-0" : "-translate-x-full "
          }   md:hidden   bg-white h-screen fixed top-0  w-full  transition-transform duration-300 ease-in-out `}
        >
          <div className="text-[0.8rem] w-[95%] m-auto">
            <ImCross
              onClick={hideMenu}
              className={`h-[2rem] w-[2rem] p-2 my-4 cursor-pointer border border-[var(--btn-color)] rounded-lg md:hidden hover:border-[var(--secondary-color)] 
                
              }   `}
            />
            <div className="relative flex items-center ">
              <input
                type="text"
                className="p-1 border rounded-lg w-full "
                placeholder="search for products"
              />
              <span className="absolute right-2 text-[var(--btn-color)]">
                <button>
                  <FaSearch />
                </button>
              </span>
            </div>

            <ul className="flex flex-col pt-[0.25rem] gap-2 cursor-pointer pl-[0.4rem] ">
              <li>
                <Link to="/products" className="[&.active]:font-bold">
                  All
                </Link>
              </li>
              <li>Shirt</li>
              <li>Stikers</li>
              <li>
                <button className="border border-[var(--btn-color)] rounded-lg  p-1 text-[0.6rem] font-extrabold">
                  Hello, Signin
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
