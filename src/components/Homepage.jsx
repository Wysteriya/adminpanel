import {motion} from 'framer-motion'
import { useState } from 'react';
import { Navbar } from './utils/Navbar';
import { Footer } from './utils/Footer';
const HomePage = () => {
  const [hover,setHover]=useState(false)
  return (
    <body className="font-poppins" >
      <Navbar/>
      <div className="px-36 py-10 " style={{background:'linear-gradient(white 60%,#348feb 60%,#348feb 50%,#348feb 50%)'}}>
        <div className="w-full h-80  grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-2  text-[2.5rem] flex items-center justify-center ">
            <p>Decentralized blockchain based Insurance Marketplace app</p>
          </div>
          <motion.div className="col-span-2 bg-blue-600 rounded-[1rem] flex items-center text-white px-20 drop-shadow-xl"
          whileHover={{rotate:2}}
          initial={{ y:-20 }}
          animate={{y:0}}
          >
            <div className="flex-col">
              <p className="text-lg text-left py-8">
                We bridge the transparency and trust gap in the insurance
                bussiness by enabling trustless blockchain based buying and
                selling of insurance
              </p>
              <div>
                <span className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold border-2 border-blue-100 hover:bg-blue-500 hover:text-white transition-all ease-in-out cursor-pointer"><a href="https://drive.google.com/drive/folders/1SWBsYPjlVrElg5UF35EuL4aqSFfd8iak?usp=sharing">Download app</a></span>
              </div>
            </div>
          </motion.div>
        </div>
        <h2 className="py-4 text-[2rem]">How it works ?</h2>
        <div className="w-full relative flex  justify-between p-4 rounded-lg flex-wrap" >
          <motion.div className="bg-white  w-[27rem] rounded-lg border-2 border-blue-100 overflow-hidden shadow-lg "
             whileHover={{y:-20}}
          >
            <div className="p-4">
               <h2 className="font-bold pb-4">
                  Multiple providers
               </h2>
               <p className="text-gray-500 peer-hover:text-white">
               There is client side app which allows users to buy insurance from various providers
               </p>
            </div>
            <img src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80">
            </img>
          </motion.div>
          <motion.div className="bg-white  hover:bg-blue-50 w-[27rem] rounded-lg border-2 border-blue-100 overflow-hidden shadow-lg"
            whileHover={{y:-10}}
          >
            <div className="p-4">
               <h2 className="font-bold pb-4">
                  Admin privelage
               </h2>
               <p className="text-gray-500">
               The admin panel lets insurance provider to register their insurance policy.
               </p>
            </div>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80">
            </img>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </body>
  );
};

export default HomePage;
