import * as React from "react";
import { Navigation } from "./navigation";

export const SiteFooter: React.FC = () => {
  //* Variables
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto flex flex-col gap-1 p-2 md:flex-row md:items-baseline md:justify-between">
      <p className="text-center">{currentYear}</p>

      <Navigation />
    </footer>
  );
};
