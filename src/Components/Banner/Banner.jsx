

import PropTypes from 'prop-types'

function Banner(props) {



  return (
   <div className='banner pl-[calc(12.5%+2.25rem)] flex flex-col w-full h-full mx-auto justify-center'>

<div className=' banner-text w-3/4 mt-28'>
<h1 className=' pb-0 rounded-t-2xl text-7xl items-center w-[40%] font-bold text-[#fafafa] font-heading'>Unlock The Door To Your Perfect Home</h1>

<p className='text-[#999] rounded-b-2xl pt-4 text-2xl w-full'>Find your perfect home, without any hassle and without any worry, at the best price with everything you need at <span className='border-b-4 border-[#8bcc00]'>UEstate</span></p>
</div>

    <button className='text-white text-xl btn w-fit font-bold my-8 bg-transparent hover:bg-[#292929]'>See Listings</button>

   </div>
  )
}

Banner.propTypes = {}

export default Banner
