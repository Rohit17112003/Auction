import MainLayout from "@/components/templates/MainLayout";
import TaxExemption from "@/components/pages/tax-exemption";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <TaxExemption />
    </MainLayout>
  );
};

export default page;
