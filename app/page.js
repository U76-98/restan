"use client";

import React, { useState } from "react";import Image from "next/image";

export default function OptionsButton() {
  const [navButton, setNavButton] = useState(false);

  return (
    <button 
    className="bg-red-400"
    onClick={() => setNavButton(!navButton)}>
      {navButton ? "Close" : "Options"}
    </button>
  );
}
