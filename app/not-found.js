"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const E404 = () => {
  return (
    <div className="error-page-wrapper">
      {/* Background elements */}
      <div className="error-grid-background" />
      <div className="error-glow-spot spot-1" />
      <div className="error-glow-spot spot-2" />

      <div className="container overflow-hidden">
        <motion.div
          className="error-glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="error-visual">
            <motion.h1
              initial={{ letterSpacing: "20px", opacity: 0 }}
              animate={{ letterSpacing: "2px", opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              404
            </motion.h1>
            <div className="error-line" />
          </div>

          <div className="error-text-content">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Lost in the Digital Void?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              The page you are looking for has either drifted into another
              dimension or was never built in this one.
            </motion.p>
          </div>

          <motion.div
            className="error-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/" className="error-btn-primary error-btn-secondary">
              <i className="fas fa-home me-2" />
              Back to Reality
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="error-floating-shape"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default E404;
