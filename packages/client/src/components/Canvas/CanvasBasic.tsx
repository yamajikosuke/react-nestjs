import React, { useEffect, useRef } from "react";

export const CanvasBasic: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getContext = (): CanvasRenderingContext2D | null => {
    const canvas = canvasRef.current;
    if (canvas === null) return null;
    return canvas.getContext("2d");
  };

  useEffect(() => {
    const contextBuffer = getContext();
    if (contextBuffer !== null) {
      const ctx: CanvasRenderingContext2D = contextBuffer;
      ctx.fillRect(0, 0, 100, 100);
      ctx.save();
    }
  });

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Canvas</h1>
        <div>https://code-log.hatenablog.com/entry/2019/08/31/111451</div>
        <canvas className="canvas" ref={canvasRef} />
        <div>型について</div>
        <div>https://qiita.com/FumioNonaka/items/feb2fd5b362f2558acfa</div>
      </div>
    </section>
  );
};
