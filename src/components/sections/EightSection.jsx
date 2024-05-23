import React from "react";

const EightSection = () => {
  return (
    <div className="h-screen w-screen lg:mb-20">
      <div className="flex text-white bg-customBlue py-20 flex-col text-center justify-center items-center">
        <div className="font-bold text-36 font-dm-sans">
          Start building your credit score today
        </div>
        <div className="mt-5">
          <p className="font-normal text-20 w-3/4 mx-auto font-poppins">
            {" "}
            Download our app to get started on your credit journey in Africa.
            Make the first move towards a better financial future today.
          </p>
        </div>

        <div>
          <button className="btn bg-white mt-16 text-customBtnBlue rounded-full w-256 font-dm-sans">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default EightSection;
