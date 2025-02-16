import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseconfig"; // Import Firebase auth
import Logo from "../../assets/logo1.png";
import "./Navbar.css"

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage and update state
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase
      localStorage.removeItem("user"); // Remove user from local storage
      setUser(null); // Clear user state
      setUserData(null); // Clear navbar user data
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="backdrop-blur-md bg-white/10 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10" />
          Zero-Margin
        </a>

        {/* User Login/Logout Section */}
        <div className="flex items-center gap-6">
          {userData ? (
            <>
              {/* Show User Profile Picture */}
              {userData.photoURL ? (
                <img
                  src={userData.photoURL}
                  alt="User"
                  className="w-12 h-12 rounded-full border border-gray-300"
                  referrerPolicy="no-referrer" // Prevents issues with some Google images
                />
              ) : (
                <div style={{fontWeight:700}} id="display_name" className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
                  {userData.displayName ? userData.displayName[0] : "U"}
                </div> // Show user's first letter if image is unavailable
              )}
              <span className="text-gray-800">Hello, {userData.displayName}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/")} className="bg-blue-500 text-white py-2 px-4 rounded">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
