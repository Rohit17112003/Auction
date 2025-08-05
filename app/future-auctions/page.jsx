import FutureAuctions from "@/components/pages/future-auctions";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <FutureAuctions />
    </MainLayout>
  );
};

export default page;
