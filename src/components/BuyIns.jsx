import React, { useState } from "react"
import axios from "axios";

const BuyIns = () => {
    const [privateKey, setPrivateKey] = useState('');
    const [publickey, setPublickey] = useState('');
    const [policyRefId, setPolicyRedId] = useState('');
    const [response, setResponse] = useState('');
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'privateKey':
                setPrivateKey(value);
                break;
            case 'publicKey':
                setPublickey(value);
                break;
            case 'policyRefId':
                setPolicyRedId(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const baseUrl = "http://34.125.255.98:9080/baby_chain/private/buy_ins/"
        // Do something with the form data here
        const postData = {
            private_key: privateKey,
            public_key: publickey,
            policy_ref_id : policyRefId
        }
        axios.post(baseUrl, postData).then((response) => {
            console.log(response.status)
            console.log(response.data);
            setResponse(response)
        })
    };


    return (
        <div class="w-full">
            <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Register Insurance</h2>
            <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
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
                        <label for="policyRefId" class="block mb-2 font-bold text-gray-600">Policy Ref Id</label>
                        <input type="text" id="twitter" name="policyRefId"  class="border border-red-300 shadow p-3 w-full rounded mb-" onChange={handleInputChange} />
                    </div>

                    <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                </form>
            </div>
            <div className="w-1/2 m-auto p-2 h-52 bg-orange-200">
                <h2>Response</h2>{response}</div>
        </div>)
}

export default BuyIns;