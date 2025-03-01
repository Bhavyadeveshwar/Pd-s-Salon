import React from 'react'
import Makeup from '../../../assets/Makeup.jpg'
import Hair from '../../../assets/hair.jpg'
import Nail from '../../../assets/nail.jpg'

function Jack() {
  return (
    <div className='bg-gray-100 grid grid-cols-1 md:grid-cols-3 justify-center items-center px-6 md:px-40 gap-10 md:gap-20   '>
        <div>
            <div className=''>
                <img className='w-80 h-80 object-cover ' src={Makeup} alt="" />

            </div>
            <div>
               <h1 className='font-bold text-xl '>
                    <br />Beauty Makeover

                </h1>
                <p>
                    <br />At PD Salon, we redefine beauty with personalized makeovers that enhance your natural charm. <br /> Step in and let us craft a look that turns heads!

                </p>
            </div>

        </div>
        <div>
            <div className=''>
                <img className='w-80 h-80 object-cover' src={Hair} alt="" />

            </div>
            <div>
                <h1 className='font-bold text-xl'>
                    <br />Hair Styling

                </h1>
                <p> <br /> Your hair is your crown, and at PD Salon, we style it to perfection.
                    <br /> Experience precision cutting, expert coloring, and nourishing treatments that leave your hair healthy and full of life.

                </p>
            </div>

        </div>
        <div>
            <div>
                <img className='w-80 h-80 object-cover' src={Nail} alt="" />

            </div>
            <div>
                <h1 className='font-bold text-xl'>
                    <br />Nail Art
                </h1>
                <p>
                    <br />Let your nails be a canvas of creativity with PD Salon’s exquisite nail art services. From minimalist elegance to intricate, eye-catching designs, we bring artistry and precision to every manicure.  </p>

            </div>
        </div>
    </div>
  )
}

export default Jack