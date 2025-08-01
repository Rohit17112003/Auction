import LiveAuctions from "@/ui/pages/live-auctions";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <LiveAuctions />
    </MainLayout>
  );
};

export default page;
