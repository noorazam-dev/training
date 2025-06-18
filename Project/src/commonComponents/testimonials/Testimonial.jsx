"use client";

import { Card } from "antd";
import styles from "./Testimonial.module.scss";

const Testimonial = ({ type }) => {
  const allTestimonials = {
    hazUmrah: [
      {
        name: "Ahmed Khan",
        feedback: "Excellent service and well-organized Umrah trip!",
      },
      {
        name: "Zainab Sheikh",
        feedback: "Affordable packages with great hotel options.",
      },
      {
        name: "Sana Malik",
        feedback: "The Hajj arrangements were seamless and memorable.",
      },
    ],
    visa: [
      {
        name: "Fatima Ali",
        feedback: "Highly professional team. Got my visa in just 2 days!",
      },
      {
        name: "Ali Raza",
        feedback: "Fast and reliable visa processing service.",
      },
      {
        name: "Sara Ahmed",
        feedback: "Great support throughout the visa application process.",
      },
    ],
    hotel: [
      {
        name: "Mohammad Usman",
        feedback: "Comfortable rooms and great location near Haram.",
      },
      {
        name: "Ayesha Khan",
        feedback: "Friendly staff and excellent hotel deals.",
      },
      {
        name: "Bilal Hassan",
        feedback: "Highly recommend their hotel booking services.",
      },
    ],
    airticket: [
      {
        name: "Zain Ul Abidin",
        feedback: "Got cheap flights with perfect timings.",
      },
      {
        name: "Nida Farooq",
        feedback: "Easy booking process and great customer support.",
      },
      {
        name: "Omar Khalid",
        feedback: "Affordable air tickets for family trips.",
      },
    ],
  };

  const testimonials = allTestimonials[type];

  return (
    <>
      <h1 className={styles.heading}>What Our Customers Say</h1>

      <div className={styles.container}>
        {testimonials.map((item, index) => (
          <Card key={index} className={styles.card}>
            <div className={styles.cardText}>"{item.feedback}"</div>
            <div className={styles.author}>— {item.name}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
