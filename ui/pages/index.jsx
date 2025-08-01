import AuctionInfoTable from "../molecules/AuctionInfoTable";
import BannerContainer from "../molecules/BannerContainer";
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";

const HomePage = () => {
  const { stats } = data;

  const bannerData = new Array(4).fill({
    bgStyle: {
      background:
        "linear-gradient(to right, var(--color-brown), var(--color-darkyellow))",
    },
    title: "Discount Coupon",
    description: "Amount sold through discount vouchers",
  });

  return (
    <div className="space-y-5">
      <section className="bg-light grid gap-5 rounded-lg p-5 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>

      <AuctionInfoTable />

      <section className="grid gap-5 lg:grid-cols-2">
        {bannerData.map((banner, i) => (
          <BannerContainer key={i} {...banner} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
