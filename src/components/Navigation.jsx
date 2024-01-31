import React from "react";
import { useState } from "react";
import '../App.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";


const Navigation = () => {

const [activeNav, setActiveNav] = useState('#')



  return (
    <nav className="bg-slate-800 bg-opacity-60 w-max flex py-3 px-5 z-10 fixed bottom-8 gap-4 -translate-x-2/4 left-2/4 rounded-2xl">
      <a className={`bg-transparent p-2 text-base hover:scale-105 duration-500 rounded-full text-white hover:bg-slate-700 hover:text-slate-300 ${activeNav ==='#' ? 'active' : ''} `} href="#"
      onClick={() => setActiveNav('#')}>
        <AiOutlineHome />
      </a>
      <a
        className={`bg-transparent p-2 text-base hover:scale-105 duration-500 rounded-full text-white hover:bg-slate-700 hover:text-slate-300 ${activeNav ==='#Portfolio' ? 'active' : ''} `}
        href="#Portfolio"
        onClick={() => setActiveNav('#Portfolio')}
      >
        <AiOutlineUser />
      </a>
      <a
        className={`bg-transparent p-2 text-base hover:scale-105 duration-500 rounded-full text-white hover:bg-slate-700 hover:text-slate-300 ${activeNav ==='#Experience' ? 'active' : ''} `}
        href="#Experience"
        onClick={() => setActiveNav('#Experience')}
      >
        <BiBook />
      </a>
      <a className={`bg-transparent p-2 text-base hover:scale-105 duration-500 rounded-full text-white hover:bg-slate-700 hover:text-slate-300 ${activeNav ==='#Contact' ? 'active' : ''} `} href="#Contact"
      onClick={() => setActiveNav('#Contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
