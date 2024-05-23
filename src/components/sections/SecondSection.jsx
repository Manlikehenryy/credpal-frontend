import React from "react";

const SecondSection = () => {
  return (
    <div className="mx-auto font-poppins mb-32 px-5 md:px-0 w-full md:max-w-[min(1330px,calc(100%-1rem))] md:w-[83.125rem] ">
      
        <div className="mt-20">
        <div className="font-bold text-40 text-center">
          Our customers love us
        </div>
        <div className="mt-5 mb-16 font-normal text-24 text-center text-gray-400">
          Read what they have to say
        </div>
        </div>

        

        

        <div className="flex flex-col gap-">
          <div className="overflow-x-auto">
          <div className="flex flex-row gap-6 pb-10">
          <div className="relative bg-[#F9FAFB] flex flex-col flex-shrink-0 gap-4 p-8 w-[min(24rem,100%)]">
            <div className="flex flex-col">
              <div className="flex">
                <div className="mx-2">
                  <img src="/martin.png" alt="" />
                </div>
                <div>Martins Adebowale</div>
              </div>

              <div className="mx-2 mt-4">
                <p className="text-14">
                  "I love this app! It's so easy to use and has helped me save
                  money for my future goals. The auto-save feature makes it a
                  breeze to save regularly, and the investment options are great
                  too. Highly recommend!"
                </p>
              </div>

              <div className="absolute bottom-3 mx-2 mt-4">
                <img src="/rating.png" width={127.5} height={20} alt="" />
              </div>
            </div>
          </div>

          <div className="relative bg-[#F9FAFB] flex flex-col flex-shrink-0 gap-4 p-8 w-[min(24rem,100%)]">
            <div className="flex flex-col">
              <div className="flex">
                <div className="mx-2">
                  <img src="/kalistus.png" alt="" />
                </div>
                <div>Kalistus Oluwafemi</div>
              </div>

              <div className="mx-2 mt-4">
                <p className="text-14">
                  This app has been a game-changer for me. I used to struggle
                  with managing my finances, but with this app, I can easily
                  track my spending, set budgets, and save for the things that
                  matter most.
                </p>
              </div>

              <div className="absolute bottom-3 mx-2 mt-4">
                <img src="/rating.png" width={127.5} height={20} alt="" />
              </div>
            </div>
          </div>

          <div className="relative bg-[#F9FAFB] flex flex-col flex-shrink-0 gap-4 p-8 w-[min(24rem,100%)]">
            <div className="flex flex-col">
              <div className="flex">
                <div className="mx-2">
                  <img src="/esther.png" alt="" />
                </div>
                <div>Esther Romanus</div>
              </div>

              <div className="mx-2 mt-4">
                <p className="text-14">
                  "I never thought investing could be so simple and accessible,
                  but this app has changed my mind. I can invest easily track my
                  portfolio's performance. Highly recommend for anyone looking
                  to start investing."
                </p>
              </div>

              <div className="absolute bottom-3 mx-2 mt-4">
                <img src="/rating.png" width={127.5} height={20} alt="" />
              </div>
            </div>
          </div>

          <div className="relative bg-[#F9FAFB] flex flex-col flex-shrink-0 gap-4 p-8 w-[min(24rem,100%)]">
            <div className="flex flex-col">
              <div className="flex">
                <div className="mx-2">
                  <img src="/chigozie.png" alt="" />
                </div>
                <div>Chigozie Davids</div>
              </div>

              <div className="mx-2 mt-4">
                <p className="text-14">
                  "I've been using this app for months now and it has completely
                  changed the way I manage my finances. The app is
                  user-friendly, offers great investment options, and has helped
                  me save more money than I ever thought was possible."
                </p>
              </div>

              <div className="absolute bottom-3 mx-2 mt-4">
                <img src="/rating.png" width={127.5} height={20} alt="" />
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
   
    </div>
  );
};

export default SecondSection;
