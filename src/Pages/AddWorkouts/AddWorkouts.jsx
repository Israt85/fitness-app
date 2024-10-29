import React from 'react';

const AddWorkouts = () => {
    return (
        <div>
           <div className='flex text-white mx-6 gap-4 items-center'>
           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.3587 18.9193L27.5625 15.321V5.0111C27.5589 4.7948 27.4934 4.5841 27.3737 4.4041C27.254 4.2241 27.0852 4.08241 26.8875 3.99591L18.45 0.104312C18.3019 0.0355937 18.1407 0 17.9775 0C17.8143 0 17.6531 0.0355937 17.505 0.104312L9.0675 3.99591C8.87222 4.08652 8.70695 4.23138 8.5913 4.41332C8.47565 4.59526 8.41446 4.80663 8.415 5.02238V15.3323L0.652503 18.9193C0.457226 19.0099 0.291962 19.1548 0.17631 19.3367C0.0606587 19.5187 -0.000529002 19.73 3.44558e-06 19.9458V30.9776C-0.000529002 31.1934 0.0606587 31.4047 0.17631 31.5867C0.291962 31.7686 0.457226 31.9135 0.652503 32.0041L9.09 35.8957C9.23809 35.9644 9.39931 36 9.5625 36C9.72568 36 9.8869 35.9644 10.035 35.8957L18 32.2184L25.965 35.8957C26.1131 35.9644 26.2743 36 26.4375 36C26.6007 36 26.7619 35.9644 26.91 35.8957L35.3475 32.0041C35.5428 31.9135 35.708 31.7686 35.8237 31.5867C35.9393 31.4047 36.0005 31.1934 36 30.9776V19.9458C36.0015 19.7313 35.942 19.5208 35.8284 19.3389C35.7148 19.1571 35.5519 19.0116 35.3587 18.9193ZM26.4487 22.574L20.7 19.9458L26.4487 17.295L32.1975 19.9458L26.4487 22.574ZM25.3237 15.3097L18.0787 18.6937V10.0194C18.2143 10.0134 18.3477 9.98283 18.4725 9.92917L25.3125 6.78206V15.3323L25.3237 15.3097ZM18 2.36031L23.7487 5.0111L18 7.6619L12.2625 5.0111L18 2.36031ZM9.5625 17.2837L15.3112 19.9345L9.5625 22.574L3.81375 19.9458L9.5625 17.2837ZM16.875 30.2444L9.5625 33.6284V24.9541C9.7195 24.9447 9.8728 24.9025 10.0125 24.83L16.8525 21.6716L16.875 30.2444ZM33.75 30.2444L26.4825 33.6284V24.9541C26.6241 24.9388 26.7615 24.8967 26.8875 24.83L33.7275 21.6716L33.75 30.2444Z" fill="white"/>
</svg>
<p className='text-xl font-bold'>Add new Workout</p>
           </div>
           <div className='w-[950px] text-white bg-[#424756] rounded-lg my-4 mx-auto h-[700px]'>
                <p className='p-4 border-b-2 text-xl'>Workout information</p>
                <div>
                <div className='flex justify-around items-center'>
                    <div className=''>
                    <div className='flex flex-col text-white my-4 w-96 mx-auto'>
        <label className='mb-2' htmlFor="title"> Workout Name</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='      Arms Exercise' />
    </div>
    <div className='flex flex-col text-white my-4 w-96 mx-auto'>
        <label className='mb-2' htmlFor="title"> Workout Description</label>
        <textarea className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' name="" id="" cols="5" rows="5" placeholder='      Description'></textarea>
    </div>
                    </div>
                    <div className='w-60'>
                        <p className='text-center'>Upload Videos <span className='text-[#D0FD3E]'>(ratio 1:1)</span> </p>
                        <div className='w-40 mx-auto mt-4 flex justify-center items-center h-40 rounded-full bg-[#FFFFFF3D]'>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6819 7.03125C19.6819 8.89605 18.9411 10.6845 17.6225 12.0031C16.3039 13.3217 14.5154 14.0625 12.6506 14.0625C10.7858 14.0625 8.9974 13.3217 7.67878 12.0031C6.36017 10.6845 5.61938 8.89605 5.61938 7.03125C5.61938 5.16645 6.36017 3.37802 7.67878 2.05941C8.9974 0.74079 10.7858 0 12.6506 0C14.5154 0 16.3039 0.74079 17.6225 2.05941C18.9411 3.37802 19.6819 5.16645 19.6819 7.03125ZM31.5647 18.4303C31.3009 18.2982 31.0023 18.2524 30.7111 18.2993C30.4199 18.3462 30.1508 18.4836 29.9419 18.6919L19.5075 31.9387L12.0262 24.1425C11.7561 23.9627 11.4321 23.8818 11.1092 23.9136C10.7863 23.9453 10.4842 24.0878 10.2544 24.3169L0 36.5625V42.1875C0 42.9334 0.296316 43.6488 0.823762 44.1762C1.35121 44.7037 2.06658 45 2.8125 45H42.1875C42.5568 45 42.9226 44.9273 43.2638 44.7859C43.605 44.6446 43.9151 44.4374 44.1762 44.1762C44.4374 43.9151 44.6446 43.605 44.7859 43.2638C44.9273 42.9226 45 42.5568 45 42.1875V29.5312L31.5647 18.4303Z" fill="#F8F8F8"/>
</svg>

                        </div>

                    </div>
                </div>
                <div className='flex justify-around'>
<div className='flex flex-col text-white my-4 w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Category</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='   category' />
    </div>
<div className='flex flex-col text-white my-4 w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Calories Burn</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='     340 Kcal' />
    </div>
</div>
                <div className='flex'>
<div className='flex flex-col text-white my-4 w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Time Period</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='    30 mins' />
    </div>
<div className='flex flex-col text-white my-4 w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Level</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='    Beginner' />
    </div>
</div>
                <div className='flex'>
<div className='flex flex-col text-white my-4 w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Equipment's Used</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder="   Equipment's Used" />
    </div>
<div className='flex text-white my-4 w-80 mx-auto'>
        <div className='flex w-full justify-center items-center gap-6'>
            <button className='px-6 py-2 border rounded-lg'>Back</button>
            <button className='px-6 py-2 text-black bg-[#D0FD3E] font-bold rounded-lg'>Save</button>
            
        </div>
    </div>
</div>
                
                </div>
           </div>
        </div>
    );
};

export default AddWorkouts;