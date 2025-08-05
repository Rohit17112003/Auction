import Image from "next/image";
import Link from "next/link";

const ProductDetail = ({ productId }) => {
  return (
    <section className="space-y-6">
      {/* header banner */}
      <div className="bg-lightyellow flex  items-center justify-between gap-2 rounded-xl px-3 py-3 text-light">
        <div className="flex w-full items-center gap-3">
          <Link href="/future-auctions"><i className="ri-arrow-left-line ri-lg"></i></Link> 
          <span className="text-xl font-semibold">Product Details</span>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-1 rounded bg-[#F13E3E] md:px-6 px-3 py-2 cursor-pointer text-sm md:text-lg ">
            Delete <i className="ri-delete-bin-fill"></i>
          </button>
          <button className="flex items-center justify-center gap-1 rounded bg-[#2CB24B] md:px-6 px-3 py-2 cursor-pointer text-sm md:text-lg">
            Edit<i className="ri-pencil-fill ps-2"></i>
          </button>
        </div>
      </div>
      {/* car detail */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <Image
            className="min-h-40 rounded-lg"
            src="/image/car.jpg"
            alt="car"
            width="500"
            height="500"
          />
        </div>
        <div className="lg:col-span-2">
          <h2 className="mb-4 md:text-3xl font-bold text-2xl">Ambassador Car</h2>
          <p className="md:text-lg text-sm font-medium text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            recusandae, officiis harum expedita porro eveniet earum, totam modi
            quis temporibus iste repellendus optio voluptatibus, deserunt ipsam
            quas sit ab fuga! Omnis doloribus officia pariatur dolor magni
            laborum repellendus rem eum ex voluptatem earum, similique ad cumque
            explicabo, sint architecto voluptas. <span className="text-primary">Read More</span>
          </p>
        </div>
      </div>
      {/* brief detail */}
      <div className="border-primary rounded-xl border border-dashed px-4 py-4 lg:px-10">
        <div className="grid grid-cols-2 gap-6 lg:w-[60%] lg:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold">Create Date</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Last Update Timestmp </h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Expected Price</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Date of Auction</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Auction Validity</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Auction No</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Auction No</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Match the Offer</h4>
            <p className="text-sm text-[#667380]">5/30/2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
