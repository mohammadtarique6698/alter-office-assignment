/* eslint-disable react/prop-types */
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const EditProfile = ({ user, onClose }) => {
  const [name, setName] = useState(user.displayName || "");
  const [bio, setBio] = useState(user.bio || "");

  const handleUpdateProfile = async () => {
    try {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, { name, bio });
      alert("Profile updated successfully");
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <button
        onClick={handleUpdateProfile}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};

export default EditProfile;
