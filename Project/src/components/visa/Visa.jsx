import Banner from "@/commonComponents/banner/Banner";
import Offer from "@/commonComponents/offer/Offer";
import Testimonial from "@/commonComponents/testimonials/Testimonial";
import styles from "./Visa.module.scss";

const Visa = () => {
  return (
    <div className={styles.flex}>
      <h1 className={styles.heading}>Visa Services</h1>
      <Banner type="visa" />
      <Offer type="visa" />
      <Testimonial type="visa" />
    </div>
  );
};

export default Visa;
