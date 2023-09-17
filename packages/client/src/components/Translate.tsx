import React, { useEffect, useState } from "react";

export const Translate: React.FC = () => {
  const [, setLanguage] = useState<string>();

  useEffect(() => {
    setLanguage(browserLanguage());
  }, []);
  const browserLanguage = (): string => {
    const userlanguage = navigator.language.substr(0, 2);
    return userlanguage === "zh" ? navigator.language : userlanguage;
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Translate</h1>
      </div>
      <hr />
      <div>
        Google translate API key: AIzaSyBHAJAtw7e_lBCqQLzZn6WL67MCyD41s3w
      </div>
    </section>
  );
};
