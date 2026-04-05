"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      id="hero"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <img
          src="/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6 glow-blue">
              PHIÊN BẢN MỚI NHẤT 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black leading-tight mb-6"
          >
            Nâng Cấp Thông Minh
            <br />
            <span className="text-gradient-blue">Đẳng Cấp Xe Việt</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Biến màn hình zin của VinFast thành trung tâm giải trí thông minh.
            Giữ nguyên bảo hành, lắp đặt cắm giắc 100%, không độ chế.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold text-lg glow-blue group"
            >
              <a
                href="#pricing"
                className="flex items-center gap-2 w-full justify-center"
              >
                Đặt Hàng Ngay{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 border-white/10 hover:bg-white/5 rounded-full font-bold text-lg group"
            >
              <a
                href="#features"
                className="flex items-center gap-2 w-full justify-center text-white"
              >
                <Play className="w-5 h-5 group-hover:text-primary transition-colors" />{" "}
                Khám Phá Thêm
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Bảo hành 2 năm 1 đổi 1</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span>Lắp đặt 5 phút</span>
            </div>
          </motion.div>
        </div>

        {/* Product Image */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl relative flex items-center justify-center">
          {/* Decorative glowing backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative z-10 w-full"
          >
            <motion.img
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              src="/product-device.png"
              alt="VIN-TECH Android Box Device"
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] object-contain filter drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 30px rgba(0, 240, 255, 0.3))" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
