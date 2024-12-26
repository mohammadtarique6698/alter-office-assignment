import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleAuthButton = ({ onLogin }) => {
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onLogin(user);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
    >
      Continue with Google
    </button>
  );
};

export default GoogleAuthButton;
