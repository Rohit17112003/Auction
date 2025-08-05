"use client";
import DiscountCoupon from "@/components/molecules/DiscountCoupon";
import BannerContainer from "@/components/molecules/BannerContainer";


const DiscountCoupons = () => {
  return (
    <section className="space-y-5">
      <BannerContainer
        style="bg-lightyellow"
        title="Add New Coupon"
        description="Add, edit and view coupon information"
        image="/image/doctor.svg"
        url="/discount-coupons/add"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coupons.map((item, index) => (
          <DiscountCoupon
            key={index}
            title={item.title}
            discount={item.discount}
            conditions={item.conditions}
            validUntil={item.validUntil}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscountCoupons;


const coupons = [
  {
    title: "First Auction Offer",
    discount: "30% OFF up on first auction",
    conditions: [
      "Redeemable on at first auction order.",
      "Not a cash.",
    ],
    validUntil: "03 Dec 2024",
  },
  {
    title: "New User Deal",
    discount: "₹100 OFF on orders above ₹500",
    conditions: ["Valid for new users", "Non-refundable"],
    validUntil: "31 Dec 2024",
  },
  {
    title: "Festive Sale",
    discount: "15% OFF this Diwali",
    conditions: ["Applicable once per user", "Only on select auctions"],
    validUntil: "10 Nov 2024",
  },
];
