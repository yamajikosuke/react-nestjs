import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Posts = ({
  setPostId,
}: {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data, status, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      return data;
    },
  });

  if (status === "pending") {
    return <p>ロード中...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  console.log(data);

  return (
    <div>
      <h1>ポスト一覧</h1>
      <div>
        {data.map((post: any) => (
          <p key={post.id}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="javascript:void(0)"
              style={{ fontWeight: "bold", color: "green" }}
            >
              {post.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Posts;
