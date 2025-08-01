"use client";
import Button from "@/ui/atoms/Button";
import BannerButton from "@/ui/atoms/BannerButton";
import Input from "@/ui/atoms/Input";
import Textarea from "@/ui/atoms/TextArea";
import ImageUploader from "@/ui/molecules/ImageUploader";
import { useState } from "react";
import Select from "@/ui/atoms/Select";

const AddAuction = () => {
  const [formData, setFormData] = useState({
    productName: "",
    hsnCode: "",
    marketPrice: "",
    vendorExpectedPrice: "",
    gst: "",
    cgst: "",
    sgst: "",
    ccess: "",
    scess: "",
    finalVendorPrice: "",
    dateOfAuction: "",
    duration: "",
    doorDelivery: "",
    doorDeliveryTerms: "",
    matchTheOffer: "",
    winnersCount: "",
    top3SocialCause: "",
    startPriceBid: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="space-y-6 pb-8">
      <BannerButton route={"/live-auctions"} label="Add new product for auction" />
      <form className="grid gap-x-20 gap-y-6 lg:grid-cols-2" action="">
        <ImageUploader />
        <Textarea style="lg:col-span-2" placeholder="Description" />

        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Product Name"
          icon="ri-price-tag-3-line"
        />
        <Input
          id="hsnCode"
          name="hsnCode"
          onChange={handleChange}
          value={formData.hsnCode}
          placeholder="HSN Code"
          icon="ri-currency-line"
        />
        <Input
          id="marketPrice"
          name="marketPrice"
          onChange={handleChange}
          value={formData.marketPrice}
          placeholder="Market Price"
          icon="ri-bar-chart-line"
        />
        <Input
          id="vendorExpectedPrice"
          name="vendorExpectedPrice"
          onChange={handleChange}
          value={formData.vendorExpectedPrice}
          placeholder="Vendor Expected Price"
          icon="ri-money-dollar-circle-line"
        />
        <Input
          id="gst"
          name="gst"
          onChange={handleChange}
          value={formData.gst}
          placeholder="GST"
          icon="ri-file-text-line"
        />
        <Input
          id="cgst"
          name="cgst"
          onChange={handleChange}
          value={formData.cgst}
          placeholder="CGST"
          icon="ri-file-text-line"
        />
        <Input
          id="sgst"
          name="sgst"
          onChange={handleChange}
          value={formData.sgst}
          placeholder="SGST"
          icon="ri-file-text-line"
        />
        <Input
          id="ccess"
          name="ccess"
          onChange={handleChange}
          value={formData.ccess}
          placeholder="CCESS"
          icon="ri-percent-line"
        />
        <Input
          id="scess"
          name="scess"
          onChange={handleChange}
          value={formData.scess}
          placeholder="SCESS"
          icon="ri-percent-line"
        />
        <Input
          id="finalVendorPrice"
          name="finalVendorPrice"
          onChange={handleChange}
          value={formData.finalVendorPrice}
          placeholder="Final Vendor Price"
          icon="ri-cash-line"
        />
        <Input
          id="dateOfAuction"
          name="dateOfAuction"
          type="date"
          onChange={handleChange}
          value={formData.dateOfAuction}
          placeholder="Date of Auction"
          icon="ri-calendar-line"
        />

        <Select
          id="duration"
          name="duration"
          onChange={handleChange}
          value={formData.duration}
          icon="ri-time-line"
          placeholder="Select Duration"
          options={["1 Day", "3 Days", "1 Week", "Custom"]}
        />
        <Select
          id="doorDelivery"
          name="doorDelivery"
          onChange={handleChange}
          value={formData.doorDelivery}
          icon="ri-truck-line"
          placeholder="Door Delivery"
          options={["Yes", "No"]}
        />

        <Input
          id="doorDeliveryTerms"
          name="doorDeliveryTerms"
          onChange={handleChange}
          value={formData.doorDeliveryTerms}
          placeholder="Door Delivery Terms"
          icon="ri-file-text-line"
        />

        <Select
          id="matchTheOffer"
          name="matchTheOffer"
          onChange={handleChange}
          value={formData.matchTheOffer}
          icon="ri-shake-hands-line"
          placeholder="Match The Offer"
          options={["Yes", "No"]}
        />
        <Input
          id="winnersCount"
          name="winnersCount"
          onChange={handleChange}
          value={formData.winnersCount}
          placeholder="How Many Winners Can Match The Offer"
          icon="ri-user-star-line"
        />
        <Select
          id="top3SocialCause"
          name="top3SocialCause"
          onChange={handleChange}
          value={formData.top3SocialCause}
          icon="ri-heart-line"
          placeholder="Your Top 3 Preferred Social Cause"
          options={["Education", "Environment", "Healthcare", "Others"]}
        />
        <Input
          id="startPriceBid"
          name="startPriceBid"
          onChange={handleChange}
          value={formData.startPriceBid}
          placeholder="Start Price Bid (After Platform Charges)"
          icon="ri-price-tag-line"
        />

        <Button style="md:w-56 w-full lg:col-span-2" label="Add" />
      </form>
    </section>
  );
};

export default AddAuction;
