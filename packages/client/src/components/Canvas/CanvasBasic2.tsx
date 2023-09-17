import React, { useEffect, useRef } from "react";

export const CanvasBasic2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasSize = {
    width: 300,
    height: 300,
  };

  //master test
  const getContext = (): CanvasRenderingContext2D | null => {
    const canvas = canvasRef.current;
    if (canvas === null) return null;
    return canvas.getContext("2d");
  };

  useEffect(() => {
    const contextBuffer = getContext();
    if (contextBuffer !== null) {
      const ctx: CanvasRenderingContext2D = contextBuffer;
      clearRect(ctx);
      rect(ctx);
      arc(ctx);
    }
  });

  const clearRect = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
  };

  const arc = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "rgb(0, 0, 0)"; //
    ctx.beginPath();
    ctx.arc(125, 125, 90, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.save();
  };

  const rect = (ctx: CanvasRenderingContext2D) => {
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

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Canvas</h1>
        <canvas
          className="canvas"
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
        />
      </div>
    </section>
  );
};
