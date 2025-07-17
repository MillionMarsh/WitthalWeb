import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import Dashboard2a from "../popup/Dashboard2a";
import { useState } from "react";

interface ACCDetailsPageProps {
  logout: () => void;
}

const ACCDetailsPage = ({ logout }: ACCDetailsPageProps) => {
  const accData = Array(10).fill({
    invNo: "V36013EEE",
    blNo: "TEM40015LD",
    date: "27.12.25",
    supplierName: "VANTAGE360",
    paidDate: "11.02.2025",
    currency: "USD",
    amount: "203,45.00",
    tenor: "53",
    dueDate: "25.02.203",
    interest: "2,459.00",
  });
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-white">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#133a78]">Acc details</h1>
          <div className="flex gap-3">
            <LuLogOut className="cursor-pointer hover:text-blue-600" onClick={logout} />
          </div>
        </div>

        {/* Search and buttons */}
        <div className="flex justify-between items-center my-4 gap-4">
          <input
            type="text"
            className="w-[80%] border border-2 border-black px-3 py-2 rounded"
            placeholder="Search..."
          />
          <div className="w-[20%] flex gap-4">
            <button className="w-[50%] border border-2 border-black bg-gray-100 px-4 py-2 rounded shadow hover:bg-gray-200">
              All filters
            </button>
            <button className="w-[50%] border border-2 border-black bg-[#133a78] text-white px-4 py-2 rounded shadow hover:bg-[#1e4a91]"
            onClick={() => setOpen(true)}>
              Add Details
            </button>
          </div>
        </div>
        {open && <Dashboard2a onClose={() => setOpen(false)} />}
        {/* Table */}
        <div className="bg-white shadow rounded overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#274796] text-white border-2 border-black">
              <tr>
                <th className="text-left px-4 py-3">INV NO</th>
                <th className="text-left px-4 py-3">BL NO</th>
                <th className="text-left px-4 py-3">DATE</th>
                <th className="text-left px-4 py-3">SUPPLIER NAME</th>
                <th className="text-left px-4 py-3">PAID DATE</th>
                <th className="text-left px-4 py-3">CURRENCY</th>
                <th className="text-left px-4 py-3">AMOUNT</th>
                <th className="text-left px-4 py-3">TENOR</th>
                <th className="text-left px-4 py-3">DUE DATE</th>
                <th className="text-left px-4 py-3">INTEREST</th>
                <th className="text-left px-4 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {accData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-2 border-black hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{item.invNo}</td>
                  <td className="px-4 py-3">{item.blNo}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.supplierName}</td>
                  <td className="px-4 py-3">{item.paidDate}</td>
                  <td className="px-4 py-3">{item.currency}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">{item.tenor}</td>
                  <td className="px-4 py-3">{item.dueDate}</td>
                  <td className="px-4 py-3">{item.interest}</td>
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

export default ACCDetailsPage;
