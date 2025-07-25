import BannerContainer from "@/ui/molecules/BannerContainer";
import LiveAuctionCard from "@/ui/molecules/LiveAuctionCard";

const LiveAuctions = () => {
  return (
    <section className="space-y-5">
      <BannerContainer
        style="bg-[#0078D4]"
        title="Add New Product "
        description="Add, edit and view product information"
        image="/image/doctor.png"
        url="/live-auctions/add"
      />
      <div className="grid gap-10 lg:grid-cols-2">
        {auctions.map((auction, index) => (
          <LiveAuctionCard key={index} {...auction} />
        ))}
      </div>
    </section>
  );
};

export default LiveAuctions;

const auctions = [
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "18,590",
    bids: "101 Bids",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "18,590",
    bids: "101 Bids",
  },
];
