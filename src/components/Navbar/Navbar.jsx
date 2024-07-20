import React from 'react'
import CallIcon from "../../assets/call.png"

function Navbar() {
    return (
        <div>
            <nav className='bg-black py-4 px-8'  >
                <div className='container mx-auto w-10/12 flex justify-between items-center' >
                    <div className='text-white font-bold text-2xl'>
                        PD's SALON
                    </div>


                    <div className='flex space-x-8 text-[#d2d0ba]'>
                        <ul className='flex space-x-8 text-sm  ' >
                            <li className='hover:text-white'>Home </li>
                            <li className='hover:text-white'>Catologue </li>
                            <li className='hover:text-white'>Shop </li>
                            <li className='hover:text-white'>Contact </li>
                        </ul>
                    </div>
                    <div className='flex items-center space-x-4 gap-16 '>
                        <div className='flex justify-center items-center gap-2 text-right text-white text-sm '>
                            <img  src= {CallIcon} alt="" className='w-8'/>
                            <div>
                                <div>
                                    Info & Reservation
                                </div>
                                <div>
                                    9873032124
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </nav>
        </div>

    )
}

export default Navbar