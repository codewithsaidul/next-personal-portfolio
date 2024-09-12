"use client";

import { useState } from "react";

const Clipboard = () => {
  const [copied, setCopied] = useState(false);
  const email = "codewithsaidul@email.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // ২ সেকেন্ড পর কপি মেসেজটি গায়েব হবে
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Simple inline style for the popup
  const popupStyle = {
    position: "absolute",
    bottom: "60px", // Positioning it above the button (you can adjust this value)
    // left: '50%',
    right: "0px",
    // transform: 'translateX(-50%)', // Centering the popup above the button
    whiteSpace: 'nowrap',
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Popup message */}
      {copied && <div style={popupStyle} className="rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white shadow-sm  dark:bg-slate-700">Copied to Clipboard!</div>}

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-4 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          className="h-6 w-6"
        >
          <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
        <span>Copy Email</span>
      </button>
    </div>
  );
};

export default Clipboard;
