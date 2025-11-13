import React, { useState } from 'react'
import { FaHome, FaInfoCircle, FaPhoneAlt, FaBookOpen, FaUser } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoIosLogOut } from "react-icons/io";

const Navbar = ({ setClas, clas, user, setUser, logOut }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    logOut && logOut()
  }

  return (
    <nav className="relative flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 shadow-lg z-50">
      <h1 className="text-2xl font-bold flex items-center gap-2 cursor-pointer select-none">
        <FaBookOpen className="text-yellow-300 text-3xl animate-bounce" />
        <Link to='/' className="hover:text-yellow-300 transition duration-300">EduOnline</Link>
      </h1>

      <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
        {user ? (
          <>
            <Link to="/html">
              <button className="rounded-2xl bg-white/10 px-6 py-3 text-white font-semibold hover:bg-black hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                Start Study
              </button>
            </Link>

            <select
              value={clas}
              onChange={(e) => setClas(e.target.value)}
              className="p-2 rounded-lg text-gray-700 bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option>HTML</option>
              <option>CSS</option>
              <option>JS</option>
              <option>ReactJS</option>
            </select>

            <Link to="/" className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
              <FaPhoneAlt /> Contact
            </Link>

            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img src={user.photoURL} className="w-10 h-10 rounded-full border-2 border-yellow-300" />
              ) : (
                <FaUser className="text-yellow-300" />
              )}
              <span className="font-semibold">{user.displayName || 'User'}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-100 transition"

              >
                <IoIosLogOut />
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
              <FaPhoneAlt /> Contact
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-white text-pink-600 border border-pink-500 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              Sign up
            </Link>
          </>
        )}
      </ul>

      <div
        className="md:hidden text-3xl cursor-pointer hover:text-yellow-300 transition duration-300"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-indigo-800 text-white z-50 p-6 transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">EduOnline</h2>
          <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-white/20">
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-5 text-lg font-medium">
          {user ? (
            <>
              <Link to="/html">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-center text-center rounded-2xl bg-white/10 px-6 py-3 text-white font-semibold hover:bg-black hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Start Study
                </button>
              </Link>

              <select
                value={clas}
                onChange={(e) => {
                  setClas(e.target.value)
                  setMenuOpen(false)
                }}
                className="p-2 w-full rounded-lg text-gray-800 bg-white focus:ring-2 focus:ring-blue-500"
              >
                <option>HTML</option>
                <option>CSS</option>
                <option>JS</option>
                <option>ReactJS</option>
              </select>

              <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300 transition">
                <FaHome className="inline mr-2" /> Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300 transition">
                <FaInfoCircle className="inline mr-2" /> About
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300 transition">
                <FaPhoneAlt className="inline mr-2" /> Contact
              </Link>

              <div className="flex flex-col items-center gap-2 mt-4">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="avatar" className="w-16 h-16 rounded-full border-2 border-yellow-300" />
                ) : (
                  <FaUser className="text-yellow-300 text-3xl" />
                )}
                <span className="font-semibold">{user.displayName || 'User'}</span>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-4 px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300 transition">
                <FaHome className="inline mr-2" /> Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300 transition">
                <FaInfoCircle className="inline mr-2" /> About
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300 transition">
                <FaPhoneAlt className="inline mr-2" /> Contact
              </Link>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 px-5 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full text-white font-semibold text-center shadow-md hover:scale-105 transition"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-5 py-2 bg-white text-pink-600 border border-pink-500 rounded-full font-semibold text-center hover:bg-pink-600 hover:text-white transition"
              >
                Sign up
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
