import React from 'react';
import jhon from '../../assets/Images/john.jpeg'
import MobileDashNav from './MobileDashNav';

const MobileTopbar = () => {
    return (
        <div className=''>
        <div className=' w-full h-20 p-6 justify-center text-white flex flex-row bg-[#1A1D26]'>
           <div className='w-40'>
           <MobileDashNav></MobileDashNav>
           </div>
           <div className='text-[#D0FD3E] text-2xl'>
           ANDREW’S
           </div>
           <div>
           </div>
          <div className=' h-12'>
          <div className='flex gap-2  justify-center items-center w-32'>
               <div>
               <img className='w-12 h-12 rounded-full' src={jhon} alt="" />
               </div>
               
           </div>
          </div>
       </div>
      </div>
    );
};

export default MobileTopbar;