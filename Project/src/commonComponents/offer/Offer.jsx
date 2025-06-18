"use client";

import { Card } from "antd";
import styles from "./Offer.module.scss";

const Offer = ({ type }) => {
  const allOffers = {
    hazUmrah: [
      "Hajj Early Bird Discount",
      "Umrah Family Packages",
      "Special Ziarat Deals",
      "Exclusive Hajj Packages",
    ],
    visa: [
      "Visa Fast-Track Service",
      "Group Visa Discount",
      "Business Visa Special",
      "Student Visa Offers",
    ],
    hotel: [
      "5-Star Hotel Discounts",
      "Family Suite Offers",
      "Near Haram Deals",
      "Extended Stay Discounts",
    ],
    airticket: [
      "Early Flight Booking Discount",
      "Group Air Ticket Offer",
      "Return Ticket Deal",
      "Seasonal Airfare Sale",
    ],
  };

  const offers = allOffers[type];

  return (
    <>
      <h1 className={styles.heading}>Special Offers</h1>

      <div className={styles.container}>
        {offers.map((offer) => (
          <Card key={offer} className={styles.card}>
            <div className={styles.cardText}>{offer}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Offer;
