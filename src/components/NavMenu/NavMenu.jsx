import React, { useState } from "react";

import Logo from "../../assets/icons/logo.ico";
import { NavLink } from "react-router-dom";

export const NavMenu = ({ mobile }) => {
  const [openMenu, closeMenu] = useState(false);
  const options = [
    { name: "Goal Settings", path: "goal-settings" },
    { name: "Community & Engagement", path: "community" },
    { name: "Leaderboard", path: "leaderboard" },
  ];

  return (
    <div className="flex items-center gap-7">
      {!mobile ? (
        <NavLink to="">
          <img src={Logo} alt="" />
        </NavLink>
      ) : null}

      <div className={`${mobile ? "" : "navbar"} flex items-center gap-7`}>
        {!mobile ? <span className="text-[var(--gray-500)]">|</span> : null}
        <ul className="flex list-none text-white gap-8">
          <li onClick={() => closeMenu(!openMenu)} className="relative">
            {openMenu ? (
              <ul className="absolute bg-white shadow-gray-950 top-10 text-black z-[100] w-[max-content] p-[4px_0] rounded-lg max-h-[300px]">
                {options.map((option) => (
                  <NavLink
                    className="grid cursor-pointer hover:bg-slate-100 rounded-lg p-[8px_16px]"
                    key={option.name}
                    to={`/${option.path}`}
                  >
                    {option.name}
                  </NavLink>
                ))}
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
};
