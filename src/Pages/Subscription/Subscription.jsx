import { Table2 } from '../../Components/Table2';

const Subscription = () => {
    return (
        <div className=' h-auto'>
        <div className="flex justify-start mx-6 gap-4 items-center">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.3587 18.9193L27.5625 15.321V5.0111C27.5589 4.7948 27.4934 4.5841 27.3737 4.4041C27.254 4.2241 27.0852 4.08241 26.8875 3.99591L18.45 0.104312C18.3019 0.0355937 18.1407 0 17.9775 0C17.8143 0 17.6531 0.0355937 17.505 0.104312L9.0675 3.99591C8.87222 4.08652 8.70695 4.23138 8.5913 4.41332C8.47565 4.59526 8.41446 4.80663 8.415 5.02238V15.3323L0.652503 18.9193C0.457226 19.0099 0.291962 19.1548 0.17631 19.3367C0.0606587 19.5187 -0.000529002 19.73 3.44558e-06 19.9458V30.9776C-0.000529002 31.1934 0.0606587 31.4047 0.17631 31.5867C0.291962 31.7686 0.457226 31.9135 0.652503 32.0041L9.09 35.8957C9.23809 35.9644 9.39931 36 9.5625 36C9.72568 36 9.8869 35.9644 10.035 35.8957L18 32.2184L25.965 35.8957C26.1131 35.9644 26.2743 36 26.4375 36C26.6007 36 26.7619 35.9644 26.91 35.8957L35.3475 32.0041C35.5428 31.9135 35.708 31.7686 35.8237 31.5867C35.9393 31.4047 36.0005 31.1934 36 30.9776V19.9458C36.0015 19.7313 35.942 19.5208 35.8284 19.3389C35.7148 19.1571 35.5519 19.0116 35.3587 18.9193ZM26.4487 22.574L20.7 19.9458L26.4487 17.295L32.1975 19.9458L26.4487 22.574ZM25.3237 15.3097L18.0787 18.6937V10.0194C18.2143 10.0134 18.3477 9.98283 18.4725 9.92917L25.3125 6.78206V15.3323L25.3237 15.3097ZM18 2.36031L23.7487 5.0111L18 7.6619L12.2625 5.0111L18 2.36031ZM9.5625 17.2837L15.3112 19.9345L9.5625 22.574L3.81375 19.9458L9.5625 17.2837ZM16.875 30.2444L9.5625 33.6284V24.9541C9.7195 24.9447 9.8728 24.9025 10.0125 24.83L16.8525 21.6716L16.875 30.2444ZM33.75 30.2444L26.4825 33.6284V24.9541C26.6241 24.9388 26.7615 24.8967 26.8875 24.83L33.7275 21.6716L33.75 30.2444Z" fill="white"/>
</svg>
<p className="text-xl text-white">Subscriptions</p>
        </div>
        <div className="lg:h-80 h-auto my-4 rounded-lg w-full lg:w-[950px] mx-auto bg-[#424756] border border-[#8B909F]">
          <div className="flex lg:flex-row flex-col justify-between m-4">
            <p className="text-lg text-white">Payment Information</p>
            <div className="flex justify-start gap-2 lg:flex-row flex-col lg:justify-end m-4">
           
           <div className="flex items-center">
               <input className="h-14 bg-transparent rounded-lg border w-60" type="text" placeholder="  Ex: type by name" />
                <div className="bg-[#D0FD3E] rounded-r-lg h-14 -ml-6 flex items-center justify-center w-12">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17.0156L13.1396 13.1515M13.1396 13.1515C13.7999 12.4905 14.3237 11.7058 14.6811 10.8422C15.0385 9.97855 15.2224 9.05293 15.2224 8.11816C15.2224 7.18339 15.0385 6.25778 14.6811 5.39416C14.3237 4.53055 13.7999 3.74584 13.1396 3.08486C12.4793 2.42388 11.6953 1.89956 10.8326 1.54184C9.96978 1.18412 9.04507 1 8.11121 1C7.17735 1 6.25264 1.18412 5.38987 1.54184C4.5271 1.89956 3.74316 2.42388 3.08283 3.08486C1.74921 4.41978 1 6.23031 1 8.11816C1 10.006 1.74921 11.8166 3.08283 13.1515C4.41644 14.4864 6.2252 15.2363 8.11121 15.2363C9.99722 15.2363 11.806 14.4864 13.1396 13.1515Z" stroke="#010101" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
                </div>
                <div className="h-14 ml-4 rounded-lg flex items-center justify-center gap-2 px-1 w-28 border border-[#D0FD3E]">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.59 6.21876H10V1.21387C10 0.66333 9.55 0.212891 9 0.212891H5C4.45 0.212891 4 0.66333 4 1.21387V6.21876H2.41C1.52 6.21876 1.07 7.29981 1.7 7.93043L6.29 12.5249C6.68 12.9153 7.31 12.9153 7.7 12.5249L12.29 7.93043C12.92 7.29981 12.48 6.21876 11.59 6.21876ZM0 16.2285C0 16.7791 0.45 17.2295 1 17.2295H13C13.55 17.2295 14 16.7791 14 16.2285C14 15.678 13.55 15.2276 13 15.2276H1C0.45 15.2276 0 15.678 0 16.2285Z" fill="#D0FD3E"/>
</svg>
<p className="text-lg text-[#D0FD3E]">Export</p>
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.21873L6 6.22852L11 1.21874" stroke="#D0FD3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
           </div>
          </div>
{/* table */}

<div className='overflow-x-auto'>
<Table2></Table2>
</div>


        </div>
    </div>
    );
};

export default Subscription;