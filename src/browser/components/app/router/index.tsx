import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { UiRoutes } from "../../../shared/routes";
import { PageHome } from "../../pages/page-home";

export const Router: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PageHome />} path={UiRoutes.Home} />
    </Routes>
  );
};
