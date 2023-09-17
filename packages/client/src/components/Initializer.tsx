import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import {
  SampleContext,
  FormContext,
  FormTypeProps,
  CenterType,
  FormMode,
} from "../context/sampleContext";

interface Props {
  children: React.ReactNode;
}

export const Initializer: React.FC<Props> = ({children}) => {
  const messageSetting = { title: "タイトル" };
  const [messages] = useState<Record<string, string>>(messageSetting);
  const [type, setType] = useState<FormTypeProps>({ type: "normal" });
  const [centerType, setCenterType] = useState<CenterType>(undefined);
  const [formMode, setFormMode] = useState<FormMode>("view");
  const formContext = {
    type,
    centerType,
    formMode,
    setType,
    setCenterType,
    setFormMode,
  };

  // test
  useEffect(() => {
    //APIを叩いて値を取得して、SampleContext.Providerに渡すなど
  }, []);

  return (
    <IntlProvider locale={navigator.language} messages={messages}>
      <FormContext.Provider value={formContext}>
        <SampleContext.Provider
          value={{ title: { en: "Sample Text", ja: "サンプルのテキスト" } }}
        >
          {children}
        </SampleContext.Provider>
      </FormContext.Provider>
    </IntlProvider>
  );
};
