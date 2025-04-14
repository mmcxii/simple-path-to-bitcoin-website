import * as React from "react";
import { Link } from "react-router-dom";
import { UiRoutes } from "../../../shared/routes";
import { Navigation } from "./navigation";

export const SiteHeader: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-baseline md:justify-between">
      <h1 className="overflow-hidden text-center whitespace-nowrap">
        <Link to={UiRoutes.Home}>Project Template V1</Link>
      </h1>

      <Navigation />
    </header>
  );
};
