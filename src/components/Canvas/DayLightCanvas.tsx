import React, { useRef, useEffect } from "react";
import "./DaylightCanvas.css";
const DaylightCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient( 0, 0, 0, canvasRef.current!.height);
    gradient.addColorStop(0, "#87CEEB");
    gradient.addColorStop(1, "#f0f8ff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(ctx); 
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  return <canvas ref={canvasRef} className="daylight-canvas"></canvas>;
};
export default DaylightCanvas;