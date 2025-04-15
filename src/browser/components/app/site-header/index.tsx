import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";
import { UiRoutes } from "../../../shared/routes";
import { Container } from "../../templates/container";
import { Navigation } from "./navigation";

export const SiteHeader: React.FC = () => {
  return (
    <Container
      className="flex flex-col p-2 md:flex-row md:items-baseline md:justify-between"
      is="header"
    >
      <h1 className="flex flex-col items-center justify-center gap-2 text-4xl sm:flex-row">
        <FontAwesomeIcon className="text-orange text-4xl" icon={faBitcoin} />
        <Link to={UiRoutes.Home}>
          The Simple Path to <span className="text-orange">Bitcoin</span>
        </Link>
      </h1>

      <Navigation />
    </Container>
  );
};
