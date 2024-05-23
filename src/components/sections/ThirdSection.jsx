import React from "react";

const ThirdSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full justify-between px-20 space-x-8">
  <div className="flex flex-col w-2/4">
    <div className="font-bold text-48 mb-4 text-customTextColor">Payments</div>
    <div className="flex flex-col w-3/4">
      <p>
        Enjoy a secure, reliable and convenient way to pay. Whether you're
        paying for a purchase, subscription or any other type of payment,
        CredPal is designed to make the process fast and easy.
      </p>
    </div>

    <div className="mt-10">
      <button className="btn bg-customBtnBlue text-white rounded-none w-256">Download App</button>
    </div>
  </div>

  <div className="w-2/4">
    <img src="/shoe-img.png" alt="" />
  </div>
</div>

    </div>
  );
};

export default ThirdSection;
