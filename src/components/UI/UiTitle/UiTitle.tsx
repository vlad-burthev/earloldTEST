import type { FC } from "react";
import styles from "./UiTitle.module.scss";

interface UiTitleProps {
  children: React.ReactNode;
}

const UiTitle: FC<UiTitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default UiTitle;
