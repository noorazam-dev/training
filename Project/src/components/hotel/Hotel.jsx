import Banner from "@/commonComponents/banner/Banner";
import Offer from "@/commonComponents/offer/Offer";
import Testimonial from "@/commonComponents/testimonials/Testimonial";
import styles from "./Hote.module.scss"


const Hotel = () => {
  return (
    <div className={styles.flex}>
      <h1 className={styles.heading}>Hotel</h1>
      <Banner type="hotel"/>
      <Offer type="hotel"/>
      <Testimonial type="hotel"/>
    </div>
  );
};

export default Hotel;
