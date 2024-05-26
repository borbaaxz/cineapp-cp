import React from 'react';
import { useParams } from 'react-router-dom';

const Input = (props) => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative flex justify-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          id="search"
          className="block w-full max-w-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-700 rounded-full text-gray-900 dark:text-gray-200 placeholder:text-gray-500 placeholder:font-bold placeholder:text-xs placeholder:uppercase focus:ring-2 focus:ring-brand-200 focus:border-transparent dark:focus:ring-brand-100 outline-none transition duration-200"
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
