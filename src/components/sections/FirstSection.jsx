import React from "react";
import Navbar from "../navbar/Navbar";

const FirstSection = () => {
  return (
    <div className="lg:h-screen w-screen pb-5 lg:pb-0 bg-customBlue px-20">
      <Navbar />
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="flex mr-10 flex-1 lg:flex-auto flex-col lg:w-3/5 text-white">
          <div>
            <p className="font-semibold text-custom-size text-custom-height font-dm-sans">
              One App, all your Financial Needs
            </p>
          </div>
          <div>
            <p className="font-normal font-poppins leading-40px">
              Take control of your finances on the go! Make payments, save,
              invest, and access credit - all with one easy-to-use app.
            </p>
          </div>
        </div>

        <div className="flex mt-20 lg:mt-0 ml-32 flex-1 lg:flex-auto flex-col lg:w-2/5 text-white">
          <div className="relative">
          <div>
            <img width={180} height={351} src="/iPhone-12-Pro-mockup.png" alt="" />
          </div>


          <div class="absolute top-[-3rem] right-10 p-3 bg-white text-black shadow-md rounded-lg w-300 h-103.21">
            <div className="flex relative">
               <div className="flex flex-col">
               <div className="font-normal font-inter text-12.98">Card Balance</div>
               <div className="font-semibold font-dm-sans text-31.16 text-[#121212]">&#x20A6;32,804,000</div>
               </div>

               <div className="absolute top-5 right-4"> <img src="/metric.png" alt="" /></div>
            </div>
            
          </div>

          <div class="absolute top-28 left-[-10rem] p-3 bg-white text-black shadow-md rounded-lg w-300 h-103.21">
            <div className="flex relative">
               <div className="flex flex-col">
               <div className="font-normal font-inter text-12.98">Total Earnings</div>
               <div className="font-semibold font-dm-sans text-31.16">&#x20A6;32,804,000</div>
               </div>

               <div className="absolute top-5 right-4"> <img src="/graph.png" alt="" /></div>
            </div>
            
          </div>

          <div class="absolute bottom-9 right-10 p-3 bg-white text-black shadow-md rounded-lg w-300 h-103.21">
            <div className="flex relative justify-between">
               <div className="absolute top-0 left-[-0.5rem]"> <img src="/spotify.png" alt="" /></div>
               <div className="flex flex-col ml-10">
               <div className="font-semibold font-dm-sans text-20">Spotify</div>
               <div className="font-normal font-inter text-12.98">Yesterday, 5:30 PM</div>
               </div>

            
               <div className="font-bold font-public-sans text-[15.58px] pt-6">&#x20A6;32,804,000</div>
              

               
            </div>
            
          </div>

          </div>
         
        </div>
      </div>

     
    </div>
  );
};

export default FirstSection;
