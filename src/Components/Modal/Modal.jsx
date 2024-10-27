import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_1').showModal()}>
    <div className='w-6 h-6 flex justify-center items-center border border-[#E7104B] rounded-lg'>
                               <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_36_754" fill="white">
<path d="M10.2667 11.7895C10.2667 12.3757 10.0349 12.938 9.6223 13.3526C9.20972 13.7671 8.65014 14 8.06667 14H2.93333C2.34986 14 1.79028 13.7671 1.3777 13.3526C0.965118 12.938 0.733333 12.3757 0.733333 11.7895V2.94737H0V0.736842H3.3L4.03333 0H6.96667L7.7 0.736842H11V2.94737H10.2667V11.7895ZM1.46667 2.94737V11.7895C1.46667 12.1803 1.62119 12.5552 1.89624 12.8315C2.1713 13.1079 2.54435 13.2632 2.93333 13.2632H8.06667C8.45565 13.2632 8.8287 13.1079 9.10376 12.8315C9.37881 12.5552 9.53333 12.1803 9.53333 11.7895V2.94737H1.46667ZM10.2667 2.21053V1.47368H7.33333L6.6 0.736842H4.4L3.66667 1.47368H0.733333V2.21053H10.2667ZM2.93333 4.42105H3.66667V11.7895H2.93333V4.42105ZM7.33333 4.42105H8.06667V11.7895H7.33333V4.42105Z"/>
</mask>
<path d="M10.2667 11.7895C10.2667 12.3757 10.0349 12.938 9.6223 13.3526C9.20972 13.7671 8.65014 14 8.06667 14H2.93333C2.34986 14 1.79028 13.7671 1.3777 13.3526C0.965118 12.938 0.733333 12.3757 0.733333 11.7895V2.94737H0V0.736842H3.3L4.03333 0H6.96667L7.7 0.736842H11V2.94737H10.2667V11.7895ZM1.46667 2.94737V11.7895C1.46667 12.1803 1.62119 12.5552 1.89624 12.8315C2.1713 13.1079 2.54435 13.2632 2.93333 13.2632H8.06667C8.45565 13.2632 8.8287 13.1079 9.10376 12.8315C9.37881 12.5552 9.53333 12.1803 9.53333 11.7895V2.94737H1.46667ZM10.2667 2.21053V1.47368H7.33333L6.6 0.736842H4.4L3.66667 1.47368H0.733333V2.21053H10.2667ZM2.93333 4.42105H3.66667V11.7895H2.93333V4.42105ZM7.33333 4.42105H8.06667V11.7895H7.33333V4.42105Z" fill="#E7104B"/>
<path d="M10.2667 11.7895H11.2667H10.2667ZM8.06667 14V15V14ZM2.93333 14V15V14ZM0.733333 2.94737H1.73333V1.94737H0.733333V2.94737ZM0 2.94737H-1V3.94737H0V2.94737ZM0 0.736842V-0.263158H-1V0.736842H0ZM3.3 0.736842V1.73684H3.71561L4.00879 1.44226L3.3 0.736842ZM4.03333 0V-1H3.61772L3.32454 -0.705417L4.03333 0ZM6.96667 0L7.67546 -0.705417L7.38228 -1H6.96667V0ZM7.7 0.736842L6.99121 1.44226L7.28439 1.73684H7.7V0.736842ZM11 0.736842H12V-0.263158H11V0.736842ZM11 2.94737V3.94737H12V2.94737H11ZM10.2667 2.94737V1.94737H9.26667V2.94737H10.2667ZM1.46667 2.94737V1.94737H0.466667V2.94737H1.46667ZM1.46667 11.7895H0.466667H1.46667ZM9.53333 2.94737H10.5333V1.94737H9.53333V2.94737ZM10.2667 2.21053V3.21053H11.2667V2.21053H10.2667ZM10.2667 1.47368H11.2667V0.473684H10.2667V1.47368ZM7.33333 1.47368L6.62454 2.1791L6.91772 2.47368H7.33333V1.47368ZM6.6 0.736842L7.30879 0.0314249L7.01561 -0.263158H6.6V0.736842ZM4.4 0.736842V-0.263158H3.98439L3.69121 0.0314249L4.4 0.736842ZM3.66667 1.47368V2.47368H4.08228L4.37546 2.1791L3.66667 1.47368ZM0.733333 1.47368V0.473684H-0.266667V1.47368H0.733333ZM0.733333 2.21053H-0.266667V3.21053H0.733333V2.21053ZM2.93333 4.42105V3.42105H1.93333V4.42105H2.93333ZM3.66667 4.42105H4.66667V3.42105H3.66667V4.42105ZM3.66667 11.7895V12.7895H4.66667V11.7895H3.66667ZM2.93333 11.7895H1.93333V12.7895H2.93333V11.7895ZM7.33333 4.42105V3.42105H6.33333V4.42105H7.33333ZM8.06667 4.42105H9.06667V3.42105H8.06667V4.42105ZM8.06667 11.7895V12.7895H9.06667V11.7895H8.06667ZM7.33333 11.7895H6.33333V12.7895H7.33333V11.7895ZM9.26667 11.7895C9.26667 12.1121 9.13908 12.4205 8.91351 12.6471L10.3311 14.058C10.9307 13.4555 11.2667 12.6394 11.2667 11.7895H9.26667ZM8.91351 12.6471C8.6881 12.8736 8.38338 13 8.06667 13V15C8.9169 15 9.73135 14.6606 10.3311 14.058L8.91351 12.6471ZM8.06667 13H2.93333V15H8.06667V13ZM2.93333 13C2.61662 13 2.31191 12.8736 2.08649 12.6471L0.668906 14.058C1.26865 14.6606 2.0831 15 2.93333 15V13ZM2.08649 12.6471C1.86092 12.4205 1.73333 12.1121 1.73333 11.7895H-0.266667C-0.266667 12.6394 0.0693214 13.4555 0.668906 14.058L2.08649 12.6471ZM1.73333 11.7895V2.94737H-0.266667V11.7895H1.73333ZM0.733333 1.94737H0V3.94737H0.733333V1.94737ZM1 2.94737V0.736842H-1V2.94737H1ZM0 1.73684H3.3V-0.263158H0V1.73684ZM4.00879 1.44226L4.74213 0.705417L3.32454 -0.705417L2.59121 0.0314249L4.00879 1.44226ZM4.03333 1H6.96667V-1H4.03333V1ZM6.25787 0.705417L6.99121 1.44226L8.40879 0.0314249L7.67546 -0.705417L6.25787 0.705417ZM7.7 1.73684H11V-0.263158H7.7V1.73684ZM10 0.736842V2.94737H12V0.736842H10ZM11 1.94737H10.2667V3.94737H11V1.94737ZM9.26667 2.94737V11.7895H11.2667V2.94737H9.26667ZM0.466667 2.94737V11.7895H2.46667V2.94737H0.466667ZM0.466667 11.7895C0.466667 12.444 0.725393 13.0727 1.18745 13.5369L2.60504 12.1261C2.51699 12.0376 2.46667 11.9166 2.46667 11.7895H0.466667ZM1.18745 13.5369C1.64967 14.0014 2.27759 14.2632 2.93333 14.2632V12.2632C2.81111 12.2632 2.69292 12.2144 2.60504 12.1261L1.18745 13.5369ZM2.93333 14.2632H8.06667V12.2632H2.93333V14.2632ZM8.06667 14.2632C8.72241 14.2632 9.35033 14.0014 9.81255 13.5369L8.39496 12.1261C8.30708 12.2144 8.18889 12.2632 8.06667 12.2632V14.2632ZM9.81255 13.5369C10.2746 13.0727 10.5333 12.444 10.5333 11.7895H8.53333C8.53333 11.9166 8.48301 12.0376 8.39496 12.1261L9.81255 13.5369ZM10.5333 11.7895V2.94737H8.53333V11.7895H10.5333ZM9.53333 1.94737H1.46667V3.94737H9.53333V1.94737ZM11.2667 2.21053V1.47368H9.26667V2.21053H11.2667ZM10.2667 0.473684H7.33333V2.47368H10.2667V0.473684ZM8.04213 0.768267L7.30879 0.0314249L5.89121 1.44226L6.62454 2.1791L8.04213 0.768267ZM6.6 -0.263158H4.4V1.73684H6.6V-0.263158ZM3.69121 0.0314249L2.95787 0.768267L4.37546 2.1791L5.10879 1.44226L3.69121 0.0314249ZM3.66667 0.473684H0.733333V2.47368H3.66667V0.473684ZM-0.266667 1.47368V2.21053H1.73333V1.47368H-0.266667ZM0.733333 3.21053H10.2667V1.21053H0.733333V3.21053ZM2.93333 5.42105H3.66667V3.42105H2.93333V5.42105ZM2.66667 4.42105V11.7895H4.66667V4.42105H2.66667ZM3.66667 10.7895H2.93333V12.7895H3.66667V10.7895ZM3.93333 11.7895V4.42105H1.93333V11.7895H3.93333ZM7.33333 5.42105H8.06667V3.42105H7.33333V5.42105ZM7.06667 4.42105V11.7895H9.06667V4.42105H7.06667ZM8.06667 10.7895H7.33333V12.7895H8.06667V10.7895ZM8.33333 11.7895V4.42105H6.33333V11.7895H8.33333Z" fill="#E7104B" mask="url(#path-1-inside-1_36_754)"/>
</svg>


                               </div></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
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

export default Modal;