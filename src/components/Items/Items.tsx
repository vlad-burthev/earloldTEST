import type { FC } from "react";
import AddItemForm from "./AddItemForm/AddItemForm";
import UiBox from "../UI/UiBox/UiBox";
import ItemList from "./ItemList/ItemList";
import UiTitle from "../UI/UiTitle/UiTitle";

interface ItemsProps {}

const Items: FC<ItemsProps> = () => {
  return (
    <UiBox>
      <div>
        <UiTitle>Items</UiTitle>
        <AddItemForm />
        <ItemList />
      </div>
    </UiBox>
  );
};

export default Items;
