import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="bg-base-100 p-4">
        <ul className="flex gap-6 ml-auto justify-end">
          {[
            { path: "/", label: "About" },
            { path: "/experience", label: "Experience" },
            { path: "/projects", label: "Projects" },
            { path: "/skills", label: "Skills" },
            { path: "/contact", label: "Contact" }
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 font-medium transition-all ${
                    isActive ? "text-blue-600" : "text-black"
                  } hover:text-blue-400`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
