import React, { useState,useEffect } from 'react'
import { Navbar } from './utils/Navbar'
import axios from 'axios'
import { LinkCard } from './utils/linkCard'
export const Consultency = () => {
    const [text,setText]=useState("Loading .....")
    const [links,setLinks]=useState([]);
    useEffect(()=>{
        axios.get('https://9loc20ibh8.execute-api.us-east-1.amazonaws.com/api/client/getmeet')
        .then((response)=>{
          const urls=response.data.urls;
          const links=urls;
          setLinks(links);
          setText("")
        })
        .catch((error)=>{
          console.log(error);
        })
    },[])
    
  return (
    <>
    <Navbar/>
    <div className='h-screen w-full bg-gray-200 p-8 grid grid-cols-2 gap-8'>
      {text}
       {
        links.map((link,index)=>{
            return <LinkCard
                link={link}
                index={index}
            />
        })
       }
    </div>
    </>
    
  )
}
