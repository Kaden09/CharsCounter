import styles from "./Checkbox.module.scss";
import { ICheckbox } from "./Checkbox.interface.ts";
import { useText } from "../../contexts/index.ts";

function Checkbox({ label }: ICheckbox) {
  const { onCheckbox } = useText();

  return (
    <label className={styles["checkbox-label"]} htmlFor="checkbox">
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        onChange={onCheckbox}
      />
      <span className={styles["custom-checkbox"]}></span>
      {label}
    </label>
  );
}

export default Checkbox;
