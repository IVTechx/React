import { useState } from "react";
import styles from "./Postitem.module.css";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostItem = ({ post }: { post: Post }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.item}>
      <p className={styles.title}>{post.title}</p>
      <button className={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Show less" : "Show More..."}
      </button>
      {isOpen && <p className={styles.body}>{post.body}</p>}
    </li>
  );
};
