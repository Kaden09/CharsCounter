import styles from "./Checkbox.module.scss";
import { ICheckbox } from "./Checkbox.interface.ts";

function Checkbox({ label }: ICheckbox) {
  return (
    <div className={styles["checkbox-wrapper"]}>
      <input className={styles.checkbox} type="checkbox" id="checkbox" />
      <label className={styles["checkbox-label"]} htmlFor="checkbox">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
