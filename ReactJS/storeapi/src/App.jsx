import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");

  // side effect
  useEffect(() => {
    document.title = name || "React App";
  }, [name]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-lg font-semibold mb-4">Profile</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <p className="text-gray-700">
          {name ? `Hello, ${name}` : "Start typing your name"}
        </p>
      </div>
    </div>
  );
}
