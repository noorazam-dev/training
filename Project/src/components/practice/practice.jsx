import CalenderComp from "@/commonComponents/uikit/Calendar/Calendar";
import CurrentDate from "@/commonComponents/uikit/CurrentDate/CurrentDate";
import CurrentTime from "@/commonComponents/uikit/CurrentTime/CurrentTime";
import Date from "@/commonComponents/uikit/DatePiker/Date";
import Time from "@/commonComponents/uikit/Time/Time";
import styles from "@/components/practice/practice.module.scss";

export default function PracticePage() {
  return (
    <div className={styles.container}>
      <CalenderComp className={styles.calender} />
      <hr className={styles.line} />
      <Date className={styles.date} />
      <CurrentDate className={styles.date} />
      <hr className={styles.line} />
      <Time className={styles.time} />
      <CurrentTime className={styles.date} />
    </div>
  );
}
