import React from 'react'
import Img1 from '../../Asset/Img1.jpg';
import Img2 from '../../Asset/Img2.jpg';
import Img3 from '../../Asset/Img3.jpg';
import Img4 from '../../Asset/Img4.jpg';

const AchieveCard = () => {
  return (
    <div className='bg-green-600/20 grid grid-cols-2 w-96 h-96 p-1 gap-1 rounded-full'>
        <div className="bg-red-500 w-full rounded-tl-full overflow-hidden">
            <img src={Img1} alt="Image1" className='w-full h-full'/>
        </div>
        <div className="bg-yellow-500 w-full rounded-tr-full overflow-hidden">
            <img src={Img1} alt="Image1" className='w-full h-full'/>
            {/* <img src={Img2} alt="Image1" className='w-full h-full'/> */}
        </div>
        <div className="bg-gray-500 w-full  rounded-bl-full overflow-hidden">
            <img src={Img1} alt="Image1" className='w-full h-full'/>
            {/* <img src={Img3} alt="Image1" className='w-full h-full'/> */}
        </div>
        <div className="bg-purple-500 w-full  rounded-br-full overflow-hidden">
            <img src={Img1} alt="Image1" className='w-full h-full'/>
            {/* <img src={Img4} alt="Image1" className='w-full h-full'/> */}
        </div>
    </div>
  )
}

export default AchieveCard