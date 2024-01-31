import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLink = () => {

  const links =[ {
    id:1,
    child: (<>GitHub <FaGithub size={30} /></>),
    href: 'https://github.com/Alone107',
    style: 'rounded-tr-md'
  },
  {
    id:2,
    child: (<>Mail <HiOutlineMail size={30} /></>),
    href: 'https://github.com/Alone107',
  },
  {
    id:3,
    child: (<>Resume <BsFillPersonLinesFill size={30} /></>),
    href: 'https://github.com/Alone107',
    style: 'rounded-br-md'
  },
]


  return (
    <div className="lg:flex lg:visible hidden flex-col top-[35%] left-0 fixed">
      <ul>

        {links.map(({id, child, href, style}) => (
        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 ${style} hover:ml-[-10px]`}>
        <a href={href} className="flex justify-between items-center w-full text-white">
         {child}
        </a>
      </li>
        ))}




      </ul>
    </div>
  );
};

export default SocialLink;
