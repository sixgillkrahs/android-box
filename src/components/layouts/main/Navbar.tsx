"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isProductsPage = pathname === "/products";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeLinks = [
    { name: "Tính Năng", href: "#features" },
    { name: "Tương Thích", href: "#compatibility" },
    { name: "Cấu Hình", href: "#specs" },
    { name: "Đánh Giá", href: "#testimonials" },
    { name: "Bảng Giá", href: "#pricing" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isProductsPage ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-blue transition-transform group-hover:scale-110">
              <span className="font-display font-bold text-background text-sm">
                V
              </span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              VIN<span className="text-primary">-TECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {isProductsPage ? (
              <>
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  Trang Chủ
                </Link>
                <span className="text-sm font-medium text-white border-b border-primary pb-0.5">
                  Sản Phẩm
                </span>
              </>
            ) : (
              <>
                {homeLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  href="/products"
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  Sản Phẩm
                </Link>
              </>
            )}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue rounded-full px-6 font-semibold">
              <a href={isProductsPage ? "/products" : "#pricing"}>
                Đặt Mua Ngay
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 items-center text-center mt-10">
              {isProductsPage ? (
                <>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Trang Chủ
                  </Link>
                  <span className="text-lg font-medium text-primary">
                    Sản Phẩm
                  </span>
                </>
              ) : (
                <>
                  {homeLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Sản Phẩm
                  </Link>
                </>
              )}
              <Button className="w-full max-w-xs mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-lg font-semibold glow-blue">
                <a
                  href={isProductsPage ? "/products" : "#pricing"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Đặt Mua Ngay
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
