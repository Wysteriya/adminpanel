import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "./utils/Navbar";

const BuyIns = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [publickey, setPublickey] = useState("");
  const [policyRefId, setPolicyRedId] = useState("");
  const [response, setResponse] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "privateKey":
        setPrivateKey(value);
        break;
      case "publicKey":
        setPublickey(value);
        break;
      case "policyRefId":
        setPolicyRedId(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = "http://localhost:9080/baby_chain/private/buy_ins";
    // Do something with the form data here
    const postData = {
      public_key: publickey,
      private_key: privateKey,
      policy_ref_id: policyRefId,
    };
    console.log(postData);
    await axios.post(baseUrl, postData).then((response) => {
      console.log(response.data);
      setResponse(response.data);
    });
  };

  return (
    <>
    <Navbar/>
    <div class="w-full font-poppins grid justify-around p-10 items-center flex-wrap grid-cols-2">
      
      <h2 class="text-center text-gray-900 font-bold text-2xl uppercase mb-10 fixed right-[2rem] top-[0.75rem]">
        Buy Insurance
      </h2>
      <div class="h-full px-36 py-36 col-span-1 min-w-full">
        <form
          class=" bg-blue-500 shadow-md rounded px-10 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div class="mb-8">
            <label
              class="block text-white text-sm font-bold mb-2"
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
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
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
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="password"
            >
              Policy Ref Id
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="policy_refId"
              type="text"
              placeholder="Policy ref ID"
              onChange={handleInputChange}
            />
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
      <div className="h-[60vh] p-2  bg-orange-200 mx-10 rounded-lg col-span-1">
        <h2>Response</h2>
        <div>
          <pre>{JSON.stringify(response)}</pre>
        </div>
      </div>
    </div>
    </>
  );
};

export default BuyIns;
