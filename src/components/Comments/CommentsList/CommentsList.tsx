import { type FC } from "react";
import Comment from "../Comment/Comment";
import styles from "./CommentsList.module.scss";
import { TComments } from "../../../store/itemsSlice/itemsSlice";
interface CommentsListProps {
  comments: TComments[];
}

const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  if (comments.length === 0) return;

  return (
    <div>
      <ul className={styles.list}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
