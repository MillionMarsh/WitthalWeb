import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import Dashboard1a from "../popup/Dashboard1a";


interface BLDetailsPageProps {
  logout: () => void;
}

const BLDetailsPage = ({ logout }: BLDetailsPageProps) => {
  const [open, setOpen] = useState(false);
  const blData = Array(6).fill({
    blNumber: "HLCUMLW240700045",
    conNumbers: ["HH/P/0029/24", "HH/P/0032/24", "HH/P/0033/24"],
    fcl: "10 Containers",
    blWeight: "264,040",
    consignee: "S:BROH RUBBER",
    cnee: "C: HOCK HIN",
    eta: "10/8/2024",
  });

  return (


    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-white">

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-[#133a78]">BL Details</h1>
                  <div className="flex gap-3">
                  <LuLogOut className="cursor-pointer hover:text-blue-600" onClick={logout} />
                  </div>
                </div>
        
                <div className="flex justify-between items-center my-4 gap-4">
                <input
                  type="text"
                  className="w-[80%] border border-2 border-black px-3 py-2 rounded"
                  placeholder="Search..."
                />
                <div className="w-[20%] flex gap-4  ">
                  <button className="w-[50%] border border-2 border-black bg-gray-100 px-4 py-2 rounded shadow hover:bg-gray-200">
                    All filters
                  </button>
                  <button className="w-[50%] border border-2 border-black bg-[#133a78] text-white px-4 py-2 rounded shadow hover:bg-[#1e4a91]"
                   onClick={() => setOpen(true)}
                   >
                    Add BL
                  </button>
                </div>
              </div>
                      {open && <Dashboard1a onClose={() => setOpen(false)} />}

        {/* Table */}
        <div className="bg-white shadow rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#274796] text-white border-2 border-black">
              <tr>
                <th className="text-left px-4 py-3">BL NUMBER</th>
                <th className="text-left px-4 py-3">CON NUMBERS</th>
                <th className="text-left px-4 py-3">FCL</th>
                <th className="text-left px-4 py-3">BL WEIGHT</th>
                <th className="text-left px-4 py-3">CONSIGNEE</th>
                <th className="text-left px-4 py-3">ETA/STATUS</th>
                <th className="text-left px-4 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {blData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-2 "border-gray-200"`}
                >
                  <td className="px-4 py-3">{item.blNumber}</td>
                  <td className="px-4 py-3">
                    {item.conNumbers.map((num: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                      <div key={i}>{num}</div>
                    ))}
                  </td>
                  <td className="px-4 py-3">{item.fcl}</td>
                  <td className="px-4 py-3">{item.blWeight}</td>
                  <td className="px-4 py-3">
                    {item.consignee}
                    <br />
                    {item.cnee}
                  </td>
                  <td className="px-4 py-3">{item.eta}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <FaEye className="cursor-pointer hover:text-blue-600" />
                    <FaEdit className="cursor-pointer hover:text-green-600" />
                    <FaTrash className="cursor-pointer hover:text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full bg-[#133a78] opacity-50 hover:opacity-100 cursor-pointer"
            ></span>
          ))}
        </div>
        
      </main>
    </div>
  );
};

export default BLDetailsPage;
