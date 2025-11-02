"use client";

import { useEffect, useRef } from "react";

export function RouteAnimation() {
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

    // Route waypoints (Matadi to Kinshasa style)
    const waypoints: Array<{ x: number; y: number; label?: string }> = [];
    const waypointCount = 8;

    for (let i = 0; i < waypointCount; i++) {
      waypoints.push({
        x: (i / (waypointCount - 1)) * canvas.width * 0.8 + canvas.width * 0.1,
        y: canvas.height / 2 + Math.sin(i * 0.8) * 60,
      });
    }

    // Cargo moving along route
    const cargo: Array<{
      waypointIndex: number;
      progress: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 4; i++) {
      cargo.push({
        waypointIndex: Math.floor(Math.random() * (waypointCount - 1)),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.002,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw route path
      ctx.beginPath();
      ctx.moveTo(waypoints[0].x, waypoints[0].y);
      
      for (let i = 1; i < waypoints.length; i++) {
        const prev = waypoints[i - 1];
        const curr = waypoints[i];
        const cpX = (prev.x + curr.x) / 2;
        const cpY = (prev.y + curr.y) / 2 + 20;
        ctx.quadraticCurveTo(prev.x, prev.y, cpX, cpY);
        ctx.quadraticCurveTo(cpX, cpY, curr.x, curr.y);
      }

      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 10]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw waypoints
      waypoints.forEach((waypoint, index) => {
        // Outer circle
        ctx.beginPath();
        ctx.arc(waypoint.x, waypoint.y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(waypoint.x, waypoint.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = index === 0 || index === waypoints.length - 1 
          ? "rgba(0, 0, 0, 0.4)" 
          : "rgba(0, 0, 0, 0.2)";
        ctx.fill();
      });

      // Draw and update cargo
      cargo.forEach((item) => {
        item.progress += item.speed;

        if (item.progress >= 1) {
          item.progress = 0;
          item.waypointIndex++;
          if (item.waypointIndex >= waypoints.length - 1) {
            item.waypointIndex = 0;
          }
        }

        const start = waypoints[item.waypointIndex];
        const end = waypoints[item.waypointIndex + 1];

        if (start && end) {
          const x = start.x + (end.x - start.x) * item.progress;
          const y = start.y + (end.y - start.y) * item.progress;

          // Draw cargo box
          ctx.save();
          ctx.translate(x, y);

          // Shadow
          ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
          ctx.shadowBlur = 4;
          ctx.shadowOffsetY = 2;

          // Box
          ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
          ctx.fillRect(-6, -4, 12, 8);

          // Box detail
          ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
          ctx.lineWidth = 1;
          ctx.strokeRect(-6, -4, 12, 8);

          ctx.restore();
        }
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

