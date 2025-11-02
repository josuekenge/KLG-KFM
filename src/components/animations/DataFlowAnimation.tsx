"use client";

import { useEffect, useRef } from "react";

export function DataFlowAnimation() {
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

    // API data packets flowing between nodes
    const packets: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
    }> = [];

    // API nodes (telematics providers)
    const nodes: Array<{ x: number; y: number; radius: number }> = [];
    const nodeCount = 5;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() * 0.7 + 0.15) * canvas.width,
        y: (Math.random() * 0.7 + 0.15) * canvas.height,
        radius: 8,
      });
    }

    // Create initial packets
    const createPacket = () => {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)];
      const endNode = nodes[Math.floor(Math.random() * nodes.length)];
      
      if (startNode !== endNode) {
        packets.push({
          x: startNode.x,
          y: startNode.y,
          targetX: endNode.x,
          targetY: endNode.y,
          progress: 0,
          speed: 0.01 + Math.random() * 0.01,
        });
      }
    };

    // Create packets periodically
    const packetInterval = setInterval(() => {
      if (packets.length < 8) {
        createPacket();
      }
    }, 1000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nodes
      ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.stroke();
        });
      });
      ctx.setLineDash([]);

      // Draw nodes (API endpoints)
      nodes.forEach((node) => {
        // Outer ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius / 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        ctx.fill();

        // Pulse effect
        const pulseRadius = node.radius + Math.sin(Date.now() * 0.003) * 3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw and update packets
      packets.forEach((packet, index) => {
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(index, 1);
          return;
        }

        // Interpolate position
        packet.x = packet.x + (packet.targetX - packet.x) * packet.speed * 2;
        packet.y = packet.y + (packet.targetY - packet.y) * packet.speed * 2;

        // Draw packet (data icon)
        ctx.save();
        ctx.translate(packet.x, packet.y);

        // Data packet square
        const size = 4;
        ctx.fillStyle = `rgba(0, 0, 0, ${0.3 * (1 - packet.progress)})`;
        ctx.fillRect(-size, -size, size * 2, size * 2);

        // Trail effect
        ctx.fillStyle = `rgba(0, 0, 0, ${0.1 * (1 - packet.progress)})`;
        ctx.fillRect(-size * 1.5, -size * 1.5, size * 3, size * 3);

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      clearInterval(packetInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: "linear-gradient(to bottom, #ffffff 0%, #fafafa 50%, #ffffff 100%)" }}
    />
  );
}

