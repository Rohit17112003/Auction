import PaymentManagement from "@/ui/pages/payment-management";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <PaymentManagement />
    </MainLayout>
  );
};

export default page;
