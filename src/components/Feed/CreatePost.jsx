// src/components/Feed/CreatePost.jsx
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../utils/firebaseConfig";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        text,
        images,
        video,
        timestamp: serverTimestamp(),
        author: auth.currentUser.email,
      });
      setText("");
      setImages([]);
      setVideo("");
    } catch (error) {
      alert("Error creating post: " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-gray-100 rounded-md shadow"
    >
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input w-full"
      />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) =>
          setImages(
            [...e.target.files].map((file) => URL.createObjectURL(file))
          )
        }
        className="input"
      />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
        className="input"
      />
      <button type="submit" className="btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
