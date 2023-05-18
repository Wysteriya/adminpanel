import React, { useState } from "react";
import axios from "axios";

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
    <div class="w-full font-poppins">
      <div className="text-[1.5rem] font-semibold cursor-pointer fixed tracking-wide top-[0.75rem] left-[2rem]">
        INSUREGO
        <div className="text-gray-500 text-sm font-thin">Team wysteria</div>
      </div>
      <h2 class="text-center text-gray-900 font-bold text-2xl uppercase mb-10 mt-10">
        Buy Insurance
      </h2>
      <div class="w-full h-full px-36">
        <form class="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
          <div class="mb-8">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Public key
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="public_key"
              type="text"
              placeholder="public key"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Private key
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="private_key"
              type="private_key"
              placeholder="private key"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Policy Ref Id
            </label>
            <input
              class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="policy_refId"
              type="text"
              placeholder="Policy ref ID"
            />
          </div>
          <div class="flex">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 m-auto p-2 h-52 bg-orange-200">
        <h2>Response</h2>
        <div>
          <pre>{JSON.stringify(response)}</pre>
        </div>
      </div>
    </div>
  );
};

export default BuyIns;
