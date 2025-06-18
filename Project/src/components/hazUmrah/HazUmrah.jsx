import Banner from "@/commonComponents/banner/Banner";
import Offer from "@/commonComponents/offer/Offer";
import Testimonial from "@/commonComponents/testimonials/Testimonial";
import styles from "./HazUmrah.module.scss";

const HazUmrah = () => {
  return (
    <div className={styles.flex}>
      <h1 className={styles.heading}>Haz & Umrah Packages</h1>
      <Banner type="hazUmrah" />
      <Offer type="hazUmrah" />
      <Testimonial type="hazUmrah"/>
    </div>
  );
};

export default HazUmrah;
