import type { FC } from "react";
import styles from "./LeftPanel.module.scss";

interface LeftPanelProps {}

const LeftPanel: FC<LeftPanelProps> = () => {
  return (
    <aside className={styles.leftSide}>
      <div>
        <h2>DAYRY APP</h2>
        <p>Comment whit no sense</p>
      </div>
    </aside>
  );
};

export default LeftPanel;
