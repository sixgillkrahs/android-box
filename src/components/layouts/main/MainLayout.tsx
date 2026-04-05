import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCTAs from "./StickyCTAs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      {children}
      <Footer />
      <StickyCTAs />
    </body>
  );
};

export default MainLayout;
