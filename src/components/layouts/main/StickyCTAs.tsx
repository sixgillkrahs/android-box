"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      >
        <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></span>
        <MessageCircle size={24} />
        {/* Simple tooltip */}
        <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Chat Zalo
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:0987654321"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,240,255,0.4)]"
      >
        <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></span>
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Hotline: 0987 654 321
        </span>
      </motion.a>
    </div>
  );
}
