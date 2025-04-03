import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MobileNav from "@/components/navigation/mobile-nav";
import React from "react";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="relative flex flex-col">
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
    </div>
  );
};

export default DefaultLayout;
