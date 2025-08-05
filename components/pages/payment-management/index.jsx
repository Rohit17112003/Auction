"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";
import Button from "@/components/atoms/Button";

const PaymentManagement = () => {
  return (
    <>
      <BannerButton route="/" label="Transactions and Payment details" />
      <section className="mt-6 w-full rounded-xl bg-white shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm text-nowrap">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-4">Auction ID</th>
                <th className="px-4 py-4">Bidder ID</th>
                <th className="px-4 py-4">Bidder</th>
                <th className="px-4 py-4">Transaction Date</th>
                <th className="px-4 py-4">Amount to Vendor</th>
                <th className="px-4 py-4">GST</th>
                <th className="px-4 py-4">Payment Status</th>
                <th className="px-4 py-4">Vendor Invoice</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    auctionId,
                    customer,
                    bidderId,
                    transactionDate,
                    amount,
                    gst,
                    status,
                  },
                  index,
                ) => {
                  return (
                    <tr
                      key={index}
                      className={`${index !==  data.length -1 ? "border-b border-lightgray" : ""}  text-center`}
                    >
                      <td className="px-4 py-6 font-medium">{auctionId}</td>
                      <td className="px-4 py-6 font-medium">{bidderId}</td>
                      <td className="px-4 py-6 font-medium capitalize">
                        {customer}
                      </td>
                      <td className="px-4 py-6 font-medium">
                        {transactionDate}
                      </td>
                      <td className="px-4 py-6 font-medium">₹{amount}</td>
                      <td className="px-4 py-6 font-medium">₹{gst}</td>
                      <td className="px-4 py-6">
                        <span
                          className={`inline-block w-[90%] rounded px-2 py-1 text-sm font-medium capitalize ${
                            status === "pending"
                              ? "bg-red-100 text-red-600"
                              : "bg-teal-100 text-teal-600"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="px-4 py-6 ">
                        <i className="ri-download-2-fill text-xl font-light cursor-pointer"></i>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-center pb-10">
        <Button label="Print Report" style="md:w-56 mt-6 w-full" />
      </div>
    </>
  );
};

export default PaymentManagement;

const data = [
  {
    auctionId: "HDYE7484",
    bidderId: "USR123",
    customer: "Vedant",
    transactionDate: "04 Sep 2019",
    amount: 500,
    gst: 90,
    status: "completed",
  },
  {
    auctionId: "HJKL7821",
    bidderId: "USR456",
    customer: "Aarav",
    transactionDate: "12 Oct 2020",
    amount: 1200,
    gst: 180,
    status: "completed",
  },
  {
    auctionId: "GHTY5689",
    bidderId: "USR789",
    customer: "Riya",
    transactionDate: "22 Jan 2021",
    amount: 300,
    gst: 54,
    status: "pending",
  },
  {
    auctionId: "POIU3456",
    bidderId: "USR012",
    customer: "Dev",
    transactionDate: "03 Mar 2023",
    amount: 900,
    gst: 162,
    status: "completed",
  },
  
];
