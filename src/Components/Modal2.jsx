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
<dialog id="my_modal_1" className="modal">
  
  <div className=" w-60 rounded-lg flex justify-end items-end h-60 bg-[#1E1D1D] border border-[#D1D72F8A]">
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
  
</dialog>
        </div>
    );
};

export default Modal2;