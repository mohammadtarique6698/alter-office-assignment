/* eslint-disable react/prop-types */
import { useState } from "react";
import EditProfile from "../Profile/EditProfile";
import UserPosts from "../Profile/UserPosts";

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={user.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{user.displayName || "User"}</h2>
          <p>{user.bio || "No bio available"}</p>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <EditProfile user={user} onClose={() => setIsEditing(false)} />
      )}

      <UserPosts userId={user.uid} />
    </div>
  );
};

export default Profile;
