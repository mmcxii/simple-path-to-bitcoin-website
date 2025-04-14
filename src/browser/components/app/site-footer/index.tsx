import * as React from "react";
import { Container } from "../../templates/container";
import { Navigation } from "./navigation";

export const SiteFooter: React.FC = () => {
  //* Variables
  const currentYear = new Date().getFullYear();

  return (
    <Container className="mt-auto flex items-baseline justify-between gap-1 p-2">
      <p className="text-center">{currentYear}</p>

      <Navigation />
    </Container>
  );
};
