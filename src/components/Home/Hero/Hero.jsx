import React from 'react'
import Bridal from "../../../assets/Bridal4.jpg"


function hero() {
    return (
        <div className='bg-gray-200 min-h-height flex justify-center items-center'>
            <div className='relative flex items-center justify-center w-full h-screen bg-[#d2d0bb]'>
                <div className='absolute left-10 md:left-20 top-1/4 md:top-1/5' >
                    <p className=' text-black font-bold '>
                        Welcome!
                    </p>
                    <h1 className='text-5xl md:text-8xl font-bold leading-tight'>
                        To <br /> PD's <br />Salon
                    </h1>
                    <button className='mt-7 bg-[#7b9d87] font-bold text-white px-7 py-3 rounded-lg '>
                        Check Availability
                    </button>

                </div>
                <div className='hidden md:block '>
                    <div className=' absolute bottom-20 w-72 h-80 z-20 inset-x-1/3' >
                        <img src={Bridal} alt="" className='object-cover w-full h-full shadow-lg  '/>
                    </div>
                    <img src="https://lh3.googleusercontent.com/p/AF1QipNhQmOLVfFdDrapA5K9Gm7fSPME7RJjaXo_fIqY=s2560-w2560-h1262-rw" alt="" className=' absolute right-0 top-0 w-1/2 h-full object-cover z-10   '/>

                </div>
            </div>
        </div>
    )
}

export default hero