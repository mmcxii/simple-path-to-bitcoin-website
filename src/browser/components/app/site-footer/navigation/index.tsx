import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { SITE_NAVIGATION } from "../../../../shared/i18n";
import { ExternalRoutes } from "../../../../shared/routes";

export const Navigation: React.FC = () => {
  //* Utils
  const [translate] = useTranslation([SITE_NAVIGATION]);

  //* Variables
  const externalLinks: Array<
    [route: ExternalRoutes, label: string, icon: FontAwesomeIconProps["icon"]]
  > = [[ExternalRoutes.Github, "/", faGithub]];

  return (
    <nav>
      <ul className="flex list-none justify-center gap-4">
        {externalLinks.map(([route, label, icon]) => (
          <li className="nav-item" key={route}>
            <a
              className="bg-orange rounded-[50%] p-2 text-base text-white no-underline hover:shadow-[inset_0em_0em_0em_10em_rgba(0,0,0,0.1)]"
              href={route}
              target="_blank"
            >
              <FontAwesomeIcon className="nav-icon" icon={icon} />
              <span className="hidden">{translate(label)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
