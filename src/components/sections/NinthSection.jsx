import React from "react";

const NinethSection = () => {
  return (
    <div className="h-94vh w-screen bg-customFade lg:mb-40">
      <div className="flex lg:pt-0 pt-20 lg:justify-between justify-center items-center pl-0 lg:pl-48">
        <div className="flex flex-col lg:w-2/4  justify-center lg:items-start items-center">
          <div className="font-bold text-48 font-dm-sans">
            Join CredPal today
          </div>
          <div className="w-80 mt-5">
            <p className="font-normal text-18 font-poppins">
              Download the CredPal app and join millions of satisfied customers
              who are already using CredPal to access credit, make payments,
              invest & many more!
            </p>
          </div>
          <div className="flex mt-16">
            <div className="mr-3">
              <img src="/app-store.png" alt="" />
            </div>
            <div>
              <img src="/play-store.png" alt="" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-2/4">
          <div>
            <img width={300} height={219} src="/code.png" alt="" />
          </div>
          <div>
            <img width={350} height={298.38} src="/12-Pro-half.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinethSection;
