import { useState, type FC } from "react";
import UiInput from "../../UI/UiInput/UiInput";
import styles from "./AddItemForm.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  createItem,
  setSelectedItem,
} from "../../../store/itemsSlice/itemsSlice";

interface AddItemFormProps {}

const AddItemForm: FC<AddItemFormProps> = () => {
  const { selectedItem } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const [itemName, setItemName] = useState("");
  const addItemHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (itemName.length > 0) {
      const newItem = {
        id: new Date().getTime(),
        name: itemName,
        comments: [],
      };
      dispatch(createItem(newItem));
      if (selectedItem === null) dispatch(setSelectedItem(newItem.id));
    }
    setItemName("");
  };

  return (
    <form className={styles.form}>
      <UiInput
        type="text"
        required
        placeholder="Type name here..."
        onChange={(e) => {
          setItemName(e.target.value);
        }}
        value={itemName}
      />
      <button
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          addItemHandler(e)
        }
      >
        Add New
      </button>
    </form>
  );
};

export default AddItemForm;
