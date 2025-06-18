"use client";

import ImageCard from "../../commonComponents/imageCard/ImageCard";
import styles from "./Banner.module.scss";

const Banner = ({ type }) => {
  const banners = {
    visa: [
      { title: "Visa Processing", imageSrc: "/images/visa1.avif" },
      { title: "Tourist Visa", imageSrc: "/images/visa2.avif" },
      { title: "Business Visa", imageSrc: "/images/visa3.avif" },
      { title: "Urgent Visa", imageSrc: "/images/visa4.avif" },
    ],
    hotel: [
      { title: "5-Star Hotels", imageSrc: "/images/hotel1.avif" },
      { title: "Budget Hotels", imageSrc: "/images/hotel2.avif" },
      { title: "Near Haram", imageSrc: "/images/hotel3.avif" },
      { title: "Family Rooms", imageSrc: "/images/hotel4.avif" },
    ],
        airticket: [
      { title: "Cheap Flights", imageSrc: "/images/airticket1.avif" },
      { title: "Direct Flights", imageSrc: "/images/airticket2.avif" },
      { title: "Group Booking", imageSrc: "/images/airticket3.avif" },
      { title: "Return Offers", imageSrc: "/images/airticket4.avif" },
    ],
    hazUmrah: [
      { title: "Hajj", imageSrc: "/images/haz.jpg" },
      { title: "Umrah", imageSrc: "/images/haz2.jpg" },
      { title: "Ziarat", imageSrc: "/images/haz3.jpg" },
      { title: "Packages", imageSrc: "/images/haz4.jpg" },
    ],
  };

  const data = banners[type];

  return (
    <>
      <h1 className={styles.heading}>Banner</h1>
      <div className={styles.container}>
        {data.map((item) => (
          <ImageCard
            key={item.title}
            title={item.title}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </>
  );
};

export default Banner;
