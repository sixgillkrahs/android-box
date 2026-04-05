"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Film,
  Map,
  Music,
  PlayCircle,
  SplitSquareVertical,
} from "lucide-react";

export default function Features() {
  const bentoItems = [
    {
      title: "YouTube Vanced",
      desc: "Xem video thả ga, không bị làm phiền bởi quảng cáo. Chạy nền mượt mà.",
      icon: <PlayCircle className="w-8 h-8 text-red-500" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-gradient-to-br from-red-500/10 to-transparent",
      borderClass: "hover:border-red-500/50",
    },
    {
      title: "Vietmap Live",
      desc: "Dẫn đường thông minh, cảnh báo tốc độ, camera phạt nguội độc quyền.",
      icon: <Map className="w-8 h-8 text-emerald-500" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      bgClass: "bg-gradient-to-br from-emerald-500/10 to-transparent",
      borderClass: "hover:border-emerald-500/50",
    },
    {
      title: "Check Phạt Nguội",
      desc: "Tra cứu vi phạm giao thông nhanh chóng ngay trên màn hình xe bằng giọng nói.",
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      bgClass: "bg-gradient-to-br from-amber-500/10 to-transparent",
      borderClass: "hover:border-amber-500/50",
    },
    {
      title: "Chia Đôi Màn Hình",
      desc: "Vừa xem bản đồ, vừa xem YouTube cùng lúc mượt mà không giật lag.",
      icon: <SplitSquareVertical className="w-8 h-8 text-primary" />,
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      bgClass: "bg-gradient-to-br from-primary/10 to-transparent",
      borderClass: "hover:border-primary/50",
    },
    {
      title: "Giải Trí Bất Tận",
      desc: "Trọn bộ ứng dụng giải trí đỉnh cao: Netflix, Spotify, Zing MP3, VTV Go.",
      icon: (
        <div className="flex -space-x-2">
          <Film className="w-8 h-8 text-red-600" />
          <Music className="w-8 h-8 text-green-500" />
        </div>
      ),
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      bgClass: "bg-gradient-to-br from-purple-500/10 to-transparent",
      borderClass: "hover:border-purple-500/50",
    },
  ];

  return (
    <section className="py-24 relative bg-[#010103]" id="features">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Trải Nghiệm{" "}
            <span className="text-gradient-blue">Hạng Thương Gia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hô biến không gian xe thành rạp hát thu nhỏ và trợ lý lái xe đắc
            lực.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-8 rounded-[2rem] border border-white/5 transition-all duration-300 ${item.colSpan} ${item.bgClass} ${item.borderClass} group relative overflow-hidden`}
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
