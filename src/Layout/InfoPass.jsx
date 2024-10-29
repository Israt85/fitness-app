import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const InfoPass = () => {
    return (
        <div className='flex justify-around'>
            <div className="w-72 h-32 flex flex-col justify-center items-center bg-[#424756] border border-[#8B909F] rounded-lg ml-6">
       <div className="flex justify-center gap-6 items-center">
           <div>
           <NavLink to='basicinfo' className={({ isActive }) => 
    `text-lg ${isActive ? 'text-[#D0FD3E]' : 'text-white'}`}  >
           {/* <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.8 12V11.9999C0.800142 11.7102 0.85747 11.4234 0.968695 11.1559C1.07992 10.8884 1.24286 10.6455 1.44816 10.4412C1.65346 10.2368 1.89708 10.0749 2.16507 9.96491C2.43297 9.85491 2.71995 9.79887 3.00956 9.8H3.009L0.8 12ZM0.8 12C0.8 13.7676 1.67522 15.1026 3.0274 15.9656L3.02751 15.9657M0.8 12L3.02751 15.9657M3.02751 15.9657C4.35178 16.8096 6.12108 17.2 8 17.2C9.87892 17.2 11.6482 16.8096 12.9725 15.9657L12.9725 15.9656M3.02751 15.9657L12.9725 15.9656M12.9725 15.9656C14.3249 15.1036 15.2 13.7665 15.2 12M12.9725 15.9656L15.2 12M15.2 12C15.2 11.4165 14.9682 10.8569 14.5556 10.4444M15.2 12L14.5556 10.4444M14.5556 10.4444C14.1431 10.0318 13.5835 9.8 13 9.8M14.5556 10.4444L13 9.8M13 9.8L3.0098 9.8L13 9.8ZM12.2196 14.7843L12.2194 14.7844C11.1917 15.4404 9.71108 15.8 8 15.8C6.28892 15.8 4.80828 15.4404 3.78061 14.7844L3.78058 14.7844C2.78086 14.1465 2.2 13.2335 2.2 12C2.2 11.5588 2.55716 11.2 3.009 11.2H13C13.2122 11.2 13.4157 11.2843 13.5657 11.4343C13.7157 11.5843 13.8 11.7878 13.8 12C13.8 13.2327 13.22 14.1475 12.2196 14.7843ZM8 0.8C6.88609 0.8 5.8178 1.2425 5.03015 2.03015C4.2425 2.8178 3.8 3.88609 3.8 5C3.8 6.11391 4.2425 7.1822 5.03015 7.96985C5.8178 8.7575 6.88609 9.2 8 9.2C9.11391 9.2 10.1822 8.7575 10.9698 7.96985C11.7575 7.1822 12.2 6.11391 12.2 5C12.2 3.88609 11.7575 2.8178 10.9698 2.03015C10.1822 1.2425 9.11391 0.8 8 0.8ZM5.2 5C5.2 4.25739 5.495 3.5452 6.0201 3.0201C6.5452 2.495 7.25739 2.2 8 2.2C8.74261 2.2 9.4548 2.495 9.9799 3.0201C10.505 3.5452 10.8 4.25739 10.8 5C10.8 5.74261 10.505 6.4548 9.9799 6.9799C9.4548 7.505 8.74261 7.8 8 7.8C7.25739 7.8 6.5452 7.505 6.0201 6.9799C5.495 6.4548 5.2 5.74261 5.2 5Z" fill="#D0FD3E" stroke="#D0FD3E" stroke-width="0.4"/>
</svg> */}
           </NavLink>
{/* <svg className="mt-8" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.777344 9.88889C0.777344 9.4174 0.964645 8.96521 1.29804 8.63181C1.63144 8.29842 2.08363 8.11111 2.55512 8.11111H11.444C11.9155 8.11111 12.3677 8.29842 12.7011 8.63181C13.0345 8.96521 13.2218 9.4174 13.2218 9.88889V15.2222C13.2218 15.6937 13.0345 16.1459 12.7011 16.4793C12.3677 16.8127 11.9155 17 11.444 17H2.55512C2.08363 17 1.63144 16.8127 1.29804 16.4793C0.964645 16.1459 0.777344 15.6937 0.777344 15.2222V9.88889Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.44531 8.11111V4.55556C3.44531 3.61256 3.81991 2.70819 4.48671 2.0414C5.15351 1.3746 6.05788 1 7.00087 1C7.94386 1 8.84823 1.3746 9.51503 2.0414C10.1818 2.70819 10.5564 3.61256 10.5564 4.55556V8.11111M6.11198 12.5556C6.11198 12.7913 6.20563 13.0174 6.37233 13.1841C6.53903 13.3508 6.76512 13.4444 7.00087 13.4444C7.23662 13.4444 7.46271 13.3508 7.62941 13.1841C7.79611 13.0174 7.88976 12.7913 7.88976 12.5556C7.88976 12.3198 7.79611 12.0937 7.62941 11.927C7.46271 11.7603 7.23662 11.6667 7.00087 11.6667C6.76512 11.6667 6.53903 11.7603 6.37233 11.927C6.20563 12.0937 6.11198 12.3198 6.11198 12.5556Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}

           </div>
<div className="">
<NavLink 
  className={({ isActive }) => 
    `text-lg flex justify-center my-2 items-center gap-2 w-60 ${isActive ? 'text-[#D0FD3E]' : 'text-white'}`
  } 
  to="basicinfo"
>
  <span className="flex items-center gap-2">
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.8 12V11.9999C0.800142 11.7102 0.85747 11.4234 0.968695 11.1559C1.07992 10.8884 1.24286 10.6455 1.44816 10.4412C1.65346 10.2368 1.89708 10.0749 2.16507 9.96491C2.43297 9.85491 2.71995 9.79887 3.00956 9.8H3.009L0.8 12ZM0.8 12C0.8 13.7676 1.67522 15.1026 3.0274 15.9656L3.02751 15.9657M0.8 12L3.02751 15.9657M3.02751 15.9657C4.35178 16.8096 6.12108 17.2 8 17.2C9.87892 17.2 11.6482 16.8096 12.9725 15.9657L12.9725 15.9656M3.02751 15.9657L12.9725 15.9656M12.9725 15.9656C14.3249 15.1036 15.2 13.7665 15.2 12M12.9725 15.9656L15.2 12M15.2 12C15.2 11.4165 14.9682 10.8569 14.5556 10.4444M15.2 12L14.5556 10.4444M14.5556 10.4444C14.1431 10.0318 13.5835 9.8 13 9.8M14.5556 10.4444L13 9.8M13 9.8L3.0098 9.8L13 9.8ZM12.2196 14.7843L12.2194 14.7844C11.1917 15.4404 9.71108 15.8 8 15.8C6.28892 15.8 4.80828 15.4404 3.78061 14.7844L3.78058 14.7844C2.78086 14.1465 2.2 13.2335 2.2 12C2.2 11.5588 2.55716 11.2 3.009 11.2H13C13.2122 11.2 13.4157 11.2843 13.5657 11.4343C13.7157 11.5843 13.8 11.7878 13.8 12C13.8 13.2327 13.22 14.1475 12.2196 14.7843ZM8 0.8C6.88609 0.8 5.8178 1.2425 5.03015 2.03015C4.2425 2.8178 3.8 3.88609 3.8 5C3.8 6.11391 4.2425 7.1822 5.03015 7.96985C5.8178 8.7575 6.88609 9.2 8 9.2C9.11391 9.2 10.1822 8.7575 10.9698 7.96985C11.7575 7.1822 12.2 6.11391 12.2 5C12.2 3.88609 11.7575 2.8178 10.9698 2.03015C10.1822 1.2425 9.11391 0.8 8 0.8ZM5.2 5C5.2 4.25739 5.495 3.5452 6.0201 3.0201C6.5452 2.495 7.25739 2.2 8 2.2C8.74261 2.2 9.4548 2.495 9.9799 3.0201C10.505 3.5452 10.8 4.25739 10.8 5C10.8 5.74261 10.505 6.4548 9.9799 6.9799C9.4548 7.505 8.74261 7.8 8 7.8C7.25739 7.8 6.5452 7.505 6.0201 6.9799C5.495 6.4548 5.2 5.74261 5.2 5Z" 
        fill="currentColor" stroke="currentColor" strokeWidth="0.4"/>
    </svg>

    <p>Basic Information</p>
  </span>
</NavLink>

        <NavLink 
  className={({ isActive }) => 
    `text-lg flex justify-center my-2 items-center gap-2 w-44 ${isActive ? 'text-[#D0FD3E]' : 'text-white'}`
  } 
  to="password"
>
  <span className="flex items-center gap-2">
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.777344 9.88889C0.777344 9.4174 0.964645 8.96521 1.29804 8.63181C1.63144 8.29842 2.08363 8.11111 2.55512 8.11111H11.444C11.9155 8.11111 12.3677 8.29842 12.7011 8.63181C13.0345 8.96521 13.2218 9.4174 13.2218 9.88889V15.2222C13.2218 15.6937 13.0345 16.1459 12.7011 16.4793C12.3677 16.8127 11.9155 17 11.444 17H2.55512C2.08363 17 1.63144 16.8127 1.29804 16.4793C0.964645 16.1459 0.777344 15.6937 0.777344 15.2222V9.88889Z" 
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.44531 8.11111V4.55556C3.44531 3.61256 3.81991 2.70819 4.48671 2.0414C5.15351 1.3746 6.05788 1 7.00087 1C7.94386 1 8.84823 1.3746 9.51503 2.0414C10.1818 2.70819 10.5564 3.61256 10.5564 4.55556V8.11111M6.11198 12.5556C6.11198 12.7913 6.20563 13.0174 6.37233 13.1841C6.53903 13.3508 6.76512 13.4444 7.00087 13.4444C7.23662 13.4444 7.46271 13.3508 7.62941 13.1841C7.79611 13.0174 7.88976 12.7913 7.88976 12.5556C7.88976 12.3198 7.79611 12.0937 7.62941 11.927C7.46271 11.7603 7.23662 11.6667 7.00087 11.6667C6.76512 11.6667 6.53903 11.7603 6.37233 11.927C6.20563 12.0937 6.11198 12.3198 6.11198 12.5556Z" 
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <p>Password</p>
  </span>
</NavLink>

</div>

           </div>
        </div>

            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default InfoPass;