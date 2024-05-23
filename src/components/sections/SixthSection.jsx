import React from "react";

const SixthSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full justify-between px-20 space-x-8">
        <div className="flex flex-col w-2/4">
          <div className="font-bold text-48 mb-4 text-customTextColor">
            Credit Builder
          </div>
          <div className="flex flex-col w-3/4">
            <p>
              Fund your virtual card and make payments everywhere. Use your
              CredPal virtual card to make purchases both online and offline
              with ease, and benefit from our reward-rich programs.
            </p>
          </div>

          <div className="mt-10">
            <button className="btn bg-customBtnBlue text-white rounded-full w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="w-2/4">
          <img src="/credit-builder.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
