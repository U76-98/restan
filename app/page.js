"use client";

import React, { useState } from "react";

export default function OptionsButton() {
  const [navButton, setNavButton] = useState(false);

  {/*card images*/}
  const secCardImg = "https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg";
  const fourCardImg = "https://images.pexels.com/photos/8007341/pexels-photo-8007341.jpeg";

  return (
    <div className="w-full h-fit flex flex-col bg-amber-50 ">

      {/* nav bar and nav button */}
      <div className="w-fit fixed bottom-4 left-4 flex flex-row items-center p-10">
        {/* Nav button */}
        <button onClick={() => setNavButton(!navButton)}>
          <img src="https://cdn-icons-png.flaticon.com/128/5915/5915356.png"
          alt="Logo"
          className="h-auto w-20 p-3 rounded-2xl bg-amber-100 border-2 border-black"></img>
        </button>
        {/* Nav Bar */}
        <div>
          {navButton &&
            <div className="h-auto w-full flex flex-row justify-center text-2xl font-bold p-5 bg-amber-100 text-black ml-5 rounded-2xl border-2 border-black">
              <button className="m-5">
                Menu
              </button>
              <button className="m-5">
                About
              </button>
              <button className="m-5">
                Contact
              </button>
            </div>
          }
        </div>
      </div>

      {/* first card */}
      <div className="w-full h-[100vh] flex justify-center items-center text-black">
        <img
        src="https://images.pexels.com/photos/1654760/pexels-photo-1654760.jpeg"
        className="absolute w-full h-[100vh] rounded-b-4xl"
        ></img>
        <div className="relative z-10 w-full h-[100vh] bg-black/50" >
          <div className="h-auto w-fit flex flex-row justify-center text-2xl font-bold text-white ml-5 absolute top-0 right-0 p-5 rounded-xl">
            <button className="m-5">
              Menu
            </button>
            <button className="m-5">
              About
            </button>
            <button className="m-5">
              Contact
            </button>
          </div>
          <div className="flex flex-col text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              className="w-100 h-fit"
            ></img>
            <h1 className="font-bold font-mono text-3xl">SINCE 1969</h1>
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="w-full h-[100vh] p-13">
        <div className="w-full h-full rounded-3xl flex bg-cover bg-center items-center"
        style={{backgroundImage: `url(${secCardImg})`}}>
          <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
          className="w-[40%] h-fit p-20"
          ></img>
          <div className="w-[60%] h-fit flex flex-col p-10">
            <h1 className="font-mono text-2xl font-bold">
              Todays Special Offer
            </h1>
            <h1 className="font-serif text-6xl font-bold">
              Explore Irresistible Promotions!
            </h1>
            <p className="mt-5 text-xl">Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.
            </p>
            <button className="w-fit h-fit p-6 bg-red-600 text-2xl font-bold rounded-4xl mt-5">
              Order Now!
            </button>
          </div>
        </div>
      </div>

      {/* third card */}
      <div className="w-full h-[100vh] p-20">
          <div className="w-full h-full flex text-black border-amber-600 border-2 rounded-4xl">

            <div className="w-1/3 h-full flex flex-col p-10 justify-center items-center">
              <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
              className="w-50 h-fit"
              ></img>
              <h1 className="font-bold text-4xl mt-10">
                Quality Foods
              </h1>
              <h2 className="mt-5 text-xl">
                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
              </h2>
            </div>

            <div className="w-1/3 h-full flex flex-col p-10 justify-center items-center">
              <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"
              className="w-50 h-fit"
              ></img>
              <h1 className="font-bold text-4xl mt-10">
                Fast Delivery
              </h1>
              <h2 className="mt-5 text-xl">
                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
              </h2>
            </div>

            <div className="w-1/3 h-full flex flex-col p-10 justify-center items-center">
              <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"
              className="w-50 h-fit"
              ></img>
              <h1 className="font-bold text-4xl mt-10">
                Delicious Recipes
              </h1>
              <h2 className="mt-5 text-xl">
                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
              </h2>
            </div>
          </div>
      </div>

      {/* forth card */}
      <div className="w-full h-[100vh] p-13">
        <div className="w-full h-full rounded-3xl flex bg-cover bg-center items-center"
        style={{backgroundImage: `url(${fourCardImg})`}}>
          <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
          className="w-[40%] h-fit p-20"
          ></img>
          <div className="w-[60%] h-fit flex flex-col p-10">
            <h1 className="font-serif text-6xl font-bold">
              Are you Ready to Start your online Order?
            </h1>
            <p className="mt-5 text-xl">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
            </p>
            <button className="w-fit h-fit p-6 bg-red-600 text-2xl font-bold rounded-4xl mt-5">
              Download Now!
            </button>
          </div>
        </div>
      </div>

      {/* fifth card */}
      <div className="w-full h-fit p-20">
          <div className="w-full h-full flex flex-col text-black justify-center items-center border-2 border-amber-900 rounded-4xl p-10">

            <h1 className="text-2xl font-mono font-bold text-amber-800">MASTER CHEFS</h1>
            <h1 className="text-5xl font-bold font-serif">Meet Our Special Chefs</h1>

            <div className="flex flex-row mt-10 w-full">
              <div className="w-1/3 h-fit flex flex-col p-10 items-center">
                <img
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
                className="w-60 h-80 rounded-4xl border-2 border-amber-800 p-5"
                ></img>
                <h1 className="font-bold text-4xl mt-10">
                  Alexander
                </h1>
                <h2 className="mt-5 text-xl">
                  Assistant Chef
                </h2>
              </div>

              <div className="w-1/3 h-full flex flex-col p-10 items-center">
                <img
                src="https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg"
                className="w-60 h-80 rounded-4xl border-2 border-amber-800 p-5"
                ></img>
                <h1 className="font-bold text-4xl mt-10">
                  Baby Boss
                </h1>
                <h2 className="mt-5 text-xl">
                  Boss's Baby
                </h2>
              </div>

              <div className="w-1/3 h-full flex flex-col p-10 items-center">
                <img
                src="https://images.pexels.com/photos/3338672/pexels-photo-3338672.jpeg"
                className="w-60 h-80 rounded-4xl border-2 border-amber-800 p-5"
                ></img>
                <h1 className="font-bold text-4xl mt-10">
                  Petro William
                </h1>
                <h2 className="mt-5 text-xl">
                  Head Chef
                </h2>
              </div>
            </div>
          </div>
      </div>

      {/* Footer card */}
      <div className="w-full h-fit md:p-10 bg-[#282828] rounded-t-4xl">
        <div className="w-full h-fit flex flex-col md:flex-row md:p-20 p-10 space-y-10 justify-between bg-black/50 rounded-4xl">

          <div className="flex-col">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            className="w-40"></img>
            <div className="flex flex-col mt-10">
              <h1 className="text-xl">Address</h1>
              <h1 className="text-xl font-bold">66 Broklyant,New India</h1>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl">Phone Number</h1>
              <h1 className="text-xl font-bold">012 345 678 9101</h1>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl">Email</h1>
              <h1 className="text-xl font-bold">restan@mail.com</h1>
            </div>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Pages</h1>
            <ul className="text-xl space-y-3 list-inside mt-5">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Recent Posts</h1>

            <div className="flex flex-row mt-5">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
              className="rounded-2xl w-40"></img>
              <div className="flex flex-col p-5">
                <h1 className="text-l">Oct 32, 2068</h1>
                <h1 className="text-xl font-bold">New Burgers Available</h1>
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
              className="rounded-2xl w-40"></img>
              <div className="flex flex-col p-5">
                <h1 className="text-l">Oct 96, 2099</h1>
                <h1 className="text-xl font-bold">Business Brilliance Starts Here</h1>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Services</h1>
              <ul className="text-xl space-y-3 list-inside mt-5">
                <li>Customer Experience Evaluation</li>
                <li>Online Delivery</li>
                <li>High Quality Service</li>
                <li>Affordable Food</li>
                <li>Fastest Growing Food Chain</li>
              </ul>
          </div>
        </div>  

        <div className="flex flex-row border-t-1 border-gray-600 mt-6 pt-6">
          <h1 className="p-5">Copyright ©2024 Crank. All rights reserved.</h1>
        </div>

      </div>

    </div>  
  );
}
