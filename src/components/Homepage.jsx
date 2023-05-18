const HomePage = () => {
  return (
    <body className="font-poppins" >
      <nav className="flex justify-between py-3 px-8 items-center font-poppins">
        <div className="text-[1.5rem] font-semibold cursor-pointer tracking-wide">
          INSUREGO
          <div className="text-gray-500 text-sm font-thin">Team wysteria</div>
        </div>
        <ul className="text-sm flex gap-4 cursor-pointer">
          <li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-all ease-in-out">
            <a href="/login">Admin login</a>
          </li>
          <li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-all ease-in-out">
            Our product
          </li>
          <li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-all ease-in-out">
            About us
          </li>
          <li className="rounded-full py-2 px-4 border-2 hover:border-blue-200 hover:bg-blue-600 hover:text-white transition-all ease-in-out">
            Contact us
          </li>
        </ul>
      </nav>
      <div className="px-36 py-10 " style={{background:'linear-gradient(white 60%,#348feb 60%,#348feb 50%,#348feb 50%)'}}>
        <div className="w-full h-80  grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-2  text-[2.5rem] flex items-center justify-center ">
            <p>Decentralized blockchain based Insurance Marketplace app</p>
          </div>
          <div className="col-span-2 bg-blue-600 rounded-[1rem] flex items-center text-white px-20 drop-shadow-xl">
            <div className="flex-col">
              <p className="text-lg text-left py-8">
                We bridge the transparency and trust gap in the insurance
                bussiness by enabling trustless blockchain based buying and
                selling of insurance
              </p>
              <div>
                <span className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold border-2 border-blue-100 hover:bg-blue-500 hover:text-white transition-all ease-in-out cursor-pointer">Download app</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="py-4 text-[2rem]">How it works ?</h2>
        <div className="w-full relative flex  justify-between p-4 rounded-lg flex-wrap" >
          <div className="bg-white hover:bg-blue-50 w-[27rem] rounded-lg border-2 border-blue-100 overflow-hidden shadow-lg  transition-all ease-in-out">
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
          </div>
          <div className="bg-white  hover:bg-blue-50 w-[27rem] rounded-lg border-2 border-blue-100 overflow-hidden shadow-lg">
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
          </div>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
