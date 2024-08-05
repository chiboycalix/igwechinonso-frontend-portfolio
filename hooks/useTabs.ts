import { useState } from "react";

export function useTabs(initialTab: string) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabClick,
  };
}
