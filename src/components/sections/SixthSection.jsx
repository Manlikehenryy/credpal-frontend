import React from "react";

const SixthSection = () => {
  return (
    <div className="h-screen w-screen mb-60 lg:mb-20">
      <div className="flex w-full flex-col lg:flex-row justify-center lg:items-start items-center lg:justify-between px-20 space-x-8">
        <div className="flex mb-16 lg:mb-0 justify-center lg:items-start items-center flex-col w-full lg:w-2/4">
          <div className="font-bold font-dm-sans text-48 mb-4 text-customTextColor">
            Credit Builder
          </div>
          <div className="flex font-poppins flex-col lg:w-3/4">
            <p>
              Fund your virtual card and make payments everywhere. Use your
              CredPal virtual card to make purchases both online and offline
              with ease, and benefit from our reward-rich programs.
            </p>
          </div>

          <div className="mt-10">
            <button className="btn font-dm-sans bg-customBtnBlue text-white rounded-full w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="lg:w-2/4">
          <img src="/credit-builder.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
