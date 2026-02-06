import { Outlet } from "react-router-dom";

const data = [
  {
    id: 1,
    content: "這是post1",
  },
  {
    id: 2,
    content: "這是post2",
  },
  {
    id: 3,
    content: "這是post3",
  },
];

const Post = () => {
  return (
    <>
      <h2>這是Post頁面</h2>
      <Outlet context={data} />
    </>
  );
};

export default Post;
