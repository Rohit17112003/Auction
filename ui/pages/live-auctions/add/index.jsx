"use client";
import Button from "@/ui/atoms/Button";
import BannerButton from "@/ui/atoms/BannerButton";
import Input from "@/ui/atoms/Input";
import Textarea from "@/ui/atoms/TextArea";
import ImageUploader from "@/ui/molecules/ImageUploader";
import { useState } from "react";

const AddAuction = () => {
  const [formData, setFormData] = useState({
    productName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="space-y-6">
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
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Expected Price"
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Date of Auction"
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Duration"
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Door Delivery"
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Door Delivery Terms"
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="Match The Offer"
        />
        <Input
          id="productName"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          placeholder="How Many Winners can Match The Offer"
        />

        <Button style="w-40 lg:col-span-2" label="Add" />
      </form>
    </section>
  );
};

export default AddAuction;
