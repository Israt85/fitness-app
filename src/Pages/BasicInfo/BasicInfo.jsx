import React from 'react';
import profile from '../../assets/Images/john.jpeg'

const BasicInfo = () => {
    return (
        <div className=' ml-10'>
           <div className="w-[650px] border border-[#8B909F] relative rounded-lg h-40 bg-[#424756]">
           <div className="w-[650px] h-32 absolute top-0 rounded-lg bg-[#D0FD3E33] border border-[#8B909F]">

</div>
<div>
<img className='w-24 absolute inset-0 top-14 h-24 rounded-full' src={profile} alt="" />
<svg className='absolute inset-0 top-24 left-12' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_10_414)">
<circle cx="35" cy="34" r="15" fill="#010101"/>
<circle cx="35" cy="34" r="14.5" stroke="#8B909F"/>
</g>
<path d="M31.3543 36.1196L35.9701 30.5816L37.8492 32.8364L33.1171 38.515C33.1171 38.515 33.1171 38.5151 33.117 38.5151C32.9719 38.6891 32.7996 38.7996 32.6254 38.8493L32.6252 38.8494L30.5188 39.4515L31.0481 36.7824C31.0481 36.7824 31.0481 36.7824 31.0481 36.7823C31.0481 36.7823 31.0481 36.7823 31.0481 36.7822C31.0998 36.5225 31.2088 36.2942 31.3543 36.1196C31.3543 36.1196 31.3543 36.1196 31.3543 36.1196ZM30.3248 39.5069C30.3248 39.5069 30.3249 39.5069 30.3249 39.5069L30.3248 39.5069ZM39.092 31.3446L39.0918 31.3448L39.0299 31.4191L37.1508 29.1639L37.3297 28.949C37.5815 28.6469 37.9013 28.5 38.2107 28.5C38.5202 28.5 38.84 28.6467 39.0918 28.9488L39.4758 28.6286L39.0918 28.9488C39.3458 29.2535 39.5 29.6834 39.5 30.1466C39.5 30.6099 39.3459 31.0398 39.092 31.3446Z" fill="#F58115" stroke="#8B909F"/>
<defs>
<filter id="filter0_d_10_414" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_414"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_414" result="shape"/>
</filter>
</defs>
</svg>
</div>


</div>
<div className='w-[650px] h-80 rounded-lg mt-6 bg-[#424756] border border-[#8B909F] '>
    <div className='flex items-center mx-6 my-4 gap-2 border-b-2 pb-4'>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z" fill="#F8F8F8"/>
</svg>
<p className='text-xl font-semibold text-white'>Basic information</p>

    </div>
    <div className='flex items-center justify-around w-full '>
        <p className='text-xl text-white'>Full name</p>
        <div className='gap-4 flex'>
            <input className='h-10 rounded-lg bg-transparent border border-[#E5E5E580] ' placeholder='       Michael' type="text" name="" id="" />
            <input className='h-10 rounded-lg bg-transparent border border-[#E5E5E580]' placeholder='    Stirling' type="text" name="" id="" />
        </div>
    </div>
    <div className='flex justify-around my-4 w-full '>
        <p className='text-xl px-4  text-white'>Phone <span className='text-sm'>(Compulsory)</span></p>
      
            <input className='h-10 mx-auto w-96 rounded-lg bg-transparent border border-[#E5E5E580] ' placeholder='       +92 325 3545 34534' type="text" name="" id="" />
     
    </div>
    <div className='flex justify-around my-4 w-full '>
        <p className='text-xl px-6  text-white'>Email <span className='text-sm'>(Compulsory)</span></p>
      
            <input className='h-10 mx-auto w-96 rounded-lg bg-transparent border border-[#E5E5E580] ' placeholder='       loremipsum@gmail.com' type="text" name="" id="" />
     
    </div>
    <div className='flex justify-end items-end p-2'>
        <button className='text-xl px-6 py-2 rounded-md bg-[#D0FD3E] font-semibold'>Update</button>
    </div>

</div>


           </div>
    );
};

export default BasicInfo;