import MainLayout from "@/components/templates/MainLayout";
import DiscountCoupons from "@/components/pages/discount-coupons";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <DiscountCoupons />
    </MainLayout>
  );
};

export default page;
