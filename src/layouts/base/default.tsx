import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MobileNav from "@/components/navigation/mobile-nav";
import React from "react";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main
        className="relative isolation flex-grow"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
