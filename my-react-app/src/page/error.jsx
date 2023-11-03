import React from "react";
import Line from '../assets/error/asset 24.png'
import Oops from '../assets/error/asset 2.png'
import  Err from '../assets/err.svg'
import { Footer } from "../component/Footer";
import Header from "../component/header";

export default function Error(){
    return(
        <>
           <div>
            <Header/>
           </div>
            <div className="">
            <div className="">
                <img src={Line} className="" alt/>
            </div>
            
            <div className="flex">
            
               <div className="mt-36">
                   <div className="pl-60 flex  ">
                      <img src={Err} className="h-12 " alt/>
                      <div className="text-[#ff497c] pl-   font-semibold flex mt-2 ">Oops! Somthing's missing.</div>
                   </div>
                   <div className="pl-64 text-5xl font-bold">Page not found</div>
                    <p className="pl-64 pt-11 text-[#777777]">   It seems like we dont find what you searched. The page you were <br />
                     looking for doesn't exist, isn't available loading incorrectly. </p>
                 <div className="pl-64  pt-10 ">
                     <button className="pl-16 pr-16 pt-3 pb-3 text-white rounded-md  font-medium  bg-[#ff497c]">Back To Home  </button>
                </div>
              </div>
               <div className="">
                  <img src={Oops} className="h-3/5 mt-20 pl-44 " alt/>
               </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
      </>
    )
}