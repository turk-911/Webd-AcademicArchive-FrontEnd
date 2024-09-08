import React, { useRef, useEffect } from "react";
import "./AdminCanvas.css";
const DarkSpaceCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const createStars = (count: number) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.2 + 0.5; 
        stars.push({ x, y, radius });
      }
      return stars;
    };
    const drawStars = (stars: { x: number; y: number; radius: number }[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0b0d33"); 
      gradient.addColorStop(1, "#1c1c3c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });
    };
    const stars = createStars(300); 
    drawStars(stars); 
  }, []);

  return <canvas ref={canvasRef} className="dark-space-canvas"></canvas>;
};
export default DarkSpaceCanvas;
