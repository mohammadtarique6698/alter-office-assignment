/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const userPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(userPosts);
    };

    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white shadow rounded mb-2">
          <p>{post.text}</p>
          {post.images?.map((url, index) => (
            <img key={index} src={url} alt="Post" className="mt-2 w-full" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
