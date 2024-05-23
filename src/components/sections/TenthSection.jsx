import React from "react";

const TenthSection = () => {
  return (
    <div className="lg:h-screen w-screen">
      <div className="flex flex-col w-90 mt-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-normal lg:items-start lg:text-start justify-center text-center">
          <div className="flex flex-col mb-10 lg:mb-0 items-center lg:justify-normal lg:items-start lg:text-start justify-center text-center lg:w-2/4">
            <div>
              <img src="./logo-footer.png" alt="" />
            </div>
            <div className="w-60 mt-10">
              <p className="text-14 font-poppins font-normal text-customGrey">
                CredPal is a revolutionary credit solution geared towards
                providing seamless credit access for businesses and individuals
                across developing economies.
              </p>
            </div>
          </div>

          <div className="flex mb-10 lg:mb-0 flex-col mr-10">
            <div className="font-semibold font-dm-sans">Products</div>
            <div className="mt-6">
              <ul className="font-poppins list-none text-14 font-normal text-customGrey">
                <li>CredPal Personal</li>
                <li>CredPal Business</li>
                <li>CredPal Lifestyle</li>
              </ul>
            </div>
          </div>

          <div className="flex mb-10 lg:mb-0 flex-col mr-10">
            <div className="font-semibold font-dm-sans">Legal</div>
            <div className="mt-8">
              <ul className="font-poppins list-none text-14 font-normal text-customGrey">
                <li>Customer Terms of use</li>
                <li>Merchant Terms of service</li>
                <li>Privacy Notice</li>
              </ul>
            </div>
          </div>

          <div className="flex mb-10 lg:mb-0 flex-col mr-10 font-dm-sans">
            <div className="font-semibold">Support</div>
            <div className="mt-8">
              <ul className="list-none text-14 font-normal text-customGrey">
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="flex mb-10 lg:mb-0 flex-col">
            <div className="font-semibold font-dm-sans">Get the app</div>
            <div className="flex flex-col mt-4">
              <div className="mb-3">
                <img src="/app-store-footer.png" alt="" />
              </div>
              <div>
                <img src="/play-store-footer.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <hr />
        </div>
        <div className="mt-16">
          <p className="text-14 font-poppins font-normal text-customGrey">
            CredPal financial services are offered by BishopGate Microfinance
            Bank, fully licensed and regulated by the Central bank of Nigeria.
            CredPal offers innovative financial solutions including payment,
            savings and credit services. Our credit solution allows businesses
            and individuals to buy anything and pay for it in instalments across
            online and offline merchants by providing them with instant access
            to credit at the point of checkout.
          </p>
        </div>
        <div className="mt-16">
          <hr />
        </div>

        <div className="flex font-dm-sans justify-center lg:justify-end mt-16 mb-10 lg:mb-0">
          <div className="font-normal text-customGrey">
            We use cookies for better service.
          </div>
          <div className="ml-4 font-bold text-customBlue">Accept</div>
        </div>
      </div>
    </div>
  );
};

export default TenthSection;
