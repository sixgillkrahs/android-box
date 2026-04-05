"use client";

import { motion } from "framer-motion";
import {
  Car,
  Cpu,
  Database,
  Globe,
  Navigation,
  Smartphone,
} from "lucide-react";

export default function Specs() {
  const specs = [
    {
      icon: <Cpu className="w-6 h-6" />,
      label: "Vi xử lý",
      value: "Snapdragon 6125",
      detail: "8 Nhân 2.0GHz mạnh mẽ",
    },
    {
      icon: <Database className="w-6 h-6" />,
      label: "Bộ nhớ",
      value: "8GB RAM",
      detail: "128GB ROM lưu trữ",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      label: "Hệ điều hành",
      value: "Android 13",
      detail: "Mới nhất, mượt mà",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Kết nối",
      value: "4G LTE & WiFi",
      detail: "Bluetooth 5.0 tốc độ cao",
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      label: "Định vị",
      value: "GPS / GLONASS",
      detail: "Tích hợp sẵn anten siêu nhạy",
    },
    {
      icon: <Car className="w-6 h-6" />,
      label: "Apple CarPlay",
      value: "Không Dây",
      detail: "Hỗ trợ Android Auto",
    },
  ];

  return (
    <section className="py-24 relative" id="specs">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Cấu Hình <span className="text-gradient-blue">Đỉnh Cao</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Trang bị phần cứng mạnh mẽ nhất phân khúc. Đảm bảo mọi tác vụ chạy
            mượt mà không độ trễ.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {spec.icon}
              </div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                {spec.label}
              </h4>
              <p className="text-2xl font-display font-bold text-white mb-2">
                {spec.value}
              </p>
              <p className="text-sm text-muted-foreground">{spec.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
