// import React from 'react'
// import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


// const Card = (props) => {
//     let review = props.review;
//   return (
//     <div className='border-s-inherit'>
//       <div className='w-[170px] h-[170px] bg-violet-500 rounded-full absolute
//          top-[4px] z-[-25] left-[15px]'></div>
//     <img 
//         className="rounded-full w-60 h-60 max-w-lg mx-auto"
//         src={review.image}
//          alt={review.name}/>
        
//       <div className='badge bg-violet-400 w-[40px] h-[40px] rounded-full '>
//           <FaQuoteRight className='badge text-white align-center w-[20px] h-[20px] z-25 '/>
//       </div>

         
      
//       <div className='text-center mt-15'>
//         <p className='tracking-wider font-bold text-2xl capitalize mt-20'>{review.name}</p>
//         <p className='text-violet-300 uppercase text-sm '>{review.job}</p>
//       </div>


//       <div className=''>
//         <FaQuoteLeft/>
//       </div>

//       <div className='text-center mt-0 text-slate-500'>
//         {review.text}
//       </div>
//       </div>

     
   
//   )
// }

// export default Card
import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative text-center'>
      <div className='absolute z-[10] mx-auto text-center'>
      <FaQuoteRight className='text-violet-400 mx-auto mb-0 ml-0'/>
      <img 
        className="aspect-square rounded-full w-[170px] h-[170px] z-[25] mx-auto text-center"
        src={review.image}
    alt={review.name}/>
        <div className='w-[170px] h-[170px] bg-violet-500 rounded-full absolute
         top-[px] z-[-5] left-[35px]'></div>
      </div>
      
      <div className='text-center m-5'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>


      <div className=''>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

     
    </div>
  )
}

export default Card

