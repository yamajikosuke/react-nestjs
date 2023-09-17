import React, { useEffect, useState } from "react";

export const RegisterDataFromCLI: React.FC = () => {
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
        <h1 className="title">Register Data From CLI</h1>
      </div>
      <hr />
      <div>CLIからDBにデータ投入</div>
    </section>
  );
};
