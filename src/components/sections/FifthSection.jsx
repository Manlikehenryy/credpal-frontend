import React from "react";

const FifthSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full justify-between px-20 space-x-8">
        <div className="flex flex-col w-2/4">
          <div className="font-bold text-48 mb-4 text-customTextColor">
            Virtual Cards
          </div>
          <div className="flex flex-col w-3/4">
            <p>
              Create a virtual credit or cash card, make secure online
              purchases, keep track of your spending, and have complete
              visibility of where your funds are going. With advanced security
              features, you have the ability to set spending limits and exert
              control over your spending.
            </p>
          </div>

          <div className="mt-10">
            <button className="btn bg-customBtnBlue text-white rounded-full w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="w-2/4">
          <img src="/virtual-cards.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
