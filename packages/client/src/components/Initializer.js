import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { SampleContext, FormContext, } from "../context/sampleContext";
export const Initializer = ({ children }) => {
    const messageSetting = { title: "タイトル" };
    const [messages] = useState(messageSetting);
    const [type, setType] = useState({ type: "normal" });
    const [centerType, setCenterType] = useState(undefined);
    const [formMode, setFormMode] = useState("view");
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
    return (_jsx(IntlProvider, { locale: navigator.language, messages: messages, children: _jsx(FormContext.Provider, { value: formContext, children: _jsx(SampleContext.Provider, { value: { title: { en: "Sample Text", ja: "サンプルのテキスト" } }, children: children }) }) }));
};
