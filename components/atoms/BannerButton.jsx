"use client"
import Link from "next/link";

const BannerButton = ({ label, route }) => {
  return (
    <div className="bg-lightyellow flex w-full items-center gap-6 rounded-xl md:p-5 p-4 text-light">
      <Link href={route}>
        <i className="ri-arrow-left-line ri-lg"></i>
      </Link>
      <span className="md:text-xl text-lg font-semibold">{label}</span>
    </div>
  );
};

export default BannerButton;
