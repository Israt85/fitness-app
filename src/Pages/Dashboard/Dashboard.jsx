import profile from '../../assets/Images/profileimg.jpeg'
import Example from '../../Components/ColumnChart';
import Example1 from '../../Components/PieChart';
import img1 from '../../assets/Images/verification.png'

const Dashboard = () => {
    return (
       <div>
         <div className=" min-h-screen">
           <div className="flex md:flex-row flex-wrap justify-between items-center">
           <div className="flex p-6 gap-4">
            <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.98838 20.701C8.66965 20.6555 8.41466 20.61 8.09592 20.519C7.77718 20.428 7.52219 20.3825 7.2672 20.2916C6.69348 20.1096 6.1835 19.8822 5.67352 19.6092C4.65356 19.1088 3.82484 18.4265 3.18737 17.6077C2.5499 16.8344 2.16741 15.9246 2.10366 15.0603C2.03992 14.6054 2.10366 14.196 2.16741 13.7411C2.23116 13.5136 2.29491 13.3317 2.35865 13.1042C2.4224 12.8768 2.5499 12.6948 2.61364 12.4674L2.67739 13.1042C2.67739 13.3317 2.74114 13.5136 2.80489 13.7411C2.86863 14.1505 2.99613 14.5599 3.12362 14.9238C3.37861 15.6971 3.7611 16.425 4.33482 17.1073C4.90855 17.7896 5.54602 18.4265 6.37474 19.0179C6.75723 19.2908 7.20346 19.5637 7.64969 19.8367C7.84093 19.9731 8.09592 20.1096 8.35091 20.2461L8.98838 20.701ZM8.79714 22.3386C8.6059 22.4296 8.35091 22.4751 8.09592 22.5205C7.84093 22.566 7.64969 22.6115 7.3947 22.6115C6.94847 22.657 6.43849 22.7025 5.92851 22.657C4.9723 22.6115 3.95234 22.4296 3.12362 22.1111C2.23116 21.7927 1.46619 21.2923 0.956211 20.701C0.701221 20.428 0.446232 20.1096 0.25499 19.7912C0.191242 19.6547 0.127495 19.4728 0.0637473 19.2908C0.0637473 19.1543 0 19.0179 0 18.8359C0.191242 18.9724 0.318737 19.1088 0.446232 19.1998C0.637474 19.3363 0.764969 19.4728 0.892464 19.5637C1.2112 19.7912 1.46619 20.0186 1.78493 20.2006C2.4224 20.61 3.05988 20.9739 3.82484 21.2468C4.52607 21.5198 5.35478 21.7472 6.11975 21.9292C6.50224 22.0202 6.94847 22.0657 7.3947 22.1566C7.58594 22.2021 7.84093 22.2021 8.03217 22.2476C8.35091 22.2931 8.54215 22.2931 8.79714 22.3386ZM23.2041 0.230725C23.5228 0.276214 23.7778 0.367193 24.0965 0.458172C24.4153 0.549151 24.6702 0.64013 24.9252 0.731109C25.499 0.958556 26.0089 1.186 26.5189 1.45894C27.5389 2.00481 28.3676 2.73264 28.9413 3.55145C29.5151 4.37026 29.8338 5.28005 29.8338 6.14435C29.8338 6.59925 29.77 7.00865 29.6425 7.46354C29.5788 7.69099 29.515 7.87295 29.3876 8.1004C29.2601 8.32784 29.1963 8.5098 29.0688 8.69176L29.0051 8.05491C29.0051 7.82746 29.0051 7.6455 28.9413 7.41806L28.7501 6.18984C28.5588 5.41652 28.1764 4.6432 27.6664 3.91537C27.1564 3.18754 26.5189 2.55069 25.754 1.95932C25.3715 1.6409 24.9252 1.36796 24.5428 1.04953C24.3515 0.913067 24.0965 0.776598 23.8415 0.64013L23.2041 0.230725ZM28.7501 0.0487671C29.0051 0.0942565 29.1963 0.139746 29.3876 0.230725C29.5788 0.276214 29.8338 0.367193 30.025 0.458172C30.4075 0.64013 30.79 0.822088 31.1725 1.04953C31.8737 1.50443 32.4474 2.0503 32.7662 2.68715C33.1487 3.32401 33.2761 4.00635 33.1487 4.68869C33.0849 5.00712 32.9574 5.32554 32.8299 5.64397C32.7662 5.78044 32.6387 5.96239 32.5749 6.09886C32.4474 6.23533 32.3837 6.3718 32.1924 6.50827V5.59848C32.1924 5.28005 32.1287 5.00712 32.1287 4.73418C32.0012 4.14282 31.8737 3.59694 31.555 3.09656C31.2362 2.55069 30.8537 2.09579 30.4075 1.59541C30.1525 1.36796 29.8975 1.09502 29.6425 0.867577C29.515 0.731109 29.3876 0.64013 29.1963 0.503661C29.0688 0.276214 28.8776 0.139746 28.7501 0.0487671Z" fill="#42ADE2"/>
<path d="M5.10096 6.82737C3.82601 7.23678 3.37978 8.32852 3.9535 9.23831L11.9857 21.202L16.448 19.7009L8.41582 7.69167C7.8421 6.78188 6.37591 6.37248 5.10096 6.82737ZM26.2013 16.3347L30.9187 14.7425L21.739 1.0957C21.1016 0.185914 19.5716 -0.223491 18.2329 0.231403C16.958 0.686298 16.3842 1.77804 17.0217 2.73332L26.2013 16.3347Z" fill="#FFDD67"/>
<path d="M18.2926 0.185835C18.1651 0.231324 18.0377 0.276814 17.9102 0.367792C19.1214 0.140345 20.3963 0.54975 20.97 1.36856L30.1497 15.0154L30.9784 14.7425L21.7987 1.09562C21.1613 0.140345 19.6313 -0.26906 18.2926 0.185835Z" fill="#EBA352"/>
<path d="M16.4438 19.6556L21.3523 17.9725L11.9815 4.05273C11.344 3.09745 9.68657 2.64256 8.34787 3.09745C7.00918 3.55235 6.43545 4.73507 7.07292 5.69035L16.4438 19.6556Z" fill="#FFDD67"/>
<path d="M8.35123 3.14237C8.22374 3.18785 8.09624 3.23334 7.96875 3.32432C9.17995 3.09688 10.5824 3.50628 11.1561 4.37058L16.9571 13.0591L18.3596 13.6504L11.9848 4.09764C11.3474 3.09688 9.75368 2.68747 8.35123 3.14237Z" fill="#EBA352"/>
<path d="M20.5883 16.88L25.4969 15.1969L16.126 1.2771C15.4885 0.321821 13.8311 -0.133074 12.4924 0.36731C11.1537 0.822204 10.58 2.00493 11.2175 2.96021L20.5883 16.88Z" fill="#FFDD67"/>
<path d="M12.4959 0.322846C12.3684 0.368336 12.2409 0.459314 12.1134 0.504804C13.3246 0.277357 14.7271 0.686762 15.3008 1.55106L21.8668 11.3768L23.2692 11.9681L16.1295 1.27812C15.4921 0.277357 13.8346 -0.132048 12.4959 0.322846ZM5.10123 6.82784C4.97374 6.87333 4.84624 6.91881 4.71875 7.00979C5.8662 6.78235 7.0774 7.19175 7.58738 8.01056L12.3684 15.1524L13.7709 15.7438L8.4161 7.73762C7.84237 6.78235 6.37618 6.37294 5.10123 6.82784Z" fill="#EBA352"/>
<path d="M37.4819 5.46227C35.7607 4.50699 32.9558 5.55325 31.5533 8.82849C30.5971 11.103 30.4696 11.7853 28.4297 12.4676L27.2823 10.7845C27.2823 10.7845 9.17801 17.0166 9.87923 18.0174C9.87923 18.0174 12.0466 22.8392 15.744 25.0682C21.2263 28.4344 34.0395 24.8408 34.6132 16.1523C34.932 11.103 39.3305 6.50853 37.4819 5.46227Z" fill="#FFDD67"/>
<path d="M37.4854 5.46268C37.1667 5.28072 36.7842 5.18975 36.4017 5.14426C36.4655 5.18975 36.593 5.18975 36.6567 5.23524C38.5691 6.28149 36.593 8.69243 35.5093 10.8759C34.6168 12.6045 33.8518 14.3786 33.9793 16.1072C34.4893 23.6585 23.8435 27.2521 17.4688 25.8874C23.716 27.7525 35.318 24.2043 34.808 16.3347C34.6805 14.6061 35.3818 12.9229 36.338 11.1034C37.3579 8.91988 39.3341 6.50894 37.4854 5.46268Z" fill="#EBA352"/>
<path d="M29.0072 12.2871C25.0548 12.6055 19.2538 16.6541 23.3336 21.0666C20.3375 16.6086 25.2461 13.6063 28.3697 12.56C28.6884 12.3781 29.0072 12.2871 29.0072 12.2871Z" fill="#EBA352"/>
</svg>
<div>
    <p className="text-white text-2xl font-semibold">WELCOME <span className="text-[#D0FD3E]">JHON</span></p>
    <p className="text-gray-400">Hello, here you can manage your business by zone</p>
</div>

            </div>
            <div className="w-52 h-12 mx-10 rounded-full border">
               <div className="flex items-center justify-around my-2">
                <p className="text-white">All Zones</p>
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.14564L5 4L9 1.14565" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

               </div>
            </div>
           </div>
          <div className=" w-full flex md:flex-row flex-wrap gap-4 justify-center">
          <div className="w-96">
            <div className="flex ml-5 items-center justify-between rounded-lg px-6 py-4 bg-[#C5F137]">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#01010126]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.7551 0C2.29592 0 1.92857 0.189474 1.65306 0.568421L0.459184 2.08421C0.183673 2.46316 0 2.84211 0 3.31579V15.1579C0 16.2 0.826531 17.0526 1.83673 17.0526H9.45918C9.27551 16.4842 9.18367 15.8211 9.18367 15.1579C9.18367 12.0316 11.6633 9.47368 14.6939 9.47368C15.3367 9.47368 15.9796 9.56842 16.5306 9.7579V3.31579C16.5306 2.84211 16.3469 2.46316 16.0714 2.08421L14.7857 0.473684C14.602 0.189474 14.2347 0 13.7755 0H2.7551ZM2.66327 0.947368H13.6837L14.5102 1.89474H1.92857L2.66327 0.947368ZM2.7551 11.3684H8.26531V14.2105H2.7551V11.3684ZM16.8061 12.1263L13.5 15.5368L12.0306 14.0211L11.0204 15.1579L13.5918 18L18 13.4526L16.8061 12.1263Z" fill="#010101"/>
</svg>

                </div>
                <p className="text-xl text-left  font-semibold">Basic Gym Plan</p>
                <p className="text-xl font-semibold">24</p>
            </div>
            <div className="flex ml-5 items-center justify-between rounded-lg my-4 px-6 py-4 bg-[#FED784CC]">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#01010126]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.7551 0C2.29592 0 1.92857 0.189474 1.65306 0.568421L0.459184 2.08421C0.183673 2.46316 0 2.84211 0 3.31579V15.1579C0 16.2 0.826531 17.0526 1.83673 17.0526H9.45918C9.27551 16.4842 9.18367 15.8211 9.18367 15.1579C9.18367 12.0316 11.6633 9.47368 14.6939 9.47368C15.3367 9.47368 15.9796 9.56842 16.5306 9.7579V3.31579C16.5306 2.84211 16.3469 2.46316 16.0714 2.08421L14.7857 0.473684C14.602 0.189474 14.2347 0 13.7755 0H2.7551ZM2.66327 0.947368H13.6837L14.5102 1.89474H1.92857L2.66327 0.947368ZM2.7551 11.3684H8.26531V14.2105H2.7551V11.3684ZM16.8061 12.1263L13.5 15.5368L12.0306 14.0211L11.0204 15.1579L13.5918 18L18 13.4526L16.8061 12.1263Z" fill="#010101"/>
</svg>

                </div>
                <p className="text-xl font-semibold">Standard Gym Plan</p>
                <p className="text-xl font-semibold">24</p>
            </div>
            <div className="flex ml-5 items-center justify-between rounded-lg px-6 py-4 bg-[#89C0FFCC]">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#01010126]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.7551 0C2.29592 0 1.92857 0.189474 1.65306 0.568421L0.459184 2.08421C0.183673 2.46316 0 2.84211 0 3.31579V15.1579C0 16.2 0.826531 17.0526 1.83673 17.0526H9.45918C9.27551 16.4842 9.18367 15.8211 9.18367 15.1579C9.18367 12.0316 11.6633 9.47368 14.6939 9.47368C15.3367 9.47368 15.9796 9.56842 16.5306 9.7579V3.31579C16.5306 2.84211 16.3469 2.46316 16.0714 2.08421L14.7857 0.473684C14.602 0.189474 14.2347 0 13.7755 0H2.7551ZM2.66327 0.947368H13.6837L14.5102 1.89474H1.92857L2.66327 0.947368ZM2.7551 11.3684H8.26531V14.2105H2.7551V11.3684ZM16.8061 12.1263L13.5 15.5368L12.0306 14.0211L11.0204 15.1579L13.5918 18L18 13.4526L16.8061 12.1263Z" fill="#010101"/>
</svg>

                </div>
                <p className="text-xl text-left font-semibold">Premium Gym Plan</p>
                <p className="text-xl font-semibold">24</p>
            </div>
           </div>
          <div className='h-64 w-72 border bg-[#424756] border-[#767E97] rounded-lg'>
          <div className=" text-gray-300 px-2 flex justify-between ">
              <div>
                <img className='w-24 pt-2 h-24 rounded-full' src={profile} alt="" />
                <p>11 Sep, 2024</p>
                <p className='text-2xl font-semibold text-[#D0FD3E]'>Selena John</p>
              </div>
              <div>
                <p className='w-full h-10 rounded-full flex justify-center items-center mt-4 bg-[#D0FD3E26] text-[#D0FD3E]'>New users</p>
                <p className='text-lg py-2'>Weight:  58 Kgs</p>
                <p className='text-lg'>Height: 176 cms</p>
              </div>
              
           </div>
          <div className='flex border-t-2 m-2 py-2 justify-around items-center'>
          <div className='text-white'>
            <p className='text-xl'>
              Female
            </p>
            <p>30 yrs old</p>
           </div>
           <p className='text-2xl text-[#FCCE6E] font-bold'>Basic Gym Plan</p>
          </div>
          
          </div>
           
          <div className='h-64 w-72 border bg-[#424756] border-[#767E97] rounded-lg'>
          <div className=" text-gray-300 px-2 flex justify-between ">
              <div>
                <img className='w-24 pt-2 h-24 rounded-full' src={profile} alt="" />
                <p>11 Sep, 2024</p>
                <p className='text-2xl font-semibold text-[#D0FD3E]'>Selena John</p>
              </div>
              <div>
                <p className='w-full h-10 rounded-full flex justify-center items-center mt-4 bg-[#D0FD3E26] text-[#D0FD3E]'>New users</p>
                <p className='text-lg py-2'>Weight:  58 Kgs</p>
                <p className='text-lg'>Height: 176 cms</p>
              </div>
              
           </div>
          <div className='flex border-t-2 m-2 py-2 justify-around items-center'>
          <div className='text-white'>
            <p className='text-xl'>
              Female
            </p>
            <p>30 yrs old</p>
           </div>
           <p className='text-2xl text-[#FCCE6E] font-bold'>Basic Gym Plan</p>
          </div>
          
          </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-wrap justify-center gap-2 items-center'>
          <div className='w-[555px] ml-2 my-4 bg-[#424756] h-[300px] '>
              <Example></Example>
          </div>
          <div className='w-[400px] h-[300px] bg-[#424756]'>
               <Example1></Example1>
          </div>
        </div>
        <div className='lg:w-[970px] items-center justify-center grid lg:grid-cols-6 grid-cols-3 mx-auto bg-[#424756] h-auto lg:h-[200px]'>
        <div className='w-40 rounded-md  h-48 '>
                <img className='h-32 mx-auto w-32 object-cover' src={img1} alt="" />
               <div className='flex justify-between'>
               <div className='text-white mx-2'>
                    <p className='text-sm text-center font-bold'>Arms Exercise</p>
                    <div className='flex gap-2'>
                    <div className="rating ml-2 my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400 w-2 h-2"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2 "  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
</div>
<p className='text-xs'>4.3 ratings</p>
                    </div>
                </div>
               </div>
            </div>
        <div className='w-40 rounded-md  h-48 '>
                <img className='h-32 w-32 object-cover mx-auto' src={img1} alt="" />
               <div className='flex justify-between'>
               <div className='text-white mx-2'>
                    <p className='text-sm font-bold'>Arms Exercise</p>
                    <div className='flex gap-2'>
                    <div className="rating my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400 w-2 h-2"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2 "  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
</div>
<p className='text-xs'>4.3 ratings</p>
                    </div>
                </div>
               </div>
            </div>
        <div className='w-40 rounded-md  h-48 '>
                <img className='h-32 w-32 object-cover mx-auto' src={img1} alt="" />
               <div className='flex justify-between'>
               <div className='text-white mx-2'>
                    <p className='text-sm font-bold'>Arms Exercise</p>
                    <div className='flex gap-2'>
                    <div className="rating my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400 w-2 h-2"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2 "  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
</div>
<p className='text-xs'>4.3 ratings</p>
                    </div>
                </div>
               </div>
            </div>
        <div className='w-40 rounded-md  h-48 '>
                <img className='h-32 mx-auto w-32 object-cover' src={img1} alt="" />
               <div className='flex justify-between'>
               <div className='text-white mx-2'>
                    <p className='text-sm text-center font-bold'>Arms Exercise</p>
                    <div className='flex gap-2'>
                    <div className="rating ml-2 my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400 w-2 h-2"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2 "  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
</div>
<p className='text-xs'>4.3 ratings</p>
                    </div>
                </div>
               </div>
            </div>
        <div className='w-40 rounded-md  h-48 '>
                <img className='h-32 w-32 object-cover mx-auto' src={img1} alt="" />
               <div className='flex justify-between'>
               <div className='text-white mx-2'>
                    <p className='text-sm font-bold'>Arms Exercise</p>
                    <div className='flex gap-2'>
                    <div className="rating my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400 w-2 h-2"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2 "  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
</div>
<p className='text-xs'>4.3 ratings</p>
                    </div>
                </div>
               </div>
            </div>
        <div className='w-40 rounded-md  h-48 '>
                <img className='h-32 w-32 object-cover mx-auto' src={img1} alt="" />
               <div className='flex justify-between'>
               <div className='text-white mx-2'>
                    <p className='text-sm font-bold'>Arms Exercise</p>
                    <div className='flex gap-2'>
                    <div className="rating my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400 w-2 h-2"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2 "  defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-2 h-2"  defaultChecked />
</div>
<p className='text-xs'>4.3 ratings</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
       </div>
    );
};

export default Dashboard;