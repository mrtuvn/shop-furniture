import BackTop from "@/components/common/back-top";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MobileNav from "@/components/navigation/mobile-nav";
import React from "react";
const Home1Layout: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="relative flex flex-col overflow-x-hidden  min-h-svh ">
      <Header />

      <main
        className="relative isolation flex-grow min-h-svh"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <MobileNav />
      <Footer />
      <BackTop />
    </div>
  );
};

export default Home1Layout;
