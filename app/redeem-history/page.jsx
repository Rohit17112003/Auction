import RedeemHistory from "@/components/pages/redeem-history";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <RedeemHistory />
    </MainLayout>
  );
};

export default page;
