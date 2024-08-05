import React from 'react';

interface TabProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export const Tabs: React.FC<TabProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="mb-4">
      <div className="sm:hidden">
        <select
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
          value={activeTab}
          onChange={(e) => onTabClick(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="dark:border-b dark:border-gray-900 border-b">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabClick(tab.id)}
                className={`${activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium font-sora`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Tabs