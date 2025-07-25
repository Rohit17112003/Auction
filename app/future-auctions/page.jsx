import FutureAuctions from "@/ui/pages/future-auctions";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <FutureAuctions />
    </MainLayout>
  );
};

export default page;
