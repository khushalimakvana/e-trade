import Logo from '../assets/signin/asset 0.png'
import Bgimg from '../assets/signin/asset 1.jpeg'

export default function Signin(){
    return(
        <>
       <div className="h-screen flex justify-between">

            <div className="text-center flex absolute">
               <div className="grid col-span-2 ps-28 pt-16" >
                <img src={Logo} alt=""/>
               </div>
            </div>
        <div className='absolute ps-36 pt-52 font-medium text-3xl'>
           <p>We Offer The Best Prodect</p>
        </div>

        <div className=''>
           <img src={Bgimg} className='h-screen' alt="" />
        </div>

        <div className='pt-64 pl-56'>
           <p className='font-bold text-3xl'>Sign in to eTrade </p>
           <p className='text-slate-400 pt-3'>Enter your details below</p>
         
       <div className='relative mt-8'>
           <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9 text-sm  '>Email</label>
           <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-900 text-sm type-text' placeholder='annie@example.com'></input>
       </div>

       <div className='relative mt-8'>
          <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9 text-sm  '>Password</label>
          <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-800 text-sm type-text' placeholder=''></input>
       </div>

      <div  className='relative mt-8 flex' >
          <button className='text-white bg-blue-500 rounded-lg top-[-5px] left-[20px]   pt-3 pb-3 pl-10 pr-10  text-lg font-bold  '>Sign in</button>
           <div className="text-blue-600 hover: ml-32 mt-3 font-normal text-sm hover:text-gray-600 ">Forget Password? </div> 
      </div>
 
    
  </div>
        <div className='text-center'>
            <div className='pe-28 pt-16'>
                 <div className='flex'>
                     <p className='ps-28 pt-3 pr-8'>Already a Member?</p>
                     <button type='button' className=' bg-pink-600 rounded-md pl-9 pr-9 pb-3 pt-3 text-white font-bold'>Sign up now</button>
                 </div>
             </div>
        </div>
   </div>  
        </>
    )

}