import BannerButton from "@/components/atoms/BannerButton";
import Image from "next/image";

const RedeemHistory = () => {
  return (
    <section className="space-y-6">
      <BannerButton route={"/auction-history"} label={"Auction History"} />
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-6 flex items-center gap-4 text-2xl font-bold">
          <Image
            className="h-14 w-14"
            src="/image/icon/star.png"
            alt="star"
            width={100}
            height={100}
          />
          Redeem History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse border border-gray-100">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Date</th>
                <th className="border border-gray-200 px-4 py-2">Category</th>
                <th className="border border-gray-200 px-4 py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Vedant
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  14-12-2023
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Gold
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  -200
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Vedant
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  14-12-2023
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Gold
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  -200
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Vedant
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  14-12-2023
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Gold
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  -200
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Vedant
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  14-12-2023
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Gold
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  -200
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Vedant
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  14-12-2023
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Gold
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  -200
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Vedant
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  14-12-2023
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  Gold
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  -200
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RedeemHistory;
