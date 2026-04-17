import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { PostItem, type Post } from "./PostItem";
import styles from "./Fetchwithitem.module.css";

const FetchWithItem = () => {
  const { data, error, isLoading } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    fetcher,
  );

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading posts</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Post List</h1>
      <ul className={styles.list}>
        {data?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default FetchWithItem;
