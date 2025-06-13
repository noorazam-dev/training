import Products from "@/commonComponents/Products";
import Header from "@/commonComponents/header";
import Sidebar from "@/components/sidebar";
import "@/styles/main.scss";
export default function Wrapper() {
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}
