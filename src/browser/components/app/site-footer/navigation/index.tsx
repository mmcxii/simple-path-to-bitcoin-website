import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { SITE_NAVIGATION } from "../../../../shared/i18n";
import { UiRoutes } from "../../../../shared/routes";

export const Navigation: React.FC = () => {
  //* Utils
  const [translate] = useTranslation([SITE_NAVIGATION]);

  //* Variables
  const externalLinks: Array<[UiRoutes, string, FontAwesomeIconProps["icon"]]> = [
    // @ts-expect-error -- Type error in FontAwesomeIconProps.
    [UiRoutes.Home, "/", faHome],
  ];

  return (
    <nav>
      <ul className="flex list-none justify-center gap-4">
        {externalLinks.map(([link, url, icon]) => (
          <li className="nav-item" key={link}>
            <a
              className="bg-orange rounded-[50%] p-2 text-base text-white no-underline hover:shadow-[inset_0em_0em_0em_10em_rgba(0,0,0,0.1)]"
              href={url}
              target="_blank"
            >
              <FontAwesomeIcon className="nav-icon" icon={icon} />
              <span className="hidden">{translate(link)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
