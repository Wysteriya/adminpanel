import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../components/RegistraionPage'
import LoginPage from './../components/LoginPage';
import './../css/login_page.css';
const Login=()=>{
    return(
        <div className='login_page_container'>
            <LoginPage />
        </div>
    )
}
export default Login;