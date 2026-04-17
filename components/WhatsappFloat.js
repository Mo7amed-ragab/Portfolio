"use client";
import { motion } from "framer-motion";

const WhatsappFloat = () => {
  const phoneNumber = "201092321755"; // Your WhatsApp number
  const message = "Hello! I saw your portfolio and would like to connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ opacity: 0, scale: 0.5, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="whatsapp-icon-wrapper">
        <i className="fab fa-whatsapp" />
        <span className="pulse-ring" />
      </div>
    </motion.a>
  );
};

export default WhatsappFloat;
