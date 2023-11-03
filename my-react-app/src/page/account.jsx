import React from "react";
import Line from '../assets/account/asset 25.png'

export default function Account(){
    return(
        <>
        <div className="">
            <div className="">
                <img src={Line} className="pt-24" alt/>
            </div>
         <div className="bg-[#f8f8f8] h-52">
            <div className="p flex">
                 <p className="pl-64 pt-10 text-base text-[#999999] font-semibold font-sans hover:text-[#3577f0]">Home</p>
                <p className="pt-10 pl-3 text-base text-gray-500 font-semibold">|</p>
               <pre className="pt-10 pl-3 text-base font-sans text-[#3577f0] font-semibold">My Account</pre>
          </div>
          <div className="pt-3 pl-64 font-sans text-[#292930] font-bold text-4xl">Explore All Products</div>
       </div>
        </div>
        </>
    )
}