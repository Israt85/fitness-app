import React, { useEffect, useRef, useState } from 'react';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  // Updated items array to include both name and SVG
  const items = [
    {
      name: ' Deutsch',
      svg: (
        <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
      ),
    },
    {
      name: ' Italiano',
      svg: (
        <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#009246" d="M0 0h170.7v512H0z"/><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/></g></svg>  
      ),
    },
  ];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
     
      <div onClick={() => setOpen((prev) => !prev)}  className='w-28 h-10 border rounded-full gap-2 flex justify-center items-center'>
              <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_36_700" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="20">
<path d="M13.5 0.733101C20.9558 0.733101 27 5.04614 27 10.3666C27 15.687 20.9558 20 13.5 20C6.04416 20 0 15.687 0 10.3666C0 5.04614 6.04416 0.733101 13.5 0.733101Z" fill="white"/>
</mask>
<g mask="url(#mask0_36_700)">
<path d="M0 20L0.421875 19.1721L0 18.3066V17.4411L1.6875 15.4091L0 13.377V12.1728L1.6875 10.3666L0 8.56028V7.3561L1.6875 5.32404L0 3.29199V0.733101L1.16016 1.03415L2.37305 0.733101H3.58594L6.43359 1.93728L9.28125 0.733101H10.9688L13.5 1.93728L16.0312 0.733101H17.7188L20.5664 1.93728L23.4141 0.733101H27L26.5781 1.56098L27 2.42648V3.29199L25.3125 5.32404L27 7.3561V8.56028L25.3125 10.3666L27 12.1728V13.377L25.3125 15.4091L27 17.4411V20L25.8398 19.699L24.627 20H23.4141L20.5664 18.7958L17.7188 20H16.0312L13.5 18.7958L10.9688 20H9.28125L6.43359 18.7958L3.58594 20H0Z" fill="#EEEEEE"/>
<path d="M17.7188 20V15.9359L23.4141 20H17.7188ZM27 17.4411L21.3047 13.377H27V17.4411ZM0 13.377H5.69531L0 17.4411V13.377ZM3.58594 20L9.28125 15.9359V20H3.58594ZM9.28125 0.733101V4.79721L3.58594 0.733101H9.28125ZM0 3.29199L5.69531 7.3561H0V3.29199ZM27 7.3561H21.3047L27 3.29199V7.3561ZM23.4141 0.733101L17.7188 4.79721V0.733101H23.4141Z" fill="#0052B4"/>
<path d="M0 20V18.3066L6.9082 13.377H9.28125L0 20ZM10.9688 20V12.1728H0V8.56028H10.9688V0.733101H16.0312V8.56028H27V12.1728H16.0312V20H10.9688ZM24.627 20L17.7188 15.0704V13.377L27 20H24.627ZM9.28125 7.3561L0 0.733101H2.37305L9.28125 5.66272V7.3561ZM17.7188 7.3561L27 0.733101V2.42648L20.0918 7.3561H17.7188Z" fill="#D80027"/>
</g>
</svg> <p>EN</p>
<svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.42857L6 5L11 1.42857" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              </div>
   
      <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1 rounded-sm`}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center space-x-2 rounded-sm bg-[#1A1D26] text-white p-2 ${
              open ? 'opacity-100 duration-300' : 'opacity-0 duration-150'
            } `}
          >
            {item.svg} {/* Display SVG */}
            <span>{item.name}</span> {/* Display name */}
          </li>
        ))}
      </ul>
      <div>
     
      </div>
    </div>
  );
}
