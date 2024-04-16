import React from 'react'
import PropTypes from 'prop-types'
import FeaturedCard from './FeaturedCard'
import { Link } from 'react-router-dom'
import FadeLoader from "react-spinners/ClipLoader";


function Featured({propertyList,isLoading}) {
   

const spinnerStyle={
    position:'absolute',
    border:' 2px solid red',
    left:'calc(50% - 250px)'
  }

  return (
   
    <div className='w-3/4 mx-auto px-8 my-16 border-2 border-[#8bcc00] py-8 rounded-sm'>
       
       {
            isLoading &&   
            <FadeLoader
            color={'#8bcc00'}
            cssOverride={spinnerStyle}
            loading={true}
            size={500}
            
          />
        }

        <div className='flex justify-between'>
            <h2 className='text-4xl my-3 text-[#292929]  font-bold'> <span className='text-[#8bcc00]'>Featured</span> Listing</h2>
        <button className='text-xl w-fit px-4 py-2 border-2 font-semibold hover:text-white hover:bg-[#8bcc00] duration-300 border-[#8bcc00] rounded-sm'><Link to='/listing'>See All Property</Link></button></div>
        <p className='mb-8'>See our featured properties and find your fututre home</p>
        <div className='grid grid-cols-3 gap-8'>
        {
            propertyList.slice(0,6).map((property)=> <FeaturedCard key={property.externalID} property={property}></FeaturedCard>)
        }
        </div>
    </div>
  )
}

Featured.propTypes = {}

export default Featured
