import Banner from "@/commonComponents/banner/Banner";
import Offer from "@/commonComponents/offer/Offer";
import Testimonial from "@/commonComponents/testimonials/Testimonial";
import styles from "./AirTicket.module.scss"

const AirTicket = () => {
  return (
    <div className={styles.flex}>
      <h1 className={styles.heading}>Air Ticket</h1>
      <Banner type="airticket"/>
      <Offer type="airticket"/>
      <Testimonial type="airticket"/>
    </div>
  );
};

export default AirTicket;
