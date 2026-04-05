"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full max-w-[800px] max-h-[800px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Đầu Tư Thông Minh Cho{" "}
            <span className="text-gradient-blue">Xế Yêu</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel rounded-[3rem] border border-primary/30 p-1 lg:p-1 overflow-hidden relative"
        >
          {/* Animated border effect wrapper */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary animate-[spin_4s_linear_infinite] opacity-20" />

          <div className="relative bg-[#05050A] rounded-[2.9rem] p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* Left Info */}
            <div className="flex-1 space-y-8 w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/20 text-primary font-semibold text-sm mb-6">
                  <Star className="w-4 h-4 fill-primary" /> Lựa chọn hàng đầu
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  VIN-TECH PRO MAX
                </h3>
                <p className="text-muted-foreground">
                  Phiên bản cao cấp nhất dành cho VinFast
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bảo hành điện tử 2 năm",
                  "1 đổi 1 trong 12 tháng đầu",
                  "Lắp đặt tận nhà miễn phí (Hà Nội, TP.HCM)",
                  "Tặng sim 4G Viettel 1 năm (2GB/ngày)",
                  "Bản quyền Vietmap Live 2 năm",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Price */}
            <div className="flex-1 w-full glass-panel p-8 rounded-3xl border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]" />

              <div className="text-muted-foreground line-through text-xl mb-2">
                4.500.000 VNĐ
              </div>
              <div className="flex items-baseline justify-center gap-2 text-white mb-8">
                <span className="text-5xl md:text-6xl font-display font-black">
                  3.490
                </span>
                <span className="text-xl font-bold text-primary">.000 VNĐ</span>
              </div>

              <Button
                size="lg"
                className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold glow-blue shadow-lg shadow-primary/25"
              >
                Đặt Hàng Ngay
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                *Thanh toán khi nhận hàng & lắp đặt hoàn tất
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
