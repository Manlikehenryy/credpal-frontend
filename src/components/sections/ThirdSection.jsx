import React from "react";

const ThirdSection = () => {
  return (
    <div className="h-screen w-screen mb-80 lg:mb-20">
      <div className="flex w-full flex-col lg:flex-row justify-center lg:items-start items-center lg:justify-between px-20 space-x-8">
        <div className="flex mb-16 lg:mb-0 justify-center lg:items-start items-center flex-col w-full lg:w-2/4">
          <div className="font-bold font-dm-sans text-48 mb-4  text-customTextColor">
            Payments
          </div>
          <div className="flex font-poppins flex-col lg:w-3/4">
            <p>
              Enjoy a secure, reliable and convenient way to pay. Whether you're
              paying for a purchase, subscription or any other type of payment,
              CredPal is designed to make the process fast and easy.
            </p>
          </div>

          <div className="mt-10">
            <button className="btn bg-customBtnBlue font-dm-sans text-white rounded-none w-256">
              Download App
            </button>
          </div>
        </div>

        <div className="lg:w-2/4">
          <img src="/shoe-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
