import React from 'react';

const Modal2 = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="flex justify-center ml-6 items-center" onClick={()=>document.getElementById('my_modal_1').showModal()}><div className=' '>
                       <svg width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="23" r="3" transform="rotate(-90 3 23)" fill="#D0FD3E"/>
<circle cx="3" cy="13" r="3" transform="rotate(-90 3 13)" fill="#D0FD3E"/>
<circle cx="3" cy="3" r="3" transform="rotate(-90 3 3)" fill="#D0FD3E"/>
</svg>

                       </div></button>
<dialog id="my_modal_1" className="modal flex justify-end">
  
  <div className=" w-52 rounded-lg mx-20 h-32 bg-[#1E1D1D] border border-[#D1D72F8A]">
      
       {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="w-full mx-auto" onClick={()=>document.getElementById('my_modal_6').showModal()}> <p className='text-center p-6 text-base'>Cancel Subscription</p></button>
<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
  <div className="p-6 w-[550px] h-[200px] bg-[#1E1D1D] border border-[#D1D72F8A]">
    <p className='text-center text-xl text-[#D0FD3E]'>Cancel Subscription</p>
    <p className='text-center
     text-lg py-2 text-gray-400'>Do you really want to cancel the subscription of this user? In case of cancellation, you have to refund the payment.</p>
   
    <div className="modal-action flex my-2 justify-center items-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="border text-[#D0FD3E] border-[#D0FD3E] px-5 py-3 rounded-md ml-6">Cancel</button>
        <button className="bg-[#D0FD3E] text-lg text-black font-bold px-5 py-3 rounded-md ml-6">Refund</button>
      </form>
    </div>
  </div>
</dialog>
<form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="w-full mx-auto"><p className='text-center text-base '>Payment Complete</p></button>
      </form>
    <div className="modal-action">
      <form method="dialog">
       
      </form>
    </div>
  </div>
  
</dialog>
        </div>
    );
};

export default Modal2;