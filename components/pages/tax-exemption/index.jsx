"use client";
import Button from "@/components/atoms/Button";
import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";
import ImageUploader from "@/components/molecules/ImageUploader";

const TaxExemption = () => {
  return (
    <section className="space-y-6 pb-8">
      <BannerButton route="/" label="Income Tax Exemption" />

      <form className="grid gap-x-20 gap-y-6 lg:grid-cols-2" action="">
        <Input
          name="auctionId"
          placeholder="Auction ID"
          type="text"
          icon="ri-auction-line"
        />
        <Input
          name="productId"
          placeholder="Product ID"
          type="text"
          icon="ri-product-hunt-line"
        />
        <Input
          name="vendorPrice"
          placeholder="Vendor Price"
          type="number"
          icon="ri-cash-line"
        />
        <Input
          name="gst"
          placeholder="GST"
          type="number"
          icon="ri-calculator-line"
        />
        <Input
          name="finalBidPrice"
          placeholder="Final Bid Price"
          type="number"
          icon="ri-money-dollar-box-line"
        />
        <Input
          name="taxExemptionValue"
          placeholder="Income Tax Exemption Value"
          type="number"
          icon="ri-file-chart-line"
        />

        <div>
          <Input
            name="issuingOrganization"
            placeholder="Social Organization Issuing Tax Exemption Form"
            type="text"
            icon="ri-government-line"
          />
          <p className="text-dark font-medium text-[1.1rem] tracking-wide my-5">
            Income Tax Exemption Document
          </p>
          <div className="grid grid-cols-2 gap-6">
            <ImageUploader />
            <ImageUploader />
          </div>
        </div>

        <Button style="md:w-56 w-full lg:col-span-2" label="Submit" />
      </form>
    </section>
  );
};

export default TaxExemption;
