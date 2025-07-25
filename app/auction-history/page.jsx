import AuctionHistory from "@/ui/pages/auction-history/page";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <AuctionHistory />
    </MainLayout>
  );
};

export default page;
