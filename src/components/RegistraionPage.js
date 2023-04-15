import './../css/loginForm.css'
import React, { useState } from 'react';
import axios from 'axios';

const RegForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const baseUrl = "http://34.125.247.127:9090/baby_chain/public/register_ins/"
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
    axios.post(baseUrl, postData).then((response) => {
      console.log(response.status)
      console.log(response.data);
      setResponse(response)
    })
  };

  return (
      <form className="form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="publicKey">Public Key</label>
          <input
            type="text"
            name="publicKey"
            id="publicKey"
            value={publickey}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="privateKey">Private Key</label>
          <input
            type="text"
            name="privateKey"
            id="privateKey"
            value={privateKey}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="publicKey">Public Key</label>
          <input
            type="text"
            name="publicKey"
            id="publicKey"
            value={publickey}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="insurance_name">Insurance Name</label>
          <input
            type="text"
            name="insuranceName"
            id="insuranceName"
            value={insuranceName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={type}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverageValue">Coverage Value</label>
          <input
            type="text"
            name="coverageValue"
            id="coverageValue"
            value={coverageValue}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="monthlyCost">Monthly Cost</label>
          <input
            type="text"
            name="monthlyCost"
            id="monthlyCost"
            value={monthlyCost}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherDetails">Other Details</label>
          <input
            type="text"
            name="otherDetails"
            id="otherDetails"
            value={otherDetails}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="claimSuccessPercentage">Claim Success Percentage</label>
          <input
            type="text"
            name="claimSuccessPercentage"
            id="claimSuccessPercentage"
            value={claimSuccessPercentage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="launchDate">Launch Date</label>
          <input
            type="text"
            name="launchDate"
            id="launchDate"
            value={launchDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

  )
}
export default RegForm;