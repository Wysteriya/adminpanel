import React, { useState } from "react"
import axios from "axios";

const RegisterIns = () => {
    const [privateKey, setPrivateKey] = useState('');
    const [publickey, setPublickey] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [insuranceName, setInsuranceName] = useState('');
    const [type, setType] = useState('');
    const [coverageValue, setCoverageValue] = useState('');
    const [monthlyCost, setMonthlyCost] = useState('');
    const [description, setDescription] = useState('');
    const [otherDetails, setOtherDetails] = useState('');
    const [claimSuccessPercentage, setClaimSuccessPercentage] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name,value)
        switch (name) {
            case 'privateKey':
                setPrivateKey(value);
                break;
            case 'publicKey':
                setPublickey(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'insuranceName':
                setInsuranceName(value);
                break;
            case 'monthlyCost':
                setMonthlyCost(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'otherDetails':
                setOtherDetails(value);
                break;
            case 'claimSuccessPercentage':
                setClaimSuccessPercentage(value);
                break;
            case 'launchDate':
                setLaunchDate(value);
                break;
            case 'type':
                setType(value);
                break;
            case 'coverageValue':
                setCoverageValue(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const baseUrl = "http://34.125.255.98:9090/baby_chain/public/register_ins/"
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
                coverage_value: coverageValue
            }
        }
        console.log("here",postData)
        await axios.post(baseUrl, postData).then((response) => {
            console.log(response.status)
            console.log(response.data);
            setResponse(response)
        })
    };


    return (
        <div class="w-full">
            <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Register Insurance</h2>
            <div class="bg-pink-100 p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div class="mb-5">
                        <label for="privateKey" class="block mb-2 font-bold text-gray-600">Private Key</label>
                        <input type="text" id="name" name="privateKey" class="border border-gray-300 shadow p-3 w-full rounded mb-"  />
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

                    <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                </form>
            </div>
            <div className="w-1/2 m-auto p-2 h-52 bg-orange-200">
                <h2>RESPONSE</h2>{response}</div>
        </div>)
}

export default RegisterIns;