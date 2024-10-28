import React, { useState } from 'react';

function SearchMenu() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <ul>
      <input 
        className="flex relative rounded-lg my-4 px-6 items-center py-3 bg-[#FFFFFF99] gap-3" 
        type="text" 
      />
      {isVisible && (
        <div className="absolute inset-0 top-32 left-10 gap-3 " onClick={handleClick}>
          <div className='flex items-center gap-3'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M17 17.0156L13.1396 13.1515M13.1396 13.1515C13.7999 12.4905 14.3237 11.7058 14.6811 10.8422C15.0385 9.97855 15.2224 9.05293 15.2224 8.11816C15.2224 7.18339 15.0385 6.25778 14.6811 5.39416C14.3237 4.53055 13.7999 3.74584 13.1396 3.08486C12.4793 2.42388 11.6953 1.89956 10.8326 1.54184C9.96978 1.18412 9.04507 1 8.11121 1C7.17735 1 6.25264 1.18412 5.38987 1.54184C4.5271 1.89956 3.74316 2.42388 3.08283 3.08486C1.74921 4.41978 1 6.23031 1 8.11816C1 10.006 1.74921 11.8166 3.08283 13.1515C4.41644 14.4864 6.2252 15.2363 8.11121 15.2363C9.99722 15.2363 11.806 14.4864 13.1396 13.1515Z" 
              stroke="#010101" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <li>Search Menu....</li>
          </div>
        </div>
      )}
    </ul>
  );
}

export default SearchMenu;
