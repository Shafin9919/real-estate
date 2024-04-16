import React from 'react'
import PropTypes from 'prop-types'
import { FaLocationDot } from "react-icons/fa6";
import { LuBedSingle } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function FeaturedCard({property}) {
const {externalID}=property;
const navigate=useNavigate();

const handleOnClick=(id)=>{
    navigate(`propertydeatil/${id}`)
}

  return (
    <div className='rounded-xl shadow-xl overflow-hidden'>
       <div className="card rounded-xl pb-4">
  <div className='absolute right-0 text-[12px] px-2 py-1 bg-[#999] text-[#fafafa]'>{property.purpose.toUpperCase()}</div>
    <img className='aspect-[2/1.4] ' src={property.coverPhoto.url} />
 
  <div className="card-body ">
    <h2 className="card-title text-center h-[80px]">{property.title}</h2>
    <p className='flex items-center gap-1'><FaLocationDot className='text-[#292929]' /><span>{property.location[1].name}, <span>{property.location[3].name}</span></span></p>
    <p className='flex gap-2 justify-between'><span className='flex items-center gap-1'><LuBedSingle className='text-[#8bcc00]' />{property.rooms} Beds</span>,<span className='flex items-center gap-1'><FaBath className='text-[#8bcc00]' />{property.baths} Baths</span>,<span className='flex items-center gap-1'><SlSizeFullscreen className='text-[#8bcc00]' />{Math.round(property.area)} m<sup>2</sup></span></p>
    <div className=''><p className='text-2xl text-[#292929] font-semibold border-2 p-1 h-fit rounded-xl w-fit inline-block mr-3 my-3 border-[#8bcc00]'>AED <span className='text-[#8bcc00]'>{property.price}</span></p><span className='text-normal'>{property.rentFrequency.toUpperCase()}</span></div>
    <div className="card-actions">
      <button onClick={()=>handleOnClick(externalID)} className="flex items-center gap-2 w-ft px-4 py-2 rounded-sm text-white font-semibold hover:bg-transparent hover:text-[#8bcc00] duration-300 text-xl bg-[#8bcc00]">See Property <FaArrowCircleRight className='text-2xl' /></button>
    </div>
  </div>
  
</div>
</div>
  )
}

FeaturedCard.propTypes = {}

export default FeaturedCard
