import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative text-center'>
      <div className='grid'>
      <div className='col-start-1 row-start-1  max-w-lg mx-auto bg-blue-700 w-[40px] h-[40px] rounded-full z-25'>
      <FaQuoteRight className='max-w-lg mx-auto divide-x-4 '/>
      </div>
     <img 
        className="col-start-1 row-start-1 w-[150px] h-[150px] rounded-full max-w-lg mx-auto  border-r-8 border-blue-500"
        src={review.image}
      alt={review.name} />
         {/* <div className='w-[170px] h-[170px] rounded-full max-w-lg mx-auto bg-blue-500 mb-5'>
        </div> */}
       
       </div>
      <div className='text-center mt-7'>
        <p className='tracking-wider text-2xl capitalize mt-7'>{review.name}</p>
        <p className=' text-blue-400 font-bold uppercase text-sm mt-7'>{review.job}</p>
      </div>
    <div className='text-center mt-7 text-slate-800'>
        {review.text}
      </div>

     
    </div>
  )
}

export default Card
