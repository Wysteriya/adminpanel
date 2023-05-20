import React, { useState } from 'react'
import { Navbar } from './utils/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { LinkCard } from './utils/linkCard';
import { InsuranceCard } from './utils/insuranceCard';
export const InsuranceDetails = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    const [chk,setChk]=useState(false)

    axios.post('http://34.125.194.30:9090/baby_chain/public/ins_havs', {
        "policy_ref_id":id
      })
      .then(function (response) {
        console.log(response.data);
        setData(response.data.pub_keys)
        if(data.length==0){
            setChk(true)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  return (
    <>
    <Navbar/>
    <div className='font-poppins h-screen w-full p-4'>
    <div className='flex w-full justify-around'>
    <div className='mb-8'>Policy reference ID :{id}</div>
    <span><a href='/list_policy' className='px-4  rounded-lg text-white bg-blue-500'>Policy list</a></span>
    </div>
    
    <div className='flex flex-col gap-4'>
        {
           data.map((data)=>{
                return <InsuranceCard id={data}/>
            })
        }
    </div>
    </div>
    </>
  )
}
