import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full px-6 ">
      <div className="flex justify-center space-x-40">
        <button className="px-6 py-2 bg-white text-black cursor-pointer font-medium rounded-t-lg shadow-md hover:bg-gray-200 focus:outline-none border-t border-l border-r border-gray-300">
          <div className="flex items-center">
            <span className="material-icons mr-2">sort</span>
            Trier
          </div>
        </button>

        <button className="px-6 py-2 bg-white text-black cursor-pointer font-medium rounded-t-lg shadow-md hover:bg-gray-200 focus:outline-none border-t border-l border-r border-gray-300">
          <div className="flex items-center">
            <span className="material-icons mr-2">filter_list</span>
            Filtrer
          </div>
        </button>
      </div>
    </footer>
  );
}