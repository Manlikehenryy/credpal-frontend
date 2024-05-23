import React from "react";

const TenthSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col w-90 mt-20 mx-auto">
        <div className="flex">
          <div className="flex flex-col w-2/4">
            <div>
              <img src="./logo-footer.png" alt="" />
            </div>
            <div className="w-60 mt-10">
              <p className="text-14 font-medium text-customGrey">
                CredPal is a revolutionary credit solution geared towards
                providing seamless credit access for businesses and individuals
                across developing economies.
              </p>
            </div>
          </div>

          <div className="flex flex-col mr-10">
            <div className="font-medium">Products</div>
            <div className="mt-6">
              <ul className="list-none text-14 font-medium text-customGrey">
                <li>CredPal Personal</li>
                <li>CredPal Business</li>
                <li>CredPal Lifestyle</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col mr-10">
            <div className="font-medium">Legal</div>
            <div className="mt-8">
              <ul className="list-none text-14 font-medium text-customGrey">
                <li>Customer Terms of use</li>
                <li>Merchant Terms of service</li>
                <li>Privacy Notice</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col mr-10">
            <div className="font-medium">Support</div>
            <div className="mt-8">
              <ul className="list-none text-14 font-medium text-customGrey">
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="font-medium">Get the app</div>
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
          <p className="text-14 font-medium text-customGrey">
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

        <div className="flex justify-end mt-16">
          <div className="text-customGrey">
            We use cookies for better service.
          </div>
          <div className="ml-4 text-customBlue">Accept</div>
        </div>
      </div>
    </div>
  );
};

export default TenthSection;
