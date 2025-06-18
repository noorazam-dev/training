
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
//         setActiveTab(key);
//       });
//     } else {
//       setActiveTab(key);
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
//         <div className={styles.tabPaneWrapper}>
//           <div className={`${styles.tabPane} ${activeTab === "hazUmrah" ? styles.active : ""}`}>
//             <HazUmrah />
//           </div>
//           <div className={`${styles.tabPane} ${activeTab === "visa" ? styles.active : ""}`}>
//             <Visa />
//           </div>
//           <div className={`${styles.tabPane} ${activeTab === "hotel" ? styles.active : ""}`}>
//             <Hotel />
//           </div>
//           <div className={`${styles.tabPane} ${activeTab === "airticket" ? styles.active : ""}`}>
//             <AirTicket />
//           </div>
//         </div>
//       </Content>
//     </Layout>
//   );
// }












"use client"
import { Tabs, Layout } from "antd";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./NavigationTab.module.scss";
import Visa from "@/components/visa/Visa";
import AirTicket from "@/components/airTicketing/AirTicket";
import Hotel from "@/components/hotel/Hotel";
import HazUmrah from "@/components/hazUmrah/HazUmrah";

const { Header, Content } = Layout;

export default function NavigationTab() {
  const [activeTab, setActiveTab] = useState("hazUmrah");

  const tabVariants = {
    initial: { opacity: 0.95, x: 2 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0.95, x: -2 },
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
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "hazUmrah" && (
              <motion.div
                key="hazUmrah"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className={styles.tabPane}
              >
                <HazUmrah />
              </motion.div>
            )}

            {activeTab === "visa" && (
              <motion.div
                key="visa"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className={styles.tabPane}
              >
                <Visa />
              </motion.div>
            )}

            {activeTab === "hotel" && (
              <motion.div
                key="hotel"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className={styles.tabPane}
              >
                <Hotel />
              </motion.div>
            )}

            {activeTab === "airticket" && (
              <motion.div
                key="airticket"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className={styles.tabPane}
              >
                <AirTicket />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Content>
    </Layout>
  );
}









// "use client";

// import { Tabs, Layout } from "antd";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import styles from "./NavigationTab.module.scss";
// import Visa from "@/components/visa/Visa";
// import AirTicket from "@/components/airTicketing/AirTicket";
// import Hotel from "@/components/hotel/Hotel";
// import HazUmrah from "@/components/hazUmrah/HazUmrah";

// const { Header, Content } = Layout;

// export default function NavigationTab() {
//   const [activeTab, setActiveTab] = useState("hazUmrah");

//   return (
//     <Layout>
//       <Header className={styles.header}>
//         <Tabs
//           activeKey={activeTab}
//           onChange={setActiveTab}
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
//         <div className={styles.tabPaneWrapper}>
//           <AnimatePresence mode="wait">
//             {activeTab === "hazUmrah" && (
//               <motion.div
//                 key="hazUmrah"
//                 initial={{ opacity: 0.6, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -1 }}
//                 transition={{ duration: 0.1, ease: "easeInOut" }}
//                 className={styles.tabPane}
//               >
//                 <HazUmrah />
//               </motion.div>
//             )}

//             {activeTab === "visa" && (
//               <motion.div
//                 key="visa"
//                 initial={{ opacity: 0.6, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -1 }}
//                 transition={{ duration: 0.1, ease: "easeInOut" }}
//                 className={styles.tabPane}
//               >
//                 <Visa />
//               </motion.div>
//             )}

//             {activeTab === "hotel" && (
//               <motion.div
//                 key="hotel"
//                 initial={{ opacity: 0.6, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -1 }}
//                 transition={{ duration: 0.1, ease: "easeInOut" }}
//                 className={styles.tabPane}
//               >
//                 <Hotel />
//               </motion.div>
//             )}

//             {activeTab === "airticket" && (
//               <motion.div
//                 key="airticket"
//                 initial={{ opacity: 0.6, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -1 }}
//                 transition={{ duration: 0.1, ease: "easeInOut" }}
//                 className={styles.tabPane}
//               >
//                 <AirTicket />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </Content>
//     </Layout>
//   );
// }
