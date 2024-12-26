import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Pages/Profile";
import NotFound from "./components/Pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = React.useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar user={user} />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                user ? (
                  <Profile user={user} />
                ) : (
                  <p>Please log in to view your profile.</p>
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
