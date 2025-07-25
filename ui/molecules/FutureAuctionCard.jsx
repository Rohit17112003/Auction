import Image from "next/image";
import Link from "next/link";

const FutureAuctionCard = ({name, carName, img, auctionNo, time }) => {
  return (
    <Link href={`/future-auctions/${name}`}>
      <div className="container-bg flex flex-col gap-6 p-3 lg:flex-row">
        <Image
          className="w-full rounded-lg lg:w-44"
          src={img}
          alt="car"
          width={200}
          height={300}
        />
        <div>
          <p className="text-tertiary text-[16px] font-semibold">{name}</p>
          <h4 className="text-[20px] font-semibold">{carName}</h4>
          <p className="mb-2 text-[#828282]">Auction no #{auctionNo}</p>
          <div className="flex gap-2">
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-[#27AE6029] px-2 py-0.5 text-[#27AE60]">
            <i className="ri-timer-2-line ri-lg"></i> 21-Aug-2024
          </p>
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-[#B8343429] px-2 py-0.5 text-[#E83838]">
            <i className="ri-timer-2-line ri-lg"></i> 21-Aug-2024
          </p>
          </div>
          <p className="text-tertiary text-[20px] font-semibold">
            Expected Price ₹ 18,590
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FutureAuctionCard;
