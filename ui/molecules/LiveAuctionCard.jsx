import Image from "next/image";
import Link from "next/link";

const LiveAuctionCard = ({ img, name, carName, auctionNo, time, cost, bids }) => {
  return (
    <Link href={`/live-auctions/${name}`}>
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
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-[#feeed7] px-2 py-0.5 text-[#FC9905]">
            <i className="ri-timer-2-line ri-lg"></i> {time}
          </p>
          <p className="text-tertiary font-semibold">Expected price ₹ 18,590</p>
          <p className="font-semibold text-[#2CB24B]">Ongoing price ₹ 26,590</p>
        </div>
      </div>
    </Link>
  );
};

export default LiveAuctionCard;
