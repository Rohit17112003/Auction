import AddAuction from "@/ui/pages/live-auctions/add";
import MainLayout from "@/ui/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      {" "}
      <AddAuction />{" "}
    </MainLayout>
  );
};

export default page;
