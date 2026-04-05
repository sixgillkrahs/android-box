"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anh Hoàng Nam",
      car: "Chủ xe VinFast VF8 - Hà Nội",
      text: "Lắp cái này vào màn VF8 nét căng, màn hình không bị khựng như trước. Kiki nhận diện giọng nói chuẩn, tìm đường Vietmap bao phê.",
      rating: 5,
      initials: "HN",
    },
    {
      name: "Chị Ngọc Trâm",
      car: "Chủ xe VinFast VF e34 - TP.HCM",
      text: "Mình mù công nghệ mà cắm vào là xài được luôn. Thích nhất khoản mở YouTube cho mấy bé xem lúc kẹt xe, không có quảng cáo nên tụi nhỏ rất ngoan.",
      rating: 5,
      initials: "NT",
    },
    {
      name: "Anh Tuấn Kiệt",
      car: "Chủ xe VinFast VF9 - Đà Nẵng",
      text: "Xứng đáng đồng tiền. Xem bản đồ và nghe nhạc Spotify song song không bị lag. Đội ngũ lắp đặt tận nhà nhanh gọn, nhiệt tình.",
      rating: 5,
      initials: "TK",
    },
    {
      name: "Anh Đức Hải",
      car: "Chủ xe VinFast VF6 - Hải Phòng",
      text: "Thiết kế box nhỏ gọn giấu kín đẹp mắt. Android 13 chạy mượt, giao diện cũng hợp với màu sắc của màn hình xe.",
      rating: 5,
      initials: "ĐH",
    },
  ];

  return (
    <section className="py-24 relative" id="testimonials">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Đánh Giá Từ <span className="text-gradient-blue">Người Dùng</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hàng ngàn chủ xe VinFast đã nâng cấp và hài lòng tuyệt đối.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-start flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] glass-panel p-8 rounded-[2rem] border border-white/5 relative"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-white/80 leading-relaxed mb-8 min-h-[100px]">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center font-bold text-white shadow-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.car}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
