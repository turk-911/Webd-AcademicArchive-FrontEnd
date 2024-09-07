import React, { useRef, useEffect } from "react";

const SpaceCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
    }
    let stars: Star[] = [];
    function createStars(count: number) {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5 + 0.5;
        const opacity = Math.random();
        const twinkleSpeed = Math.random() * 0.02 + 0.01;

        stars.push({ x, y, radius, opacity, twinkleSpeed });
      }
    }

    // Function to animate stars
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0) {
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    }

    // Initial star creation
    createStars(200);

    // Start the animation
    animateStars();

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = []; // Clear stars
      createStars(200); // Recreate stars after resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SpaceCanvas;
