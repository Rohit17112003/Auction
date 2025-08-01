import ProductDetail from "@/ui/pages/future-auctions/product-deatail";
import MainLayout from "@/ui/templates/MainLayout";

const page = async ({ params }) => {
  const { productId } = await params;
  return <MainLayout pageTitle={"Hi Rohit 👋"}> <ProductDetail productId={productId} /></MainLayout>;
};

export default page;
