import type { FC } from "react";
import styles from "./Item.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  deleteItem,
  setSelectedItem,
} from "../../../store/itemsSlice/itemsSlice";

interface ItemProps {
  item: any;
}

const Item: FC<ItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { items, selectedItem } = useAppSelector((state) => state.items);

  const deleteItemHandler = (
    itemId: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    dispatch(deleteItem(itemId));

    if (items.length > 1) {
      const lastIndex = items.length - 1;

      if (items[lastIndex].id === itemId) {
        dispatch(setSelectedItem(items[lastIndex - 1].id));
      } else {
        dispatch(setSelectedItem(items[lastIndex].id));
      }
    } else {
      dispatch(setSelectedItem(null));
      localStorage.setItem("items", "[]");
      localStorage.setItem("selectedItem", "null");
    }
  };

  return (
    <li
      onClick={() => dispatch(setSelectedItem(item.id))}
      className={styles.item}
      style={{
        borderLeft: selectedItem === item.id ? "4px solid deeppink" : "",
      }}
    >
      <h4>{item.name}</h4>
      <div>
        <span>{item.comments.length}</span>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            deleteItemHandler(item.id, e)
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;
