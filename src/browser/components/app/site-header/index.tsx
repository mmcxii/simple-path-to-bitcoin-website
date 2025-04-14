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
      <h1 className="flex items-center justify-center gap-1 overflow-hidden text-2xl whitespace-nowrap">
        <FontAwesomeIcon className="text-orange text-4xl" icon={faBitcoin} />
        <Link to={UiRoutes.Home}>The Simple Path to Bitcoin</Link>
      </h1>

      <Navigation />
    </Container>
  );
};
