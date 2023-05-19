import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "./utils/Navbar";

const RegisterIns = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [publickey, setPublickey] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [insuranceName, setInsuranceName] = useState("");
  const [type, setType] = useState("");
  const [coverageValue, setCoverageValue] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [description, setDescription] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [claimSuccessPercentage, setClaimSuccessPercentage] = useState("");
  const [launchDate, setLaunchDate] = useState("");
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
      case "companyName":
        setCompanyName(value);
        break;
      case "insuranceName":
        setInsuranceName(value);
        break;
      case "monthlyCost":
        setMonthlyCost(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "otherDetails":
        setOtherDetails(value);
        break;
      case "claimSuccessPercentage":
        setClaimSuccessPercentage(value);
        break;
      case "launchDate":
        setLaunchDate(value);
        break;
      case "type":
        setType(value);
        break;
      case "coverageValue":
        setCoverageValue(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = "http://localhost:9090/baby_chain/public/register_ins";
    // Do something with the form data here
    const postData = {
      private_key: privateKey,
      public_key: publickey,
      data: {
        company_name: companyName,
        insurance_name: insuranceName,
        monthly_cost: monthlyCost,
        description: description,
        other_details: otherDetails,
        claim_success_percentage: claimSuccessPercentage,
        launch_date: launchDate,
        type: type,
        coverage_value: coverageValue,
      },
    };
    await axios.post(baseUrl, postData).then((response) => {
      console.log(response.error);
      setResponse(response.data);
    });
  };

  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex justify-center items-center font-poppins">
      <div className="text-[1.5rem] font-semibold cursor-pointer fixed tracking-wide top-[0.75rem] left-[2rem]">
        Register Insurance
        <div className="text-gray-500 text-sm font-thin">Insurego</div>
      </div>
      <div className="w-full h-4/5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full col-span-1">
        <form onSubmit={handleSubmit} className="p-4 w-full">
                    <div class="mb-5">
                        <label for="privateKey" class="block mb-2 font-bold text-gray-600">Private Key</label>
                        <input type="text" id="name" name="privateKey" class="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>

                    <div class="mb-5">
                        <label for="publicKey" class="block mb-2 font-bold text-gray-600">Public Key</label>
                        <input type="text" id="twitter" name="publicKey"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="insuranceName" class="block mb-2 font-bold text-gray-600">Insurance Name</label>
                        <input type="text" id="twitter" name="insuranceName"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="companyName" class="block mb-2 font-bold text-gray-600">Company Name</label>
                        <input type="text" id="twitter" name="companyName"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="type" class="block mb-2 font-bold text-gray-600">Type</label>
                        <input type="text" id="twitter" name="type"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="coverageValue" class="block mb-2 font-bold text-gray-600">Coverage Value</label>
                        <input type="text" id="twitter" name="coverageValue"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="monthlyCost" class="block mb-2 font-bold text-gray-600">Monthly Cost</label>
                        <input type="text" id="twitter" name="monthlyCost"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block mb-2 font-bold text-gray-600">Descripton</label>
                        <input type="text" id="twitter" name="description"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="otherDetails" class="block mb-2 font-bold text-gray-600">Other Details</label>
                        <input type="text" id="twitter" name="otherDetails"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="claimSuccessPercentage" class="block mb-2 font-bold text-gray-600">Claim Success Percentage</label>
                        <input type="text" id="twitter" name="claimSuccessPercentage"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>
                    <div class="mb-5">
                        <label for="launchDate" class="block mb-2 font-bold text-gray-600">Launch Date</label>
                        <input type="text" id="twitter" name="launchDate"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>

                    <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" type="submit">Submit</button>
                </form>
        </div>
        <div className="w-full h-screen bg-blue-300 col-span-1 relative">
            <p className="absolute top-4 left-4 text-white">Response</p>
            <div>
                {response}
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterIns;
