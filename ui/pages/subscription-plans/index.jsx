import BannerButton from "@/ui/atoms/BannerButton";

const SubscriptionPlans = () => {
  return (
    <section className="space-y-10">
      <BannerButton route={"/"} label={"Subscription Plans"} />
      <div className="mx-auto flex flex-col lg:items-end justify-center gap-10 lg:flex-row">
        <div className="bg-primary rounded-xl p-1">
          <h2 className="px-8 py-2 text-center text-xl font-semibold text-white">
            Basic Plan
          </h2>
          <div
            className="flex flex-col justify-center gap-3  rounded-b-xl px-14 py-10"
            style={{
              background: " url('/image/glitter.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-center text-4xl font-semibold text-white">
              1 Months <br />
              <span className="text-primary">Free</span>
            </h3>
            <p className="text-center text-base font-semibold text-white">
              Add 5 Products
            </p>
            <button className="text-primary rounded-full bg-white px-6 py-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-[#FF8A00] p-1">
          <h2 className="px-8 py-2 text-center text-2xl font-semibold text-white">
            Silver Plan
          </h2>
          <div
            className="flex flex-col justify-center gap-5 rounded-b-xl p-14"
            style={{
              background: " url('/image/glitter.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-center text-4xl font-semibold text-white">
              06 Months <br />
              <span className="text-[#FF8A00]">7000 INR</span>
            </h3>
            <p className="text-center text-base font-semibold text-white">
              Add 50 Products
            </p>
            <button className="rounded-full bg-white px-6 py-2 font-semibold text-[#FF8A00]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="bg-primary rounded-xl p-1">
          <h2 className="px-8 py-2 text-center text-xl font-semibold text-white">
            Gold Plan
          </h2>
          <div
            className="flex flex-col justify-center gap-3 rounded-b-xl px-14 py-10"
            style={{
              background: " url('/image/glitter.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-center text-4xl font-semibold text-white">
              2 Months <br />
              <span className="text-primary">10,000 </span>
            </h3>
            <p className="text-center text-base font-semibold text-white">
              Add 150 Products
            </p>
            <button className="text-primary rounded-full bg-white px-6 py-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
