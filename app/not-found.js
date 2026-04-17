"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const E404 = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const cardRotateX = useTransform(mouseY, [-400, 400], [10, -10]);
  const cardRotateY = useTransform(mouseX, [-400, 400], [-10, 10]);
  const shapeX = useTransform(mouseX, [-400, 400], [50, -50]);
  const shapeY = useTransform(mouseY, [-400, 400], [50, -50]);

  const floatingElements = [
    { text: "<div>", size: "20px", color: "rgba(201, 243, 29, 0.15)" },
    { text: "npm i", size: "14px", color: "rgba(255, 255, 255, 0.1)" },
    { text: "git push", size: "12px", color: "rgba(201, 243, 29, 0.1)" },
    { text: "React", size: "18px", color: "rgba(255, 255, 255, 0.15)" },
    { text: "Error: 404", size: "12px", color: "rgba(255, 255, 255, 0.05)" },
  ];

  return (
    <div className="error-page-wrapper">
      <div className="error-grid-background" />
      <div className="error-glow-spot spot-1" />
      <div className="error-glow-spot spot-2" />

      <motion.div
        className="container"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="error-glass-card"
          style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="error-visual">
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(201, 243, 29, 0.4)",
                  "0 0 40px rgba(201, 243, 29, 0.8)",
                  "0 0 20px rgba(201, 243, 29, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
            <motion.div 
              className="error-line"
              animate={{ width: ["0px", "100px"] }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="error-text-content">
            <h2 className="error-title-modern">Lost in the Digital Dimension</h2>
            <p className="error-desc-modern">
              It seems you've drifted beyond the reach of our current deployment. 
              The page you are looking for does not exist in this reality.
            </p>
          </div>

          <div className="error-actions">
            <Link href="/" className="error-btn-primary error-btn-secondary">
              <i className="fas fa-rocket me-2" />
              Return Home
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax Floating Code Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="error-code-particle"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            fontSize: el.text === "404" ? "10vw" : el.size,
            color: el.color,
            x: shapeX,
            y: shapeY,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
};

export default E404;

