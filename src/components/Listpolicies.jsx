import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from './utils/Navbar';
import { InsuranceCard } from './utils/insuranceCard';
export const Listpolicies = () => {
 const [policies,setPolicies]=useState([]);
 const [data,setData]=useState();
 const [load,setLoaded]=useState(false)
  useEffect(()=>{
    axios.get('http://34.125.194.30:9090/baby_chain/public/list_ins')
   .then(async (response)=>{
    // handle success
    const data= await response.data;
    setPolicies(data);
    setData(response.data.data)
   })
   .catch((error)=>{
    // handle error
    console.log(error);
   })
  },[])
  const handel=(data)=>{
    for(const key in data){
        console.log("----",data[key]);
        setData((prev)=>{
           return [...prev,data[key]]
        })
    }
   }
   let ins = []
   data && Object.keys(data).forEach(d => ins.push(d))
  return (
    <>
        <Navbar/>
        
        <div className='h-screen w-full p-4 font-poppins'>
        <div className='flex flex-col gap-4'>
        <div>Polices :</div>
        {
            ins.map(i => <InsuranceCard id={i}/>) 
        }
        </div>
        </div>
        
        
    </>
  )
}
