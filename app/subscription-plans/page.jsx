import SubscriptionPlans from "@/ui/pages/subscription-plans";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <SubscriptionPlans />
    </MainLayout>
  );
};

export default page;
