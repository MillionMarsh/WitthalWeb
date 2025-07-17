
interface Dashboard1aProps {
  onClose: () => void;
}

export default function Dashboard1a({onClose}: Dashboard1aProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-[#F0F8FA] w-[700px] max-h-[90vh] overflow-auto p-6 rounded border-2 border-blue-500 shadow-lg">
        {/* Title and X button in same line */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-center flex-1">ADD BL</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl font-bold ml-4"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* BL Details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">BL Details</label>
            <input
              type="text"
              placeholder="Enter BL number"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Weight Details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Weight Details</label>
            <input
              type="text"
              placeholder="Total Weight"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Contract Details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Contract Details <span className="text-red-600 font-bold">-</span>
            </label>
            <input
              type="text"
              placeholder="Enter Contracts"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* PRICE */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Price <span className="text-red-600 font-bold">-</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Proforma Details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Proforma Details</label>
            <input
              type="text"
              placeholder="Enter Proforma"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Amount</label>
            <input
              type="text"
              placeholder="Amount"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Invoice Number */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Invoice Number</label>
            <input
              type="text"
              placeholder="Enter Invoice Number"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Weight Details (again) */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Weight Details</label>
            <input
              type="text"
              placeholder="Total Weight"
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Ship details + Total FCL + Containers */}
        <div className="grid grid-cols-4 gap-4 mt-3">
          {/* Ship Details column (2-wide vertically stacked) */}
          <div className="col-span-2 flex flex-col gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Ship Name</label>
              <input
                type="text"
                placeholder="Ship name"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Ship Number</label>
              <input
                type="text"
                placeholder="Ship Number"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Departure port</label>
              <input
                type="text"
                placeholder="Departure port"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Arrival port</label>
              <input
                type="text"
                placeholder="Arrival port"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* Right side: Total FCL */}
          <div className="col-span-2 flex flex-col gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Total FCL</label>
              <input
                type="text"
                placeholder="Total FCL"
                className="border border-gray-300 px-3 py-2 rounded"
              />
            </div>

           {[1, 2, 3].map((idx) => (
            <div key={idx} className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Container No</label>
                <input
                  type="text"
                  placeholder="Container No"
                  className="border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Weight</label>
                <input
                  type="text"
                  placeholder="Weight"
                  className="border border-gray-300 px-3 py-2 rounded"
                />
              </div>
            </div>
          ))}

          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-4">
          <button className="bg-[#133a78] text-white px-4 py-2 rounded shadow hover:bg-[#1e4a91]">
            Fetch Datas from Google sheet
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
