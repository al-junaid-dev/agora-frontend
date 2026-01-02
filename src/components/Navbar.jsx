import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROLES } from "../utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const closeMenu = () => setIsOpen(false);
  console.log("AUTH STATE:", user);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-lg border-b border-white/20 shadow-lg">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wide text-white"
          >
            AGORA
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            {/* 🔓 Not Logged In */}
            {!user.isAuthenticated && (
              <>
                <Link to="/" className="hover:text-indigo-300 transition">
                  Home
                </Link>
                <Link
                  to="/register"
                  className="hover:text-indigo-300 transition"
                >
                  Register
                </Link>
                <Link to="/login" className="hover:text-indigo-300 transition">
                  Login
                </Link>
              </>
            )}

            {/* 👤 Customer */}
            {user.isAuthenticated && user.role === ROLES.CUSTOMER && (
              <>
                <Link to="/home" className="hover:text-indigo-300 transition">
                  Home
                </Link>
                <Link to="/search" className="hover:text-indigo-300 transition">
                  Search
                </Link>
                <button
                  onClick={logout&&<Navigate to="/"/>}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Sign Out
                </button>
              </>
            )}

            {/* 🏪 Retailer */}
            {user.isAuthenticated && user.role === ROLES.RETAILER && (
              <>
                <Link
                  to="/retailer/dashboard"
                  className="hover:text-indigo-300 transition"
                >
                  Dashboard
                </Link>
                <Link
                  to="/retailer/add-product"
                  className="hover:text-indigo-300 transition"
                >
                  Add Product
                </Link>
                <button
                  onClick={logout}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Sign Out
                </button>
              </>
            )}

            {/* 🛡️ Admin */}
            {user.isAuthenticated && user.role === ROLES.ADMIN && (
              <>
                <Link
                  to="/admin/dashboard"
                  className="hover:text-indigo-300 transition"
                >
                  Admin Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4 text-white font-medium">
          {/* 🔓 Not Logged In */}
          {!user.isAuthenticated && (
            <>
              <Link onClick={closeMenu} to="/">
                Home
              </Link>
              <Link onClick={closeMenu} to="/register">
                Register
              </Link>
              <Link onClick={closeMenu} to="/login">
                Login
              </Link>
            </>
          )}

          {/* 👤 Customer */}
          {user.isAuthenticated && user.role === ROLES.CUSTOMER && (
            <>
              <Link onClick={closeMenu} to="/">
                Home
              </Link>
              <Link onClick={closeMenu} to="/search">
                Search
              </Link>
              <button onClick={logout} className="text-red-400 text-left">
                Sign Out
              </button>
            </>
          )}

          {/* 🏪 Retailer */}
          {user.isAuthenticated && user.role === ROLES.RETAILER && (
            <>
              <Link onClick={closeMenu} to="/retailer/dashboard">
                Dashboard
              </Link>
              <Link onClick={closeMenu} to="/retailer/add-product">
                Add Product
              </Link>
              <button onClick={logout} className="text-red-400 text-left">
                Sign Out
              </button>
            </>
          )}

          {/* 🛡️ Admin */}
          {user.isAuthenticated && user.role === ROLES.ADMIN && (
            <>
              <Link onClick={closeMenu} to="/admin/dashboard">
                Admin Dashboard
              </Link>
              <button onClick={logout} className="text-red-400 text-left">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
