import LiveAuctions from "@/ui/pages/live-auctions";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <LiveAuctions />
    </MainLayout>
  );
};

export default page;
