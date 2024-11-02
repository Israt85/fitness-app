import React from 'react';

const Modal3 = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_7').showModal()}><p className='text-[#D0FD3E]'>Go Live</p></button>
<dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box lg:w-[755px] w-[300px] mx-auto h-[600px] border border-[#EDF1698A] bg-[#1E1D1D]">
    <p className='text-[#D0FD3E] text-center text-xl font-bold'>Provide live data</p>
    <div>
    <div className='flex flex-col text-white my-4 w-full lg:w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Workout Title</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='      Title' />
    </div>
    <div className='flex flex-col text-white my-4 w-full lg:w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Live Link</label>
        <input className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' type="text" placeholder='      http://ndhknfllkvbjh' />
    </div>
    <div className='flex flex-col text-white my-4 w-full lg:w-80 mx-auto'>
        <label className='mb-2' htmlFor="title"> Description</label>
       <textarea className='p-2 bg-transparent border border-[#E4E4E480] rounded-lg' name="" id="" cols="5" rows="5" placeholder='       Description'></textarea>
    </div>
    </div>
    <div className="modal-action flex justify-center items-center">
      <form method="dialog">
        <button className="bg-[#D0FD3E] font-bold px-4 rounded-md py-2">Upload</button>
       
      </form>
    </div>
  </div>
</dialog>
            
        </div>
    );
};

export default Modal3;