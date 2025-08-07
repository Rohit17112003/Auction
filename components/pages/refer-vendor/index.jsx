import Image from "next/image";
import BannerButton from "@/components/atoms/BannerButton";

const ReferVendor = () => {
  return (
    <section className="w-full space-y-6 overflow-y-auto ">
      {/* Back Button */}
     
      <BannerButton route={"/"} label={"Refer a Vendor"} />
      {/* Points */}
      <div className="flex flex-col items-center justify-center gap-1 text-white">
        <Image
          className="h-24 w-24"
          src="/image/wallet.png"
          alt="points"
          width={200}
          height={200}
        />
        <span className="text-4xl font-extrabold">80</span>
        <p className="text-lg font-bold">Points</p>
         <button className="mx-auto flex items-center gap-4 justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold ">
        <span className="bg-gradient-to-r from-[#8A5BFF] to-[#FF407D] bg-clip-text text-transparent">
        Convert & Redeem points
        </span>
      </button>
      </div>
      {/* refferal code */}
      <div className="relative mx-auto mb-20 rounded-xl bg-white p-3 lg:p-8 pb-16 lg:pb-20 lg:w-[65%]">
        <div className="relative space-y-8">
          <p className="flex items-center gap-3 lg:gap-6 font-semibold">
            <Image
              className="h-10 w-10 object-cover"
              src="/image/icon/message.png"
              alt="message"
              width={100}
              height={100}
            />
            Invite your friend to use the app and ask to add code during signup
          </p>
          <hr className="absolute -left-2 w-14 rotate-90 border-r border-dashed border-[#959595]" />
          <p className="flex items-start gap-3 lg:gap-6 font-semibold">
            <Image
              className="h-10 w-10 object-cover"
              src="/image/icon/gift.png"
              alt="gift"
              width={100}
              height={100}
            />
           When your friend(vendor) signsup and subscribes  you will get a certain percentage of the subscription value as a reward. The reward will be displayed in the payment section.
          </p>
           <hr className="absolute md:-left-5 -left-9 md:bottom-9 bottom-22 md:w-20 w-28 rotate-90 border-r border-dashed border-[#959595]" />
          <p className="flex items-start gap-3 lg:gap-6 font-semibold">
            <Image
              className="h-10 w-10 object-cover"
              src="/image/icon/gift.png"
              alt="gift"
              width={100}
              height={100}
            />
          This amount will be credited at the end of each month and can be used to renew subscriptions or buy additional auctions.
          </p>
        </div>
        {/* COPY CODE */}
        <div className="absolute -bottom-10 flex lg:flex-row  w-[90%] justify-center gap-1 lg:gap-8 rounded-xl border-2 border-dashed bg-white">
          <div className="flex flex-col justify-center p-4 text-center">
            <h4 className="lg:text-lg font-semibold text-[#959595]">
              Your refferal code
            </h4>
            <h2 className="lg:text-3xl text-xl font-bold">Rohit_043AE87</h2>
          </div>
          <div className="w-fit border-r border-gray-300"></div>
          <div className="flex gap-2 items-center">
            <i className="ri-file-copy-line ri-lg lg:ri-xl cursor-pointer"></i> <p className="text-[#959595] text-sm lg:text-xl font-semibold">Copy Code</p>
          </div>
        </div>
      </div>
      {/* points history button */}
      <button className="mx-auto flex items-center gap-4 justify-between rounded-xl bg-white px-8 py-4 text-lg font-bold lg:w-[50%] mb-10">
        <span className="bg-gradient-to-r from-[#8A5BFF] to-[#FF407D] bg-clip-text text-transparent">
          See points  history
        </span>
        <Image
          className="h-7 w-7"
          src="/image/icon/play.png"
          alt="play"
          width={100}
          height={100}
        />
      </button>
    </section>
  );
};

export default ReferVendor;
