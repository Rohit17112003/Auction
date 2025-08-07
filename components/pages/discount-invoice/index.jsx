"use client";
import Button from "@/components/atoms/Button";
import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";

const DiscountInvoice = () => {
  return (
    <section className="space-y-6 pb-8">
      <BannerButton
        route={"/"}
        label={"Discount Invoice"}
        title={
          "The discount invoice will be raised by the vendor through the DilSe52 mobile app/website. The invoice will be raised at the time of billing."
        }
      />
      <form className="grid gap-x-20 gap-y-6 lg:grid-cols-2" action="">
        <Input
          type="text"
          name="vendorName"
          placeholder="Vendor Name"
          icon="ri-user-3-line"
        />
        <Input
          type="text"
          name="vendorId"
          placeholder="Vendor ID"
          icon="ri-fingerprint-line"
        />
        <Input
          type="text"
          name="bidderName"
          placeholder="Bidder Name"
          icon="ri-user-line"
        />
        <Input
          type="text"
          name="bidderId"
          placeholder="Bidder ID"
          icon="ri-fingerprint-2-line"
        />
        <Input
          type="text"
          name="productName"
          placeholder="Product Name"
          icon="ri-shopping-bag-3-line"
        />
        <Input
          type="text"
          name="hsnCode"
          placeholder="HSN Code"
          icon="ri-hashtag"
        />
        <Input
          type="text"
          name="productDetails"
          placeholder="Product Details"
          icon="ri-file-text-line"
        />
        <Input
          type="number"
          name="marketPrice"
          placeholder="Price(market value in INR)"
          icon="ri-money-rupee-circle-line"
        />
        <Input
          type="text"
          name="discountCouponCode"
          placeholder="Discount Coupon Code"
          icon="ri-coupon-2-line"
        />
        <Input
          type="text"
          name="discountOffered"
          placeholder="Of Discount Offered"
          icon="ri-percent-line"
        />
        <Input
          type="text"
          name="finalPayment"
          placeholder="Final Payment After Discount"
          icon="ri-wallet-3-line"
        />
        <Input
          type="text"
          name="gst"
          placeholder="GST"
          icon="ri-file-text-line"
        />
        <Input
          type="text"
          name="dilseCharges"
          placeholder="Charges for DilSe52(2% of final amount)"
          icon="ri-bank-card-line"
        />
        <Input
          type="text"
          name="discountInvoiceNo"
          placeholder="Discount Invoice Number"
          icon="ri-file-list-2-line"
        />
        <Button style="md:w-56 w-full lg:col-span-2" label="Generate" />
      </form>
    </section>
  );
};

export default DiscountInvoice;
