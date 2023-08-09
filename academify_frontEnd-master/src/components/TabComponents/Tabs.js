import React, { useState } from "react";
import "./Tabs.css";
import Features from "../AllTabs/Features";
import AiFeature from "../AllTabs/AiFeatures";
import Alert from "../AllTabs/Alerts";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import FeaturesData from "../featureData";
import AiFeatureData from "../aiFeatureData";
import AlertData from "../notificationData";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [features, setFeatures] = useState(FeaturesData);
  const [aiFeatures, setAiFeatures] = useState(AiFeatureData);
  const [alertData, setAlerData] = useState(AlertData);

  return (
    <div className="relative max-w-[90%] max-h-full mt-4 items-center flex flex-col justify-between text-[22px] mx-auto">
      {/* Tab nav */}
      <div className="flex justify-between gap-6 items-center w-full list-none cursor-pointer mt-4 tab-nav">
        <TabNavItem
          title="Product Features"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="flex justify-center pl-[50px] text-center"
        />
        <div className="border border-black w-0 h-4"></div>
        <TabNavItem
          title="AI Features"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="border border-black w-0 h-4"></div>
        <TabNavItem
          title="Notification & Alerts"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="mt-4 tab-content">
        <TabContent id="tab1" activeTab={activeTab}>
          <Features features={features} />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <AiFeature aiFeatures={aiFeatures} />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Alert alertData={alertData} />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;

//  Functions to handle Tab Switching
// const handleTab1 = () => {
//   // update the state to tab1
//   setActiveTab("tab1");
// };
// const handleTab2 = () => {
//   // update the state to tab2
//   setActiveTab("tab2");
// };
