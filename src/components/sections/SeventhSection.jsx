import React from "react";

const SeventhSection = () => {
  return (
    <div className="lg:h-screen w-screen mb-10 lg:mb-0 mt-[-6rem]">
      <div className="w-full items-center justify-center flex-col lg:flex-row flex overflow-hidden">
        <div className="relative mb-5 p-6 mr-4 bg-customOrange text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="mx-2">
              <img src="/icon-1.png" alt="" />
            </div>

            <div className="mt-12 font-dm-sans font-bold text-32">Move with CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14 font-poppins">
                CredPal enables users to pay for Bolt rides and food orders,
                with the option to pay now or pay later, based on the available
                payment options.
              </p>
            </div>

            <div className="absolute bottom-3 mx-2 mt-8 font-dm-sans flex">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-5 p-6 mr-4 bg-customPurple text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="relative mx-2">
                <div className="absolute top-0.5 left-5"><img src="/icon-2b.png" alt="" /></div>
              <img src="/icon-2a.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32 font-dm-sans">Travel with CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14 font-poppins">
                CredPal users can pay for bills and services with the option to
                pay now or pay later, depending on the payment options
                available.
              </p>
            </div>

            <div className="absolute bottom-3 mx-2 mt-8 flex font-dm-sans">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-5 p-6 mr-4 bg-customSkyBlue text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="mx-2">
              <img src="/icon-3.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32 font-dm-sans">Pay with <br/>CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14 font-poppins">
                CredPal users have the flexibility to pay for bills and services
                with the option to pay now or pay later, depending on the
                available payment options.
              </p>
            </div>

            <div className="absolute bottom-3 mx-2 mt-8 flex font-dm-sans">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-5 p-6  bg-customDarkPurple text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="mx-2">
              <img src="/icon-4.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32 font-dm-sans">Shop with CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14 font-poppins">
                Credpal’s marketplace offers a wide range of products from
                various merchants, and users can choose to pay for their
                purchases in instalments.
              </p>
            </div>

            <div className="absolute bottom-3 mx-2 mt-8 flex font-dm-sans">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
