"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  "Free delivery in Valsad on orders above ₹499",
  "New arrivals this week — Monstera, Fiddle Leaf & more",
  "WhatsApp us to order: +91 98765 43210"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-tertiary-fixed-dim text-on-tertiary-fixed py-2 px-4 text-center overflow-hidden relative h-10 flex items-center justify-center z-40 mt-20">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xs sm:text-sm font-bold uppercase tracking-widest font-body w-full absolute"
        >
          {announcements[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
