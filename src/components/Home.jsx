import React from "react";
import Feed from "./Feed/Post";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <Feed />
    </div>
  );
};

export default Home;
