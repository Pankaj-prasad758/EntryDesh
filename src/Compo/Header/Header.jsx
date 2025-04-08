import React from "react";
import {Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
  <header className="absolute inset-x-0 top-0 z-50">
          <div
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? " text-red-700 font-system-ui font-bold text-4xl"
                      : "text-grey-700 font-system-ui font-bold text-4xl"
                  }`
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? " text-red-700 font-system-ui font-bold text-4xl"
                      : "text-grey-700 font-system-ui font-bold text-4xl"
                  }`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? " text-red-700 font-system-ui font-bold text-4xl"
                      : "text-grey-700 font-system-ui font-bold text-4xl"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/githubapi"
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? " text-red-700 font-system-ui font-bold text-4xl"
                      : "text-grey-700 font-system-ui font-bold text-4xl"
                  }`
                }
              >
                GithubApi
              </NavLink>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  `text-sm ${
                    isActive
                      ? " text-red-700 font-system-ui font-bold text-4xl"
                      : "text-grey-700 font-system-ui font-bold text-4xl"
                  }
                  ${isPending ? "text-green-600" : ""}`
                }
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header