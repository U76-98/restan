"use client";

import React, { useState } from "react";import Image from "next/image";

export default function OptionsButton() {
  const [navButton, setNavButton] = useState(false);

  return (
    <div className="w-full h-fit bg-amber-300 flex flex-col">
      {/* This div is for the nav bar and nav button */}
      <div tag="NavBar" className="w-full bg-red-500">
        {/* Nav button */}
        <button 
        className="fixed bottom-4 left-4 p-10">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
          alt="Logo"
          className="h-auto w-35"></img>
        </button>
        {/* Nav Bar */}
        <div>
          {navButton &&
            <div className="h-auto w-full bg-amber-800 flex flex-row">
              <button>
                
              </button>
            </div>
          }
        </div>
      </div>
    </div>  
  );
}
