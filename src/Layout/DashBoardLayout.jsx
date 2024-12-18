import React from 'react';
import DashboardNav from '../Shared/DashboardNav/DashboardNav';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/Images/logologin.png'
import Modal3 from '../Components/Modal3';

const DashBoardLayout = () => {
    return (
        <div className='max-w-7xl mx-auto overflow-hidden'>
            <DashboardNav></DashboardNav>
           <div className='flex'>
           <div className='w-72 p-6 lg:block hidden bg-[#D0FD3E] min-h-screen'>
           <div className="relative w-20">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search menu..." className="w-52 py-2 pl-10 text-sm  focus:outline-none  bg-[#FFFFFF99] border rounded-lg" />
			</div>
                 <div className='border-b-2 '></div>

                {/* dashboard */}
                 <NavLink to='menu' className={({ isActive }) => 
    `flex px-6 items-center py-3 rounded-lg gap-3 ${isActive ? 'bg-[#01010133]' : 'hover:bg-[#01010133]'}`
  }> 
                 <ul className='flex items-center gap-3'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888889 8.88889H6.22222C6.45797 8.88889 6.68406 8.79524 6.85076 8.62854C7.01746 8.46184 7.11111 8.23575 7.11111 8V0.888889C7.11111 0.653141 7.01746 0.427048 6.85076 0.260349C6.68406 0.0936505 6.45797 0 6.22222 0H0.888889C0.653141 0 0.427048 0.0936505 0.260349 0.260349C0.0936505 0.427048 0 0.653141 0 0.888889V8C0 8.23575 0.0936505 8.46184 0.260349 8.62854C0.427048 8.79524 0.653141 8.88889 0.888889 8.88889ZM0 15.1111C0 15.3469 0.0936505 15.573 0.260349 15.7397C0.427048 15.9064 0.653141 16 0.888889 16H6.22222C6.45797 16 6.68406 15.9064 6.85076 15.7397C7.01746 15.573 7.11111 15.3469 7.11111 15.1111V11.5556C7.11111 11.3198 7.01746 11.0937 6.85076 10.927C6.68406 10.7603 6.45797 10.6667 6.22222 10.6667H0.888889C0.653141 10.6667 0.427048 10.7603 0.260349 10.927C0.0936505 11.0937 0 11.3198 0 11.5556V15.1111ZM8.88889 15.1111C8.88889 15.3469 8.98254 15.573 9.14924 15.7397C9.31594 15.9064 9.54203 16 9.77778 16H15.1111C15.3469 16 15.573 15.9064 15.7397 15.7397C15.9064 15.573 16 15.3469 16 15.1111V8.88889C16 8.65314 15.9064 8.42705 15.7397 8.26035C15.573 8.09365 15.3469 8 15.1111 8H9.77778C9.54203 8 9.31594 8.09365 9.14924 8.26035C8.98254 8.42705 8.88889 8.65314 8.88889 8.88889V15.1111ZM9.77778 6.22222H15.1111C15.3469 6.22222 15.573 6.12857 15.7397 5.96187C15.9064 5.79517 16 5.56908 16 5.33333V0.888889C16 0.653141 15.9064 0.427048 15.7397 0.260349C15.573 0.0936505 15.3469 0 15.1111 0H9.77778C9.54203 0 9.31594 0.0936505 9.14924 0.260349C8.98254 0.427048 8.88889 0.653141 8.88889 0.888889V5.33333C8.88889 5.56908 8.98254 5.79517 9.14924 5.96187C9.31594 6.12857 9.54203 6.22222 9.77778 6.22222Z" fill="#010101"/>
</svg>

                    <li>Dashboard</li>
                  </ul></NavLink>
                  {/* users */}
                 <NavLink className={({ isActive }) => 
    `flex px-6 items-center py-3 rounded-lg gap-3 ${isActive ? 'bg-[#01010133]' : 'hover:bg-[#01010133]'}`
  }  to='users'> <ul className='flex items-center gap-3'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16V0L1.33333 1.2L2.66667 0L4 1.2L5.33333 0L6.66667 1.2L8 0L9.33333 1.2L10.6667 0L12 1.2L13.3333 0L14.6667 1.2L16 0V16L14.6667 14.8L13.3333 16L12 14.8L10.6667 16L9.33333 14.8L8 16L6.66667 14.8L5.33333 16L4 14.8L2.66667 16L1.33333 14.8L0 16ZM2.66667 12H13.3333V10.4H2.66667V12ZM2.66667 8.8H13.3333V7.2H2.66667V8.8ZM2.66667 5.6H13.3333V4H2.66667V5.6Z" fill="#010101"/>
</svg>


                    <li>Users</li>
                  </ul></NavLink >
                  {/* subcriptions */}
                 <NavLink to='subscription' className={({ isActive }) => 
    `flex px-6 items-center py-3 rounded-lg gap-3 ${isActive ? 'bg-[#01010133]' : 'hover:bg-[#01010133]'}`
  } > <ul className='flex gap-3 items-center'>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12H8.5V0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12ZM2 0H7.5V12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM10.5 2C10.3674 2 10.2402 2.05268 10.1464 2.14645C10.0527 2.24021 10 2.36739 10 2.5C10 2.63261 10.0527 2.75979 10.1464 2.85355C10.2402 2.94732 10.3674 3 10.5 3H14C14.1326 3 14.2598 2.94732 14.3536 2.85355C14.4473 2.75979 14.5 2.63261 14.5 2.5C14.5 2.36739 14.4473 2.24021 14.3536 2.14645C14.2598 2.05268 14.1326 2 14 2H10.5Z" fill="#010101"/>
</svg>


                    <li>Subcriptions</li>
                  </ul></NavLink>
                  {/* videos */}
                  <NavLink 
  to="videos" 
  className={({ isActive }) => 
    `flex px-6 items-center py-3 rounded-lg gap-3 ${isActive ? 'bg-[#01010133]' : 'hover:bg-[#01010133]'}`
  }
> 
  <ul className='flex items-center gap-3'>
  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2 1.59961H1.8C1.35817 1.59961 1 1.95778 1 2.39961V15.1996C1 15.6414 1.35817 15.9996 1.8 15.9996H12.2C12.6418 15.9996 13 15.6414 13 15.1996V2.39961C13 1.95778 12.6418 1.59961 12.2 1.59961Z" fill="#010101" stroke="#010101" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

    <li>Videos</li>
  </ul>
</NavLink>
                  <NavLink 
  to="workouts" 
  className={({ isActive }) => 
    `flex px-6 items-center py-3 rounded-lg gap-3 ${isActive ? 'bg-[#01010133]' : 'hover:bg-[#01010133]'}`
  }
> 
  <ul className='flex items-center gap-3'>
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2 2.59961H1.8C1.35817 2.59961 1 2.95778 1 3.39961V16.1996C1 16.6414 1.35817 16.9996 1.8 16.9996H12.2C12.6418 16.9996 13 16.6414 13 16.1996V3.39961C13 2.95778 12.6418 2.59961 12.2 2.59961Z" fill="#010101" stroke="#010101" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4.59688 1V3.4V1ZM9.39687 1V3.4V1ZM3.79688 7H10.1969H3.79688ZM3.79688 10.2H8.59688H3.79688ZM3.79688 13.4H6.99688H3.79688Z" fill="#010101"/>
      <path d="M4.59688 1V3.4M9.39687 1V3.4M3.79688 7H10.1969M3.79688 10.2H8.59688M3.79688 13.4H6.99688" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <li>Workouts</li>
  </ul>
</NavLink>

<div className='h-96 flex items-end justify-center '>
<div className='bg-[#1A1D26] rounded-md gap-3 px-6 py-3 flex justify-center items-center'>
<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.67604 0.51999C2.38042 0.519698 2.08961 0.594724 1.83104 0.73799C1.56586 0.873152 1.34247 1.07793 1.1848 1.33037C1.02714 1.58281 0.941142 1.8734 0.936035 2.17099V12.848C0.941142 13.1456 1.02714 13.4362 1.1848 13.6886C1.34247 13.9411 1.56586 14.1458 1.83104 14.281C2.0943 14.4272 2.39101 14.5026 2.69215 14.4998C2.99329 14.497 3.28854 14.4161 3.54904 14.265L12.179 8.92699C12.4454 8.79278 12.6692 8.58723 12.8255 8.33327C12.9819 8.07931 13.0646 7.78691 13.0645 7.48868C13.0644 7.19045 12.9814 6.89812 12.8249 6.64426C12.6684 6.39041 12.4445 6.18502 12.178 6.05099L3.54804 0.75299C3.28292 0.599974 2.98214 0.519604 2.67604 0.51999Z" fill="#D0FD3E"/>
</svg>
<Modal3></Modal3>
</div>
</div>
<img className='' src={logo} alt="" />
<p className='text-center text-[#1A1D26] font-medium'>© 2023 Andrews | All rights reserved</p>
            </div>
            <div className='w-full bg-[#1A1D26]'>
                  <Outlet></Outlet>
            </div>
           </div>
            
        </div>
    );
};

export default DashBoardLayout;