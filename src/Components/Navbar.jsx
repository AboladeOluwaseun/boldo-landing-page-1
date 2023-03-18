import { navLinks } from "../constants/index"
import boldo01 from "../../public/assets/boldo01.png";
import close from "../../public/assets/close.svg";
import menu from "../../public/assets/menu.svg";
import { useState } from "react";
import Image from "next/image";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(3);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <Image className="w-[10rem] h-[2.6rem]" src={boldo01} alt="logo" />
      <ul className="ist-none  justify-end items-center flex-1 list-none hidden text-white sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-manrope text-[16px] font-[700]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              index === active &&
              "px-8 py-2 bg-white text-darkBlue rounded-full"
            }`}
            onClick={() => setActive((prev) => index)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 justify-end items-center sm:hidden">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[1.8rem] h-[1.8rem] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "block" : "hidden"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className=" list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-manrope font-normal text-[16px] text-darkBlue  ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
