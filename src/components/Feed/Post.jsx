/* eslint-disable react/prop-types */
// src/components/Feed/Post.jsx
import { useEffect, useRef } from "react";

const Post = ({ post }) => {
  const videoRef = useRef();

  useEffect(() => {
    const handlePlayPause = () => {
      const rect = videoRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };

    window.addEventListener("scroll", handlePlayPause);
    return () => window.removeEventListener("scroll", handlePlayPause);
  }, []);

  return (
    <div className="bg-white rounded-md shadow p-4 mb-4">
      <h3 className="font-bold">{post.author}</h3>
      <p>{post.text}</p>
      {post.images && (
        <div className="grid grid-cols-2 gap-2 mt-2">
          {post.images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Post ${index}`}
              className="rounded-md"
            />
          ))}
        </div>
      )}
      {post.video && (
        <video
          ref={videoRef}
          src={post.video}
          controls
          className="mt-2 rounded-md"
        />
      )}
      <span className="text-sm text-gray-500">{post.timestamp}</span>
    </div>
  );
};

export default Post;
