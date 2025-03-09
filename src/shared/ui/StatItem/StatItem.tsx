import styles from "./StatItem.module.scss";
import cx from "classix";
import { IStatItem } from "./StatItem.interface.ts";

function StatItem({
  statValue = 0,
  statLabel = "",
  background = "violet",
  icon,
  className = "",
}: IStatItem) {
  const clx = cx(
    styles["stat-item"],
    styles[`stat-item__${background}`],
    className,
  );

  return (
    <div className={clx}>
      <div className={styles["stat-value"]}>{statValue ? statValue : "00"}</div>
      <p className={styles["stat-label"]}>{statLabel}</p>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}

export default StatItem;
