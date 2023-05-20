import React from 'react'

export const InsuranceCard = (props) => {
  return (
    <div className='py-4 px-4 bg-blue-500 text-white rounded-lg'>
       <a href={`/details/${props.id}`}>{props.id}</a>
    </div>
  )
}
