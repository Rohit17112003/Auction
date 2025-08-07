import MainLayout from "@/components/templates/MainLayout";
import DiscountInvoice from "@/components/pages/discount-invoice";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <DiscountInvoice />
    </MainLayout>
  );
};

export default page;
