"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface PixelTrailProps {
  particleCount?: number;
  particleSize?: number;
  trailLength?: number;
  speed?: number;
  color?: string;
  opacity?: number;
  disabled?: boolean;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: Array<{ x: number; y: number; opacity: number }>;
  hue: number;
}

export function PixelTrail({
  particleCount = 50,
  particleSize = 2,
  trailLength = 20,
  speed = 0.5,
  color = "#10b981", // eslint-disable-line @typescript-eslint/no-unused-vars
  opacity = 0.6,
  disabled = false,
  className = "",
}: PixelTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Initialize particles
  useEffect(() => {
    if (disabled || isReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width / window.devicePixelRatio,
      y: Math.random() * canvas.height / window.devicePixelRatio,
      vx: (Math.random() - 0.5) * speed * 2,
      vy: (Math.random() - 0.5) * speed * 2,
      trail: [],
      hue: Math.random() * 60 + 140, // Green hue range
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / window.devicePixelRatio;
        if (particle.x > canvas.width / window.devicePixelRatio) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / window.devicePixelRatio;
        if (particle.y > canvas.height / window.devicePixelRatio) particle.y = 0;

        // Add current position to trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          opacity: 1,
        });

        // Limit trail length
        if (particle.trail.length > trailLength) {
          particle.trail.shift();
        }

        // Fade trail
        particle.trail.forEach((point, index) => {
          point.opacity = (index / particle.trail.length) * opacity;
        });

        // Draw trail
        ctx.strokeStyle = `hsla(${particle.hue}, 70%, 50%, ${particle.trail[0]?.opacity || 0})`;
        ctx.lineWidth = particleSize;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        if (particle.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          
          for (let i = 1; i < particle.trail.length; i++) {
            ctx.globalAlpha = particle.trail[i].opacity;
            ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
          }
          ctx.stroke();
        }

        // Draw particle
        ctx.globalAlpha = opacity;
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 50%, 1)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, particleSize, trailLength, speed, opacity, disabled, isReducedMotion]);

  if (disabled || isReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
