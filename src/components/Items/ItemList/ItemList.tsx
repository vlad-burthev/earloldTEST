import type { FC } from "react";
import styles from "./ItemList.module.scss";
import Item from "../Item/Item";
import { useAppSelector } from "../../../store/store";

interface ItemListProps {}

const ItemList: FC<ItemListProps> = () => {
  const { items } = useAppSelector((state) => state.items);

  if (items.length === 0) return <h4 style={{ marginTop: 10 }}>No items</h4>;

  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
