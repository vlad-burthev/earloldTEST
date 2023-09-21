import { useState, type FC, useEffect } from "react";
import UiBox from "../UI/UiBox/UiBox";
import UiTitle from "../UI/UiTitle/UiTitle";
import CommentsList from "./CommentsList/CommentsList";
import AddCommentForm from "./AddCommentForm/AddCommentForm";
import { useAppSelector } from "../../store/store";
import { TComments } from "../../store/itemsSlice/itemsSlice";

interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
  const { items, selectedItem } = useAppSelector((state) => state.items);
  const [comments, setComments] = useState<TComments[]>([]);
  useEffect(() => {
    if (selectedItem !== null) {
      const item = items.find((item) => item.id === selectedItem);

      if (item && item.comments) {
        setComments(item.comments);
      } else {
        setComments([]);
      }
    }
  }, [items]);

  return (
    <UiBox>
      <UiTitle>Comments #{selectedItem !== null ? selectedItem : ""}</UiTitle>
      {comments.length !== 0 && <CommentsList comments={comments} />}

      <AddCommentForm />
    </UiBox>
  );
};

export default Comments;
