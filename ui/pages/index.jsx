import BannerContainer from "../molecules/BannerContainer";
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";

const HomePage = () => {
  const { stats } = data;
  return (
    <div className="space-y-5">
      <section className="grid gap-5 lg:grid-cols-4 bg-light p-5 rounded-lg">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <BannerContainer
          bgStyle={{
            background:
              "linear-gradient(to right, rgba(8, 9, 11, 0.2) 1%,  #08090B 7%, #061F51 93%), url('/image/banner-bg.jpg')",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          style="lg:col-span-2"
          url="/subscription-plans"
          title="My Subscriptions Plans"
          description="Get  this exclusive offers to add multiple products!"
          image="/image/subs.png"
        />

        <BannerContainer
          bgStyle={{
            background:
              "linear-gradient(to right, rgba(8, 9, 11, 0.2) 1%,  #08090B 7%, #511606 93%), url('/image/banner-bg.jpg')",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          title="Refer a Vender"
          description="Refer a vender and earn rewards"
          image="/image/notification.png"
        />

        <BannerContainer
          bgStyle={{
            background:
              "linear-gradient(to right, rgba(8, 9, 11, 0.2) 1%,  #08090B 7%, #1B5106 93%), url('/image/banner-bg.jpg')",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          title="Discount Invoice"
          description="Create a discount invoice"
          image="/image/discount.png"
        />

         <BannerContainer
          bgStyle={{
            background:
              "linear-gradient(to right, rgba(8, 9, 11, 0.2) 1%,  #08090B 7%, #1B5106 93%), url('/image/banner-bg.jpg')",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          title="Discount Invoice"
          description="Create a discount invoice"
          image="/image/discount.png"
        />

         <BannerContainer
          bgStyle={{
            background:
              "linear-gradient(to right, rgba(8, 9, 11, 0.2) 1%,  #08090B 7%, #1B5106 93%), url('/image/banner-bg.jpg')",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          title="Discount Invoice"
          description="Create a discount invoice"
          image="/image/discount.png"
        />
      </section>

      <section className="grid gap-5 lg:grid-cols-4">
        <div className="container-bg h-80 lg:col-span-2">
          <h4 className="rounded-t-xl bg-[#843ED4] p-2 text-sm text-white">
            Total No. of Auctions till Completed
          </h4>
        </div>
        <div className="container-bg h-80">
          <h4 className="rounded-t-xl bg-[#6425FE] p-2 text-sm text-white">
            Total No. of Action Products
          </h4>
        </div>
        <div className="container-bg h-80">
          <h4 className="rounded-t-xl bg-[#FF8A00] p-2 text-sm text-white">
            All Ongoing Auctions
          </h4>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
