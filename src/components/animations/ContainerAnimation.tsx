"use client";

import { useEffect, useRef } from "react";

export function ContainerAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Container boxes moving along routes
    const containers: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      type: "20ft" | "40ft";
    }> = [];

    // Create containers
    const containerCount = 6;
    for (let i = 0; i < containerCount; i++) {
      containers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 12,
        type: Math.random() > 0.5 ? "20ft" : "40ft",
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      containers.forEach((container) => {
        container.x += container.vx;
        container.y += container.vy;

        if (container.x < 0 || container.x > canvas.width) container.vx *= -1;
        if (container.y < 0 || container.y > canvas.height) container.vy *= -1;

        // Draw container
        ctx.save();
        ctx.translate(container.x, container.y);

        const width = container.type === "40ft" ? container.size * 2.5 : container.size * 1.5;
        const height = container.size;

        // Container body
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillRect(-width / 2, -height / 2, width, height);

        // Container ridges
        ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
        ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          const x = -width / 2 + (width / 3) * i;
          ctx.beginPath();
          ctx.moveTo(x, -height / 2);
          ctx.lineTo(x, height / 2);
          ctx.stroke();
        }

        // Container doors
        ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(-width / 2 + width * 0.8, -height / 2 + 2, width * 0.18, height - 4);

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: "linear-gradient(to bottom, #fafafa 0%, #ffffff 50%, #fafafa 100%)" }}
    />
  );
}

