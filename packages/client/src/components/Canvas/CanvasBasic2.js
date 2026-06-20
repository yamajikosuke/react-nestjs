import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export const CanvasBasic2 = () => {
    const canvasRef = useRef(null);
    const canvasSize = {
        width: 300,
        height: 300,
    };
    //master test
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
            clearRect(ctx);
            rect(ctx);
            arc(ctx);
        }
    });
    const clearRect = (ctx) => {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    };
    const arc = (ctx) => {
        ctx.strokeStyle = "rgb(0, 0, 0)"; //
        ctx.beginPath();
        ctx.arc(125, 125, 90, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.save();
    };
    const rect = (ctx) => {
        ctx.fillStyle = "rgb(192, 80, 77)"; // 赤
        ctx.strokeStyle = "rgb(180, 180, 180)"; //
        /* 四角を描く */
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(240, 20);
        ctx.lineTo(240, 240);
        ctx.lineTo(20, 240);
        ctx.closePath();
        ctx.fill();
        ctx.save();
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Canvas" }), _jsx("canvas", { className: "canvas", ref: canvasRef, width: canvasSize.width, height: canvasSize.height })] }) }));
};
