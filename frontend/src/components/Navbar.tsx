import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-20 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ModeToggle - above menu button */}
      <div className="fixed left-4 top-1/2 -translate-y-[calc(100%+3rem)] z-30">
        <ModeToggle />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className={`
          fixed left-4 top-1/2 -translate-y-1/2
          z-30 
          flex items-center justify-center 
          text-white shadow transition-all duration-300
          ${
            open
              ? "w-12 h-12 rounded-full bg-red-500 text-2xl hover:bg-red-600"
              : "w-12 h-24 rounded-md bg-red-500 text-lg hover:bg-red-600"
          }
        `}
      >
        <span
          className={`${
            open ? "" : "-rotate-90"
          } block transition-all duration-300`}
        >
          {open ? "✖" : "MENU"}
        </span>
      </button>

      {/* MENU */}
      <div
        className={`
          fixed left-16 top-1/2 -translate-y-1/2
          bg-black text-white rounded-xl shadow-2xl
          w-64 py-6
          z-40 transform transition-transform duration-300 origin-left
          ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <div className="px-6 space-y-4 text-lg font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            🏠 Home
          </Link>
          <Link
            to="/auth/login"
            onClick={() => setOpen(false)}
            className="block"
          >
            🔐 Login
          </Link>
          <Link to="/requests" onClick={() => setOpen(false)} className="block">
            📜 All Requests
          </Link>
          <Link
            to="/myrequests"
            onClick={() => setOpen(false)}
            className="block"
          >
            📁 My Requests
          </Link>
          <Link
            to="/addrequests"
            onClick={() => setOpen(false)}
            className="block"
          >
            ➕ Add Request
          </Link>
          <Link to="/chat" onClick={() => setOpen(false)} className="block">
            💬 Chat
          </Link>
          <Link
            to="/notifications"
            onClick={() => setOpen(false)}
            className="block"
          >
            🔔 Notifications
          </Link>
          <Link to="/profile" onClick={() => setOpen(false)} className="block">
            👤 Profile
          </Link>
          <Link
            to="/profile/admin"
            onClick={() => setOpen(false)}
            className="block"
          >
            🛠 Admin
          </Link>
        </div>
      </div>
    </>
  );
}
