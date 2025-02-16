import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebaseconfig";
import { FcGoogle } from "react-icons/fc"; // Google icon

const GoogleAuth = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // ✅ Set user only if it exists
      navigate("/zero", { replace: true }); // ✅ Use replace to prevent navigation loop
    }
  }, []); // ✅ Empty dependency array ensures it runs only once

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/zero"); // ✅ Redirect to homepage only after sign-in
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 shadow-xl rounded-3xl bg-white w-96 text-center border border-gray-300">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">Sign in to continue shopping with Zero-Margin.</p>

        {/* Google Sign-In Button */}
        <button
          onClick={handleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-semibold px-4 py-3 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-all duration-300"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>

        {/* Login Illustration */}
        <div className="mt-6">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-in-4480236-3723263.png"
            alt="Login Illustration"
            className="w-40 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
