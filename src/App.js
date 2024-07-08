import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     
     
        

        
        <Testimonials reviews={reviews}/>

      </div>
    
  );
};

export default App;
