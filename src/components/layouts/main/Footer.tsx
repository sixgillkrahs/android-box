import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020205] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center glow-blue">
                <span className="font-display font-bold text-background">
                  V
                </span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                VIN<span className="text-primary">-TECH</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Giải pháp nâng cấp màn hình thông minh cao cấp dành riêng cho các
              dòng xe VinFast. Trải nghiệm công nghệ vượt trội, giữ nguyên bản
              sắc xe Việt.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors"
              >
                {/* <Facebook size={20} /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors"
              >
                {/* <Youtube size={20} /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors"
              >
                {/* <Instagram size={20} /> */}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Sản Phẩm</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tính năng nổi bật
                </a>
              </li>
              <li>
                <a
                  href="#compatibility"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Dòng xe tương thích
                </a>
              </li>
              <li>
                <a
                  href="#specs"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Thông số kỹ thuật
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Bảng giá & Khuyến mãi
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Hỗ Trợ</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Hướng dẫn lắp đặt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Liên hệ đại lý
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Đường Công Nghệ, Quận 7, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>Hotline: 0987 654 321</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@vintech-auto.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VIN-TECH. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản dịch vụ
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
