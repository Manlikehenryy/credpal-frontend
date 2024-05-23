import React from "react";

const SeventhSection = () => {
  return (
    <div className="h-screen w-screen">
      <div className="w-full flex mt-16  overflow-hidden">
        <div className="relative p-6 mr-4 bg-customOrange text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="mx-2">
              <img src="/icon-1.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32">Move with CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14">
                CredPal enables users to pay for Bolt rides and food orders,
                with the option to pay now or pay later, based on the available
                payment options.
              </p>
            </div>

            <div className="mx-2 mt-8 flex">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6 mr-4 bg-customPurple text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="relative mx-2">
                <div className="absolute top-0.5 left-5"><img src="/icon-2b.png" alt="" /></div>
              <img src="/icon-2a.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32">Travel with CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14">
                CredPal users can pay for bills and services with the option to
                pay now or pay later, depending on the payment options
                available.
              </p>
            </div>

            <div className="mx-2 mt-8 flex">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6 mr-4 bg-customSkyBlue text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="mx-2">
              <img src="/icon-3.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32">Pay with <br/>CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14">
                CredPal users have the flexibility to pay for bills and services
                with the option to pay now or pay later, depending on the
                available payment options.
              </p>
            </div>

            <div className="mx-2 mt-8 flex">
              <div>Learn More</div>
              <div className="px-3 py-1.5">
                <img src="/circle-btn-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6  bg-customDarkPurple text-black shadow-md rounded-lg w-352 h-400">
          <div className="flex flex-col">
            <div className="mx-2">
              <img src="/icon-4.png" alt="" />
            </div>

            <div className="mt-12 font-bold text-32">Shop with CredPal</div>

            <div className="mx-2 mt-4">
              <p className="text-14">
                Credpal’s marketplace offers a wide range of products from
                various merchants, and users can choose to pay for their
                purchases in instalments.
              </p>
            </div>

            <div className="mx-2 mt-8 flex">
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
