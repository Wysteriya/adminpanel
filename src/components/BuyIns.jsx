import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "./utils/Navbar";
import { ToastContainer, toast,Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BuyIns = () => {

  const notifySuccess = (message) => {
    return toast.success(`${message}`);
  };
  const notifyError = (message) => {
    return toast.error(`${message}`);
  };


  const [data,setData]=useState({
    "private_key":"",
    "public_key":"",
    "policy_ref_id":"",
  })
  const handleInputChange = (event) => {
     setData((prev)=>{
       return {...prev,[event.target.id]:event.target.value}
     })
  };

  const initial={public_key:"",public_key:"",policy_ref_id:"",error:true}
  const [error,setError]=useState(initial)

  const validateform=()=>{
    if(data.public_key=="" && data.private_key=="" &&data.policy_ref_id==""){
      return {public_key:"invalid public key",private_key:"invalid private key",error:true}
    }else if(data.private_key==""){
         return {private_key:"invalid private key",error:true}
    }else if(data.public_key=="" && data.private_key==""){
      return {public_key:"invalid public key",error:true}
         
    }else if(data.policy_ref_id==""){
      return {public_key:"invalid policy ref id",error:true}
    }
    return {error:false}
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validate=validateform();
    if(validate.error){
       setError(validate);
       return;
    }
    console.log(data);
    const baseUrl = "http://34.125.194.30:9080/baby_chain/private/buy_ins";
    await axios.post(baseUrl, data).then((response) => {
      console.log(response.data);
      notifySuccess(response.data.message)
    }).catch((error)=>{
      console.log(error.response.data.error)
      notifyError(error.response.data.error)
    });
  };

  return (
    <>
    <Navbar/>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    <div class="w-full font-poppins grid justify-around p-10 items-center flex-wrap grid-cols-1 bg-blue-500">
      
      <h2 class="text-center text-gray-900 font-bold text-2xl uppercase mb-10 fixed right-[2rem] top-[0.75rem]">
        Buy Insurance
      </h2>
      <div class="h-full px-36 py-36 col-span-1 min-w-full">
        <form
          class="shadow-md rounded px-10 pt-6 pb-8 mb-4 bg-white"
          onSubmit={handleSubmit}
          
        >
          <div class="mb-8">
            <label
              class="block text-sm font-bold mb-2"
              for="username"
            >
              Public key
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="public_key"
              type="text"
              placeholder="public key"
              onChange={handleInputChange}
              value={data.public_key}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Private key
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="private_key"
              type="private_key"
              placeholder="private key"
              onChange={handleInputChange}
              value={data.private_key}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Policy Ref Id
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="policy_ref_id"
              type="text"
              placeholder="Policy ref ID"
              onChange={handleInputChange}
              value={data.policy_ref_id}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          <div class="flex">
            <button
              class="bg-blue-500 border-2 border-blue-600 hover:bg-white hover:text-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default BuyIns;
