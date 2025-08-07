import AuctionInfoTable from "../molecules/AuctionInfoTable";
import BannerContainer from "../molecules/BannerContainer";
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";

const HomePage = () => {
  const { stats } = data;

  const bannerData = [
    {
      bgStyle: {
        background:
          "linear-gradient(to right, var(--color-brown), var(--color-darkyellow))",
      },
      title: "Subscription Plan",
      description: "Know your subscription plan",
      url:"/subscription-plans",
    },
    {
      bgStyle: {
        background:
          "linear-gradient(to right, var(--color-brown), var(--color-darkyellow))",
      },
      title: "Discount Coupon",
      description: "Amount sold through discount vouchers",
      url:"/discount-coupons",
    },
    {
      bgStyle: {
        background:
          "linear-gradient(to right, var(--color-brown), var(--color-darkyellow))",
      },
      title: "Refer a Vendor",
      description: "Refer a vendor and earn rewards",
      url:"/refer",
    },
    {
      bgStyle: {
        background:
          "linear-gradient(to right, var(--color-brown), var(--color-darkyellow))",
      },
      title: "Discount Invoice",
      description: "Create a discount invoice",
      url:"/discount-invoice",
    },
  ];

  return (
    <div className="space-y-5">
      <section className="bg-light grid gap-5 rounded-lg p-5 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>

      <AuctionInfoTable />

      <section className="grid gap-5 md:grid-cols-2 pb-10">
        {bannerData.map((banner, i) => (
          <BannerContainer key={i} {...banner} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
