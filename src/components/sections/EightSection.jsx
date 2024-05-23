import React from "react";

const EightSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex text-white bg-customBlue py-20 flex-col justify-center items-center">
        <div className="font-bold text-36">Start building your credit score today</div>
        <div className="mt-5">
         <p className="font-normal text-20"> Download our app to get started on your credit journey in Africa. Make
          the first move</p>
        </div>
        <div className="">
         <p className="font-normal text-20">   towards a better financial future today.</p>
        </div>
        <div>
          <button className="btn bg-white mt-16 text-customBtnBlue rounded-full w-256">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default EightSection;
