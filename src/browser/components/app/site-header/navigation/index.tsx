import * as React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { SITE_NAVIGATION } from "../../../../shared/i18n";
import { UiRoutes } from "../../../../shared/routes";

export const Navigation: React.FC = () => {
  //* Utils
  const [translate] = useTranslation([SITE_NAVIGATION]);

  //* Variables
  const navItems: Array<[route: UiRoutes, label: string]> = [[UiRoutes.Home, "home"]];

  return (
    <nav className="flex-[1_1_0px]">
      <ul className="flex list-none justify-evenly">
        {navItems.map(([route, label]) => (
          <li key={route}>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "no-underline")}
              to={route}
            >
              {translate(label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
