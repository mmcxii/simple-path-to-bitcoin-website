import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { useI18n } from "./components/app/use-i18n";

const Root: React.FC = () => {
  //* State
  const areTranslationsPending = useI18n();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App areTranslationsPending={areTranslationsPending} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

let siteMount = document.querySelector(".site");
if (siteMount == null) {
  siteMount = document.createElement("div");
  siteMount.className = "site h-screen";
  document.body.appendChild(siteMount);
}
ReactDOM.render(<Root />, siteMount);
