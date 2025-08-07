import AuctionHistoryCard from "@/components/molecules/AuctionHistoryCard";

const AuctionHistory = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {auctions.map((auction, index) => (
        <AuctionHistoryCard key={index} {...auction} />
      ))}
    </section>
  );
};

export default AuctionHistory;

const auctions = [
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "21-Aug-2024",
    cost: "18,590",
    bids: "101 Bids",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "21-Aug-2024",
    cost: "18,590",
    bids: "101 Bids",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "21-Aug-2024",
    cost: "18,590",
    bids: "101 Bids",
  },
];
