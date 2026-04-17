import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import type { Post } from "../utils/utils";
import styles from "./Fetchnormal.module.css";

const FetchNormal = () => {
  const { data, error, isLoading } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    fetcher,
  );

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading posts</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Post List</h1>
      <ul className={styles.list}>
        {data?.map((post) => (
          <div className={styles.postRow} key={post.id}> {post.title}</div>
        ))}
      </ul>
    </div>
  );
};

export default FetchNormal;
