
import { useState } from 'react';
import logoImage from '../../assets/WitthalLogoHorizontal.png';
 import ACCDetailsPage from './AccDetails.tsx';
  import BlDetails from './BlDetails.tsx';
// const [open, setOpen] = useState(true)


interface LandingPageProps {
  logout: () => void;
}

const LandingPage = ({ logout }: LandingPageProps) => {
 const [activeTab, setActiveTab] = useState("BL Details");
 const tabs = ["BL Details", "Doc Details", "Acc Details"];
  return (


    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#274796] text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center bg-white ">
            <img
              src={logoImage}
              alt="Witthal Logo"
              className="p-4 pt-7 w-70"
            />
          </div>
          <nav className="space-y-4">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold px-4 py-6 shadow text-center cursor-pointer transition
                ${activeTab === tab ? "bg-[#12317F] text-white" : "text-white hover:bg-[#0654A0]"}
              `}
            >
              {tab}
            </div>
          ))}
        </nav>
        </div>
      </aside>

      {/* Main Content */}  
      <main className="flex-1 p-6">

        {activeTab == "BL Details" ? <BlDetails logout={logout} /> : <div></div>}
        {activeTab == "Doc Details"? <div className="text-center text-gray-500">Document Details will be here</div> : <div></div> }
        {activeTab == "Acc Details"? <ACCDetailsPage logout={logout} />: <div></div>}
        

      </main>
    </div>
  );
};

export default LandingPage;
