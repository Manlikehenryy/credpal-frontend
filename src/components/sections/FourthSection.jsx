import React from "react";

const FourthSection = () => {
  return (
    <div className="h-screen w-screen mb-64 lg:mb-20">
      <div className="flex w-full flex-col lg:flex-row justify-center lg:items-start items-center lg:justify-between px-20 space-x-8">
        <div className="flex mb-16 lg:mb-0 justify-center lg:items-start items-center flex-col w-full lg:w-2/4">
          <div className="font-bold font-dm-sans text-48 mb-4 text-customTextColor">
            Savings
          </div>
          <div className="flex font-poppins flex-col lg:w-3/4">
            <p>
              Simplify your savings journey by setting a budget. Save with ease
              by setting goals, tracking your progress, and enabling automatic
              transfers with your bank account. It’s that easy!
            </p>
          </div>

          <div className="mt-10">
            <button className="btn font-dm-sans bg-customBtnBlue text-white rounded-full w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="lg:w-2/4">
          <img src="/savings.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
