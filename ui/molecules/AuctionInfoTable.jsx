"use client";

const AuctionInfoTable = () => {
  const auctionData = [
    {
      id: "AUC-001",
      name: "Rohit Rana",
      date: "2025-07-25",
      amount: "₹12,000",
      code: "DC2025",
      message: "Payment Success",
    },
    {
      id: "AUC-002",
      name: "Priya Verma",
      date: "2025-07-24",
      amount: "₹18,500",
      code: "DC2026",
      message: "Completed",
    },
    {
      id: "AUC-003",
      name: "Aman Gupta",
      date: "2025-07-23",
      amount: "₹9,750",
      code: "DC2027",
      message: "Confirmed",
    },
  ];

  return (
    <div className="bg-light w-full rounded-lg px-4 pt-5">
      <h1 className="text-text md:text-2rem mb-4 text-[1.3rem] font-bold">
        Current Successful Auction Info
      </h1>
      <div className="overflow-auto">
        <table className="w-[900px] rounded-lg text-left text-sm md:min-w-full">
          <thead className="bg-gray text-text text-lg">
            <tr>
              <th className="px-4 py-3">Auction ID</th>
              <th className="px-4 py-3">Bidder Name</th>
              <th className="px-4 py-3">Transaction Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Tax Inv</th>
            </tr>
          </thead>
          <tbody>
            {auctionData.map(
              ({ id, name, date, amount, code, message }, index) => (
                <tr
                  key={index}
                  className="text-text border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-6">{id}</td>
                  <td className="px-4 py-6">{name}</td>
                  <td className="px-4 py-6">{date}</td>
                  <td className="px-4 py-6">{amount}</td>
                  <td className="px-4 py-6">{code}</td>
                  <td className="px-4 py-6">{message}</td>
                  <td className="px-4 py-6">
                    <i className="ri-download-2-fill cursor-pointer text-lg font-light"></i>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuctionInfoTable;
