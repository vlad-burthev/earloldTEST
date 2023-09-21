import { useEffect, type FC } from "react";
import LeftPanel from "../components/LeftPanel/LeftPanel";
import Comments from "../components/Comments/Comments";
import Items from "../components/Items/Items";
import styles from "./Main.module.scss";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  TItem,
  setItems,
  setSelectedItem,
} from "../store/itemsSlice/itemsSlice";

interface MainProps {}

const Main: FC<MainProps> = () => {
  const { items, selectedItem } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const saveItemsToLocalStorage = (items: TItem[]) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const saveSelectedItemToLocalStorage = (selectedItem: number | null) => {
    localStorage.setItem("selectedItem", String(selectedItem));
  };

  useEffect(() => {
    if (items.length > 0) saveItemsToLocalStorage(items);

    if (selectedItem !== null) saveSelectedItemToLocalStorage(selectedItem);
  }, [items, selectedItem]);

  useEffect(() => {
    const curItems = localStorage.getItem("items");
    const curSelectedItem: string = localStorage.getItem("selectedItem")!;
    if (curItems) {
      const parsedItems = JSON.parse(curItems);
      dispatch(setItems(parsedItems));

      const parsedSelectedItem = JSON.parse(curSelectedItem);
      dispatch(setSelectedItem(parsedSelectedItem));
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <LeftPanel />
      <main className={styles.posts}>
        <div className={styles.contnet}>
          <Items />
          <Comments />
        </div>
      </main>
    </div>
  );
};

export default Main;
