import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "./utils/Navbar";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
const RegisterIns = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const {private_key,public_key}=cookies;
  console.log(cookies);
  const notifySuccess = (message) => {
    return toast.success(`${message}`);
  };
  const notifyError = (message) => {
    return toast.error(`${message}`);
  };
  const initial={
    "insurance_name":"",
    "company_name":"",
    "type":"",
    "coverage_value":"",
    "monthly_cost":"",
    "description":"",
    "other_details":"none",
    "claim_success_percentage":"",
    "launch_date":"12-03-2023",
  }
  const [data,setData]=useState(initial)

  const [error,setError]=useState(initial)
  const [policyId,setPolicyId]=useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = "http://34.125.194.30:9090/baby_chain/public/register_ins";
    // Do something with the form data here
    const postData={
      "public_key":`${public_key}`,
      "private_key":`${private_key}`,
      "data":{
        ...data
      }
    }
    await axios.post(baseUrl, postData).then((response) => {
      console.log(response.policy_ref_id);
      notifySuccess("successfully fetched policy id")
      setPolicyId(response.data.policy_ref_id);
      
    }).catch((error)=>{
      notifyError(error.response.data.error)
    });
  }

  const handleInputChange=(e)=>{
      setData((prev)=>{
        return {...prev,[e.target.id]:e.target.value}
      })
  }

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
    <div class="w-full font-poppins grid justify-around p-4 md:p-10 items-center flex-wrap grid-cols-1 bg-blue-500">
    <div className="text-2xl text-white">Register insurance</div>
      
      <h2 class="text-center text-gray-900 font-bold text-2xl uppercase mb-10 fixed right-[2rem] top-[0.75rem]">
        Buy Insurance
      </h2>
      <div class="h-full px-4 md:px-36 py-36 col-span-1 min-w-full">
        <form
          class="shadow-md rounded px-10 pt-6 pb-8 mb-4 bg-white"
          onSubmit={handleSubmit}
          
        >
          <div class="mb-8">
            <label
              class="block text-sm font-bold mb-2"
              for="username"
            >
              Insurance name
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="insurance_name"
              type="text"
              placeholder="insurance name"
              onChange={handleInputChange}
              value={data.insurance_name}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Company name
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="company_name"
              type="text"
              placeholder="Company name"
              onChange={handleInputChange}
              value={data.company_name}
            />
            <div className="text-sm text-red-500">{error.company_name}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Insurance Type
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              type="text"
              placeholder="Insurance type"
              onChange={handleInputChange}
              value={data.type}
            />
            <div className="text-sm text-red-500">{error.type}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Coverage value
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="coverage_value"
              type="text"
              placeholder="coverage value"
              onChange={handleInputChange}
              value={data.coverage_value}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Monthly cost
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="monthly_cost"
              type="number"
              placeholder="Monthly cost"
              onChange={handleInputChange}
              value={data.monthly_cost}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <textarea
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
              onChange={handleInputChange}
              value={data.description}
            />
            <div className="text-sm text-red-500">{error.public_key}</div>
          </div>
          <div class="mb-6">
            <label
              class="block  text-sm font-bold mb-2"
              for="password"
            >
              Claim success percentage
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="claim_success_percentage"
              type="number"
              placeholder="Claim percentage"
              onChange={handleInputChange}
              value={data.claim_success_percentage}
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
        <div className="py-4 px-6 bg-white text-gray-850 rounded-lg"  value={policyId} onChange={""} onClick={""}>
          {policyId}
        </div>
      </div>
    </div>
    </>
  );
  };

export default RegisterIns;
