import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-8xl px-4">
      
      <div className="navbar rounded-4xl bg-base-100/60 backdrop-blur-md shadow-lg border border-white/20">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <button className="btn btn-ghost text-xl">Rushikesh</button>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">

            <li><button className="nav-item">Home</button></li>
            <li><button className="nav-item">About</button></li>
            <li><button className="nav-item">Education</button></li>
            <li><button className="nav-item">Skills</button></li>
            <li><button className="nav-item">Projects</button></li>
            <li><button className="nav-item">Experience</button></li>
            <li><button className="nav-item">Certifications</button></li>
            <li><button className="nav-item">Contact</button></li>

          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end pe-3">
          <button className="btn btn-primary btn-sm">Resume</button>
        </div>

      </div>
    </div>
  );
}
