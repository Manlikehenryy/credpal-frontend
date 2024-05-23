import React from "react";

const FourthSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full justify-between px-20 space-x-8">
        <div className="flex flex-col w-2/4">
          <div className="font-bold text-48 mb-4 text-customTextColor">
            Savings
          </div>
          <div className="flex flex-col w-3/4">
            <p>
              Simplify your savings journey by setting a budget. Save with ease
              by setting goals, tracking your progress, and enabling automatic
              transfers with your bank account. It’s that easy!
            </p>
          </div>

          <div className="mt-10">
            <button className="btn bg-customBtnBlue text-white rounded-full w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="w-2/4">
          <img src="/savings.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
