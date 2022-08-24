import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

function Navbar() {
  const { logged, logout } = useContext(AuthContext);
  const styles = ({ isActive }) =>
    `w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-regal-blue duration-300 hover:text-white ${
      isActive ? "bg-regal-blue text-white scale-110 " : ""
    }`;
  return (
    <>
      {logged ? (
        <section className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-black-800 bg-slate-100 dark:bg-dark backdrop-blur-lg bg-opacity-70  border-t-2 border-royal/20 ">
          <div id="tabs" className="flex justify-between">
            <NavLink to={"/"} className={styles}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="tab block text-1xl">Search</span>
            </NavLink>

            <NavLink to={"/publisher"} className={styles}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="tab block text-1xl">Publishers</span>
            </NavLink>

            <NavLink to={"/login"} className={styles} onClick={logout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="tab block text-1xl">Logout</span>
            </NavLink>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
