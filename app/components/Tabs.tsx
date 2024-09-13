export const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <div className="flex space-x-4">
    {["stats", "abilities", "moves", "evolution"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 rounded ${
          activeTab === tab ? "bg-[#ffcb08] text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
);
