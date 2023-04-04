import './../css/loginForm.css'
import React, { useState } from 'react';

const RegForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [logo, setLogo] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'companyName':
        setCompanyName(value);
        break;
      case 'logo':
        setLogo(value);
        break;
      case 'productName':
        setProductName(value);
        break;
      case 'productDescription':
        setProductDescription(value);
        break;
      case 'monthlyCost':
        setMonthlyCost(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
        <label htmlFor="logo">Logo</label>
        <input
          type="file"
          name="logo"
          id="logo"
          onChange={handleInputChange}
          accept=".jpg,.jpeg"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          id="productName"
          value={productName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productDescription">Product Description</label>
        <textarea
          name="productDescription"
          id="productDescription"
          value={productDescription}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="monthlyCost">Monthly Cost</label>
        <input
          type="number"
          name="monthlyCost"
          id="monthlyCost"
          value={monthlyCost}
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