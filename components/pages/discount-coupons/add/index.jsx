"use client";

import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/TextArea";
import Button from "@/components/atoms/Button";

const AddCoupon = () => {
  return (
    <section className="space-y-6 pb-8">
      <BannerButton route={"/discount-coupons"} label="Add new coupon" />
      
      <form className="grid gap-x-20 gap-y-6 lg:grid-cols-2" action="">

       
        <Input
          type="text"
          name="title"
          placeholder="Enter Coupon Title"
          icon="ri-price-tag-3-line"
        />

        <Input
          type="text"
          name="discount"
          placeholder="Discount (e.g. 30% OFF on first auction)"
          icon="ri-discount-percent-line"
        />

        <Textarea
          name="conditions"
          placeholder="Enter conditions (one per line)"
          style="lg:col-span-2"
        />

        <Input
          type="date"
          name="validUntil"
          placeholder="Valid Until"
          icon="ri-calendar-line"
        />

        <Button style="md:w-56 w-full lg:col-span-2" label="Add Coupon" />
      </form>
    </section>
  );
};

export default AddCoupon;
