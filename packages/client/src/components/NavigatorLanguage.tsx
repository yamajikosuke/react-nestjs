import React, { useEffect, useState } from "react";

export const NavigatorLanguage: React.FC = () => {
  const [language, setLanguage] = useState<string>();

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
        <h1 className="title">Navigator.language</h1>
      </div>
      <hr />
      <div>language: {language}</div>
    </section>
  );
};
