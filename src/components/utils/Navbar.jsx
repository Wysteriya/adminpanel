import React, { useState } from 'react'
import {motion} from 'framer-motion';
import axios from 'axios'
export const Navbar = () => {
 
  return (
    <nav className="flex justify-between py-3 px-8 items-center font-poppins sticky top-0 z-10 bg-white shadow-sm">
        <div className="text-[1.5rem] font-semibold cursor-pointer tracking-wide">
          <a href='/'>INSUREGO</a>
          <div className="text-gray-500 text-sm font-thin">Team wysteria</div>
        </div>
        <ul className="text-sm flex gap-4 cursor-pointer">
          <motion.li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-bg ease-in-out"
          whileHover={{y:-5,rotate:2}} >
            <a href="/login">Admin login</a>
          </motion.li>
          <motion.li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-bg ease-in-out"
          whileHover={{y:-5,rotate:3}}
          >
            <a href="/buy_ins">Buy Insurance</a>
          </motion.li>
          <motion.li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-bg ease-in-out"
          whileHover={{y:-5,rotate:-2}}>
                        <a href="/register_ins">Register Insurance</a>

          </motion.li>
          <motion.li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-bg ease-in-out"
          whileHover={{y:-5,rotate:-2}}>
            <a href="/claim">Claim</a>
          </motion.li>
          <motion.li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-bg ease-in-out"
          whileHover={{y:-5,rotate:-2}}>
            <a href="/consultency">Consultency</a>
          </motion.li>
          <motion.li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-bg ease-in-out"
          whileHover={{y:-5,rotate:-2}}>
            <a href="/list_policy">List Insurance</a>
          </motion.li>
          
        </ul>
      </nav>
  )
}
