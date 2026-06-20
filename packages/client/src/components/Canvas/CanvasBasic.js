import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export const CanvasBasic = () => {
    const canvasRef = useRef(null);
    const getContext = () => {
        const canvas = canvasRef.current;
        if (canvas === null)
            return null;
        return canvas.getContext("2d");
    };
    useEffect(() => {
        const contextBuffer = getContext();
        if (contextBuffer !== null) {
            const ctx = contextBuffer;
            ctx.fillRect(0, 0, 100, 100);
            ctx.save();
        }
    });
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Canvas" }), _jsx("div", { children: "https://code-log.hatenablog.com/entry/2019/08/31/111451" }), _jsx("canvas", { className: "canvas", ref: canvasRef }), _jsx("div", { children: "\u578B\u306B\u3064\u3044\u3066" }), _jsx("div", { children: "https://qiita.com/FumioNonaka/items/feb2fd5b362f2558acfa" })] }) }));
};
