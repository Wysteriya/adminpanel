import React from 'react';
import ReactDOM from 'react-dom';
import Customers  from './../components/users'
import TComponent  from './../components/customer_title';
import NavbarComp from './../components/navbar';
const Home=()=>{
    return(
        <div className='Home app_container'>
            <NavbarComp />
            <TComponent />
            <Customers />
        </div>

    )
}

export default Home;