import { useState, type FC } from "react";
import styles from "./AddCommentForm.module.scss";
import { useAppDispatch } from "../../../store/store";
import { addComment } from "../../../store/itemsSlice/itemsSlice";

interface AddCommentFormProps {}

const AddCommentForm: FC<AddCommentFormProps> = () => {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("#000000");

  const addCommentHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (comment.length > 0) {
      const newComment = {
        id: new Date().getTime(),
        body: comment,
        color,
      };
      dispatch(addComment(newComment));
    }

    setComment("");
  };

  return (
    <form className={styles.form}>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={styles.color}
        type="color"
      />
      <textarea
        placeholder="Type comment here"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.textarea}
      />
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          addCommentHandler(e)
        }
        className={styles.btn}
      >
        Add New
      </button>
    </form>
  );
};

export default AddCommentForm;
