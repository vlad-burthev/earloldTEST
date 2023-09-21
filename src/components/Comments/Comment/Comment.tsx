import type { FC } from "react";
import styles from "./Comment.module.scss";
import { TComments } from "../../../store/itemsSlice/itemsSlice";

interface CommentProps {
  comment: TComments;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <li className={styles.comment}>
      <div style={{ backgroundColor: comment.color }}></div>
      <p>{comment.body}</p>
    </li>
  );
};

export default Comment;
