import styles from "./Checkbox.module.scss";
import { ICheckbox } from "./Checkbox.interface.ts";
import { useText } from "../../contexts/index.ts";

function Checkbox({ label }: ICheckbox) {
  const { onCheckbox } = useText();

  return (
    <div className={styles["checkbox-wrapper"]}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        onChange={onCheckbox}
      />
      <label className={styles["checkbox-label"]} htmlFor="checkbox">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
