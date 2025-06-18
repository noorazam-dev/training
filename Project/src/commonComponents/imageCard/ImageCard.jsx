"use client";

import { Card } from 'antd';
import styles from './ImageCard.module.scss';
import Image from 'next/image';


const ImageCard = ({ title, imageSrc }) => {
  return (
    <Card      
      className={styles.card}
      cover={
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={250}
          className={styles.image}
        />
      }
    >
    </Card>
  );
};

export default ImageCard;
