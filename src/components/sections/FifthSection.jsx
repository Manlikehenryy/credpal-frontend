import React from "react";

const FifthSection = () => {
  return (
    <div className="h-screen w-screen mb-96 lg:mb-10">
      <div className="flex w-full flex-col lg:flex-row justify-center lg:items-start items-center lg:justify-between px-20 space-x-8">
        <div className="flex mb-16 lg:mb-0 justify-center lg:items-start items-center flex-col w-full lg:w-2/4">
          <div className="font-bold font-dm-sans text-48 mb-4 text-customTextColor">
            Virtual Cards
          </div>
          <div className="flex font-poppins flex-col lg:w-3/4">
            <p>
              Create a virtual credit or cash card, make secure online
              purchases, keep track of your spending, and have complete
              visibility of where your funds are going. With advanced security
              features, you have the ability to set spending limits and exert
              control over your spending.
            </p>
          </div>

          <div className="mt-10">
            <button className="btn font-dm-sans bg-customBtnBlue text-white rounded-full w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="lg:w-2/4">
          <img src="/virtual-cards.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
