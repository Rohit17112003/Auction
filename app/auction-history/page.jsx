import AuctionHistory from "@/components/pages/auction-history/page";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <AuctionHistory />
    </MainLayout>
  );
};

export default page;
