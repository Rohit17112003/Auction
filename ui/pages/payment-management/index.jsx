import Search from "@/ui/molecules/Search";

const PaymentManagement = () => {
  return (
    <section className="w-full rounded-xl bg-white pb-6 shadow">
      <Search />
      <div className="overflow-x-auto">
        <table className="w-full text-nowrap text-[#202224]">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-center font-semibold">
                Auction ID
              </th>
              <th className="px-4 py-3 text-center font-semibold">Customer</th>
              <th className="px-4 py-3 text-center font-semibold">
                Transaction Date
              </th>
              <th className="px-4 py-3 text-center font-semibold">Amount</th>
              <th className="px-4 py-3 text-center font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {payments.map((payment, index) => {
              const { auctionId, customer, transactionDate, amount, status } =
                payment;
              return (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-3 text-center font-medium">
                    {auctionId}
                  </td>
                  <td className="px-4 py-3 text-center font-medium">
                    {customer}
                  </td>
                  <td className="px-4 py-3 text-center font-medium capitalize">
                    {transactionDate}
                  </td>
                  <td className="px-4 py-3 text-center font-medium">
                    {amount}
                  </td>
                  <td className="flex justify-center px-4 py-3">
                    <p
                      className={` ${
                        status === "pending"
                          ? "bg-red-100 text-red-600"
                          : "bg-teal-100 text-teal-600"
                      } rounded px-2 py-1 text-center font-medium capitalize lg:w-[60%]`}
                    >
                      {status}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentManagement;

const payments = [
  {
    auctionId: "HDYE7484",
    customer: "Vedant",
    transactionDate: "04 Sep 2019",
    amount: 500,
    status: "completed",
  },
  {
    auctionId: "HDYE7484",
    customer: "Vedant",
    transactionDate: "04 Sep 2019",
    amount: 500,
    status: "completed",
  },
  {
    auctionId: "HDYE7484",
    customer: "Vedant",
    transactionDate: "04 Sep 2019",
    amount: 500,
    status: "pending",
  },
  {
    auctionId: "HDYE7484",
    customer: "Vedant",
    transactionDate: "04 Sep 2019",
    amount: 500,
    status: "completed",
  },
];
