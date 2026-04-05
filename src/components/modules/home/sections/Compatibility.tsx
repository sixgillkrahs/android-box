"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mic, MonitorSmartphone, Wifi } from "lucide-react";

export default function Compatibility() {
  const features = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
      title: "Giữ zin màn hình gốc",
      description:
        "Không độ chế, không cắt trích dây. Cắm cổng USB/Type-C là chạy ngay lập tức.",
    },
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "Điều khiển giọng nói Kiki",
      description:
        "Ra lệnh bằng giọng nói tiếng Việt chuẩn xác. Mở nhạc, tìm đường không cần chạm.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary" />,
      title: "Kết nối Wifi & 4G LTE",
      description:
        "Tích hợp khe cắm sim 4G. Phát Wifi cho toàn bộ hành khách trên xe.",
    },
  ];

  const models = ["VF8", "VF9", "VF6", "VF7", "VF e34", "VFe34"];

  return (
    <section
      className="py-24 relative overflow-hidden bg-[#020205]"
      id="compatibility"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/compatibility-bg.png"
          alt="VinFast Interior"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Tương Thích Hoàn Hảo Cho{" "}
                <span className="text-gradient-blue">VinFast</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl">
                Được thiết kế chuyên biệt để hoạt động mượt mà trên hệ sinh thái
                của VinFast. Nhận diện chuẩn xác mọi dòng xe thế hệ mới.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {models.map((model, idx) => (
                  <motion.div
                    key={model}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="px-6 py-2 rounded-full border border-white/10 glass-panel font-display font-bold text-lg text-white"
                  >
                    {model}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                  className="flex gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl glass-panel border-primary/20 flex items-center justify-center shrink-0 glow-blue">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphic Element */}
          <div className="flex-1 w-full relative h-[600px] hidden lg:block">
            {/* We could place an interactive 3D model or a glowing UI mockup here */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] border border-white/5 glass-panel overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
              <div className="text-center z-10">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping" />
                  <CheckCircle2 className="w-16 h-16 text-primary relative z-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Plug & Play
                </h3>
                <p className="text-primary tracking-widest font-mono text-sm uppercase">
                  Kết nối thành công
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
