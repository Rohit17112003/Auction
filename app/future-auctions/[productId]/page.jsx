import ProductDetail from "@/components/pages/future-auctions/product-deatail";
import MainLayout from "@/components/templates/MainLayout";

const page = async ({ params }) => {
  const { productId } = await params;
  return <MainLayout pageTitle={"Hi Rohit 👋"}> <ProductDetail productId={productId} /></MainLayout>;
};

export default page;
