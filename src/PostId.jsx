import { useOutletContext, useParams } from "react-router-dom";
const PostId = () => {
  const parma = useParams();
  const { postId } = parma;
  const data = useOutletContext();
  const singleDate = data.find((e) => e.id === Number(postId));

  return <h5>這是{singleDate.content}頁面</h5>;
};

export default PostId;
