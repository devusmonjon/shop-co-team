import React from 'react'
import { IoIosStar } from "react-icons/io";
import svg from "../../assets/images/Frame.svg"
const Swiper = () => {
  return (
    <div>
        <h2 className=' text-3xl lg:text-4xl md:text-4xl sm:text-4xl text-[30px] text-start container mx-auto font-bold font-integral'>OUR HAPPY CUSTOMERS</h2>
        <div className='container mx-auto flex flex-row mb-4 mt-6 gap-5'>
            <div className='border w-[400px] rounded-xl  '>
                <div className='flex ml-5 mt-5'>
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                </div>
                <div className='flex ml-5 mt-1'>
                    <p className='font-bold text-xl'>Sarah M.</p>
                    <img src={svg} alt="" />
                </div>
                <p className='flex ml-5 mt-1 mb-5 mr-5'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div className='border w-[400px] rounded-xl  '>
                <div className='flex ml-5 mt-5'>
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                </div>
                <div className='flex ml-5 mt-1'>
                    <p className='font-bold text-xl'>Alex K.</p>
                    <img src={svg} alt="" />
                </div>
                <p className='flex ml-5 mt-1 mb-5 mr-5'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
            </div>
            <div className='border w-[400px] rounded-xl  '>
                <div className='flex ml-5 mt-5'>
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                    <IoIosStar className='text-yellow-300' />
                </div>
                <div className='flex ml-5 mt-1'>
                    <p className='font-bold text-xl'>James L.</p>
                    <img src={svg} alt="" />
                </div>
                <p className='flex ml-5 mt-1 mb-5 mr-5'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
            </div>
           

        </div>
    </div>
  )
}

export default Swiper