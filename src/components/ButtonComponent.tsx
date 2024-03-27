'use client'
import React from "react";
import { useState } from "react";

const ButtonComponent: React.FC = () => {
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="bg-inherit hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-4 py-1 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-4">
        {showButtons ? '...' : '...'}
      </button>
      {showButtons && (
        <div className="h-20 w-20 fixed bottom-0 right-0 z-30 flex place-items-center duration-300 mx-20 my-56 flex flex-col">
            <a href="/edit">
            <button className="bg-inherit hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-7 py-3 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-2">
                update
            </button>
            </a>
            <a href="/delete">
            <button className="bg-inherit hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-7 py-3 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-2">
                delete
            </button>
            </a>
            <a href="/booking/manage">
            <button className="bg-inherit hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-7 py-3 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-2">
                manage
            </button>
            </a>
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;
