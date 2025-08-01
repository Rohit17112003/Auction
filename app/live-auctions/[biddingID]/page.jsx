import LiveBidding from "@/ui/pages/live-auctions/live-bidding";
import MainLayout from "@/ui/templates/MainLayout";

const page = async ({ params }) => {
  const { biddingID } = await params;
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <LiveBidding biddingID={biddingID} />{" "}
    </MainLayout>
  );
};

export default page;
