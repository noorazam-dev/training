// // next view transition
// "use client";

// import { Tabs, Layout } from "antd";
// import { useState } from "react";
// import styles from "./NavigationTab.module.scss";
// import Visa from "@/components/visa/Visa";
// import AirTicket from "@/components/airTicketing/AirTicket";
// import Hotel from "@/components/hotel/Hotel";
// import HazUmrah from "@/components/hazUmrah/HazUmrah";

// const { Header, Content } = Layout;

// export default function NavigationTab() {
//   const [activeTab, setActiveTab] = useState("hazUmrah");

//   const handleTabChange = (key) => {
//     if (document.startViewTransition) {
//       document.startViewTransition(() => {
//         requestAnimationFrame(() => {
//           setActiveTab(key);
//         });
//       });
//     } else {
//       setActiveTab(key);
//     }
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "visa":
//         return <Visa />;
//       case "hotel":
//         return <Hotel />;
//       case "airticket":
//         return <AirTicket />;
//       case "hazUmrah":
//       default:
//         return <HazUmrah />;
//     }
//   };

//   return (
//     <Layout>
//       <Header className={styles.header}>
//         <Tabs
//           activeKey={activeTab}
//           onChange={handleTabChange}
//           type="card"
//           className={styles.customTabs}
//           items={[
//             { label: "Haz & Umrah", key: "hazUmrah" },
//             { label: "Visa", key: "visa" },
//             { label: "Hotel", key: "hotel" },
//             { label: "Air Ticket", key: "airticket" },
//           ]}
//         />
//       </Header>

//       <Content className={styles.contentArea}>
//         <div
//           className={styles.tabPaneWrapper}
//           style={{ viewTransitionName: "tab-content" }}
//         >
//           {renderTabContent()}
//         </div>
//       </Content>
//     </Layout>
//   );
// }


// framer motion
"use client";

import { Tabs, Layout } from "antd";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavigationTab.module.scss";
import Visa from "@/components/visa/Visa";
import AirTicket from "@/components/airTicketing/AirTicket";
import Hotel from "@/components/hotel/Hotel";
import HazUmrah from "@/components/hazUmrah/HazUmrah";

const { Header, Content } = Layout;

export default function NavigationTab() {
  const [activeTab, setActiveTab] = useState("hazUmrah");

  const fadeInTransition = { duration: 1, ease: "easeInOut" };

  const renderTabContent = () => {
    switch (activeTab) {
      case "visa": return <Visa />;
      case "hotel": return <Hotel />;
      case "airticket": return <AirTicket />;
      default: return <HazUmrah />;
    }
  };

  return (
    <Layout>
      <Header className={styles.header}>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          type="card"
          className={styles.customTabs}
          items={[
            { label: "Haz & Umrah", key: "hazUmrah" },
            { label: "Visa", key: "visa" },
            { label: "Hotel", key: "hotel" },
            { label: "Air Ticket", key: "airticket" },
          ]}
        />
      </Header>

      <Content className={styles.contentArea}>
        <div className={styles.tabPaneWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={fadeInTransition}
              className={styles.motionContent}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </Content>
    </Layout>
  );
}
