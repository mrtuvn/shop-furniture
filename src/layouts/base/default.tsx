import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
