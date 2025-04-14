import * as React from "react";
import { Router } from "./router";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export type AppProps = {
  areTranslationsPending: boolean;
};

export const App: React.FC<AppProps> = (props) => {
  const { areTranslationsPending } = props;

  if (areTranslationsPending) {
    return null;
  }

  return (
    <div className="flex h-full flex-col">
      <SiteHeader />

      <Router />

      <SiteFooter />
    </div>
  );
};
