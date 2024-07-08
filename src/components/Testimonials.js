import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className='w-[75vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

        <Card review = {reviews[index]}></Card>
     

      <div className='flex text-3xl mt-10 gap-3 text-blue-800 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-blue-800 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-blue-800 '>
            <FiChevronRight/>
        </button>
      </div>

      <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-blue-100 hover:bg-blue-700 transition-all duration-200
        cursor-pointer px-5 py-1 rounded-md text-blue-800'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
