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
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio soluta inventore voluptatibus quam maxime nihil quasi, eius id magni eligendi atque a quod eos dolore

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
                <p>
                    <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi placeat eos voluptatibus facilis? Accusamus soluta eaque, temporibus nobis ab saepe ipsa? Qui eaque tenetur 

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
                    <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem voluptatum cumque maxime a nemo sed aliquid cum voluptates? Dolor, exercitationem ex 
                </p>

            </div>
        </div>
    </div>
  )
}

export default Jack