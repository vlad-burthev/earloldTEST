import type { FC } from "react";
import styles from "./UiBox.module.scss";

interface UiBoxProps {
  children: React.ReactNode;
}

const UiBox: FC<UiBoxProps> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default UiBox;
