import AddCoupon from "@/components/pages/discount-coupons/add";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddCoupon />
    </MainLayout>
  );
};

export default page;
