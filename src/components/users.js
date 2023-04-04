import React,{useEffect, useMemo, useState} from 'react'
import { ReactDOM } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import data from './../user_data.json'

const SimpleComp=p=>{
    return (
        <div className='cell'>
             {p.value}
        </div>
    )
}

const Customers=()=>{
    const [rowData,setRowData]=useState()
    const arr=[]
   data.map((data)=>{
      arr.push(data);
   })
   console.log(arr)
   useEffect(()=>{
      setRowData(arr)
   },[])
    const [columnDefs,setColumnDefs]=useState([
        {field:'FName',sortable:true,cellRenderer:SimpleComp},
        {field:'LName'},
        {field:'age',sortable:true,filter:true},
        {field:'DOB'},
        {field:'email'}
    ])

    const defaultColDef=useMemo(()=>(
        {
            sortable:true,
            filter:true,
        }
    ),[])
    return <div className='table_container'>
        <div className='ag-theme-alpine-dark table'
          style={{
            height:500
          }
          }
        > 
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection='multiple'
            ></AgGridReact>
        </div>
    </div>
}

export default Customers;