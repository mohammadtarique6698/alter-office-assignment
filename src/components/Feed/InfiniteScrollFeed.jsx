// src/components/Feed/InfiniteScrollFeed.jsx
import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import Post from "./Post";

const InfiniteScrollFeed = () => {
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("timestamp", "desc"), limit(20));

    const docs = await getDocs(q);
    const lastVisible = docs.docs[docs.docs.length - 1];
    setLastDoc(lastVisible);
    setPosts(docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };

  const fetchMorePosts = async () => {
    if (!lastDoc) return;
    setLoading(true);
    const postsRef = collection(db, "posts");
    const q = query(
      postsRef,
      orderBy("timestamp", "desc"),
      startAfter(lastDoc),
      limit(20)
    );

    const docs = await getDocs(q);
    const lastVisible = docs.docs[docs.docs.length - 1];
    setLastDoc(lastVisible);
    setPosts((prev) => [
      ...prev,
      ...docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {loading && <p>Loading...</p>}
      <div
        onScroll={(e) => {
          if (
            e.target.scrollHeight - e.target.scrollTop ===
            e.target.clientHeight
          ) {
            fetchMorePosts();
          }
        }}
      />
    </div>
  );
};

export default InfiniteScrollFeed;
