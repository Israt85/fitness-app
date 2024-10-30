import { Link } from 'phosphor-react';
import john from '../../assets/Images/john.jpeg'
import Dropdown from '../../Components/Dropdown/Dropdown';
import MobileDashNav from '../MobileDashNav/MobileDashNav';
import MobileTopbar from '../MobileDashNav/MobileTopbar';

const DashboardNav = () => {
    return (
      <div>
         <div className='lg:hidden block'>
         <MobileTopbar></MobileTopbar>
         </div>
          <div className='lg:block hidden '>

<div className='w-full  h-20 py-6 justify-between text-white flex flex-row bg-[#1A1D26]'>
   <div className='text-[#D0FD3E] mx-10 text-2xl'>
   ANDREW’S
   </div>
   <MobileDashNav></MobileDashNav>
   <div>
   <div className="relative w-80">
   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
         <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
         </svg>
      </button>
   </span>
   <input type="search" name="Search" placeholder="Search..." className="w-80 py-2 pl-10 text-sm  focus:outline-none bg-transparent border rounded-full" />
</div>
   </div>
   <div className='flex justify-between w-60'>
     {/* notification */}
     <div className='w-10 h-10 flex justify-center items-center border-[#D0FD3E] rounded-full  border'>
     <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7957 10.4257C17.2753 9.76973 16.5018 7.91363 16.5018 5.48938C16.5018 4.03351 15.7115 2.63726 14.3047 1.6078C12.8979 0.578344 10.9899 0 9.00047 0C7.011 0 5.10302 0.578344 3.69625 1.6078C2.28949 2.63726 1.49917 4.03351 1.49917 5.48938C1.49917 7.91432 0.724663 9.76973 0.204261 10.4257C0.0713668 10.5925 0.000914497 10.7819 8.84306e-06 10.975C-0.000896811 11.168 0.0677764 11.3579 0.199103 11.5253C0.330429 11.6927 0.519765 11.8319 0.748016 11.9287C0.976267 12.0255 1.23536 12.0765 1.49917 12.0766H5.32577C5.49884 12.6964 5.95909 13.2533 6.62868 13.6533C7.29828 14.0533 8.13611 14.2718 9.00047 14.2718C9.86483 14.2718 10.7027 14.0533 11.3723 13.6533C12.0418 13.2533 12.5021 12.6964 12.6752 12.0766H16.5018C16.7655 12.0764 17.0245 12.0252 17.2526 11.9284C17.4807 11.8316 17.6699 11.6924 17.8011 11.525C17.9323 11.3576 18.0009 11.1678 18 10.9748C17.999 10.7818 17.9286 10.5924 17.7957 10.4257ZM9.00047 13.1745C8.53522 13.1744 8.08145 13.0688 7.70162 12.8722C7.32178 12.6756 7.03456 12.3976 6.87948 12.0766H11.1215C10.9664 12.3976 10.6792 12.6756 10.2993 12.8722C9.91949 13.0688 9.46572 13.1744 9.00047 13.1745ZM1.49917 10.9788C2.22117 10.0703 2.99943 7.96509 2.99943 5.48938C2.99943 4.32468 3.63168 3.20769 4.75709 2.38412C5.88251 1.56055 7.40889 1.09788 9.00047 1.09788C10.592 1.09788 12.1184 1.56055 13.2438 2.38412C14.3693 3.20769 15.0015 4.32468 15.0015 5.48938C15.0015 7.96304 15.7779 10.0682 16.5018 10.9788H1.49917Z" fill="#D0FD3E"/>
</svg>

     </div>
     {/* cart */}
     <div className='w-10 mx-4 h-10 flex justify-center items-center border-[#D0FD3E] rounded-full  border'>
     <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 11.4174C14.8774 11.4174 15.3352 11.5678 15.6728 11.8354C16.0104 12.1031 16.2 12.4661 16.2 12.8446C16.2 13.2231 16.0104 13.5861 15.6728 13.8538C15.3352 14.1214 14.8774 14.2718 14.4 14.2718C13.9226 14.2718 13.4648 14.1214 13.1272 13.8538C12.7896 13.5861 12.6 13.2231 12.6 12.8446C12.6 12.0525 13.401 11.4174 14.4 11.4174ZM0 0H2.943L3.789 1.42718H17.1C17.3387 1.42718 17.5676 1.50236 17.7364 1.63618C17.9052 1.77001 18 1.95151 18 2.14077C18 2.26208 17.955 2.38339 17.892 2.49756L14.67 7.11448C14.364 7.54977 13.77 7.84948 13.095 7.84948H6.39L5.58 9.01263L5.553 9.09826C5.553 9.14557 5.5767 9.19095 5.6189 9.2244C5.6611 9.25786 5.71833 9.27666 5.778 9.27666H16.2V10.7038H5.4C4.92261 10.7038 4.46477 10.5535 4.12721 10.2858C3.78964 10.0182 3.6 9.65517 3.6 9.27666C3.6 9.0269 3.681 8.79141 3.816 8.59161L5.04 6.84332L1.8 1.42718H0V0ZM5.4 11.4174C5.87739 11.4174 6.33523 11.5678 6.67279 11.8354C7.01036 12.1031 7.2 12.4661 7.2 12.8446C7.2 13.2231 7.01036 13.5861 6.67279 13.8538C6.33523 14.1214 5.87739 14.2718 5.4 14.2718C4.92261 14.2718 4.46477 14.1214 4.12721 13.8538C3.78964 13.5861 3.6 13.2231 3.6 12.8446C3.6 12.0525 4.401 11.4174 5.4 11.4174ZM13.5 6.4223L16.002 2.85436H4.626L6.75 6.4223H13.5Z" fill="#D0FD3E"/>
</svg>


     </div>
     {/* Transators */}
     <Dropdown></Dropdown>
   </div>
  <div className='border-l-2 mx-6 h-12'>
  <div className='flex gap-2  justify-center items-center w-52'>
       <div>
       <img className='w-12 h-12 rounded-full' src={john} alt="" />
       </div>
       <div>
       <a href="profile"><ul><li className='text-xl'>Jhon Doe</li></ul></a>
              <p className='text-gray-400' >admin@admin.com</p>
       </div>
   </div>
  </div>
</div>
</div>
      </div>
    );
};

export default DashboardNav;