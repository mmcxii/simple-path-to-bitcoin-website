import * as React from "react";
import { useTranslation } from "react-i18next";
import { GLOSSARY } from "../../../shared/i18n";
import { transformCase } from "../../../utils/transform-case";

export const PageGlossary: React.FC = () => {
  //* State
  const [translate, { getDataByLanguage }] = useTranslation([GLOSSARY]);

  //* Variables
  const terms = Object.keys(getDataByLanguage("en")?.[GLOSSARY] ?? {});

  return (
    <div className="h-full">
      <h2 className="text-2xl">Glossary</h2>

      <p>
        There are many terms commonly used in the Bitcoin space that are unfamiliar to new users.
        These definitions are intended to describe the concepts to newcomers, but may not be
        entirely accurate from a deep technical perspective.
      </p>

      <hr className="my-2" />

      <div className="grid gap-2">
        {terms.map((term) => {
          return (
            <div key={term}>
              <h3 className="text-xl">
                {transformCase(term, "title", {
                  utxo: "UTXO",
                })}
              </h3>
              <p>{translate(term)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
