/* eslint-disable react/prop-types */
// src/components/Profile/UserProfile.jsx
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
    };

    fetchProfile();
  }, [userId]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="p-4 bg-white rounded-md shadow">
      <img
        src={profile.picture}
        alt={profile.name}
        className="w-16 h-16 rounded-full"
      />
      <h3 className="font-bold">{profile.name}</h3>
      <p>{profile.bio}</p>
    </div>
  );
};

export default UserProfile;
