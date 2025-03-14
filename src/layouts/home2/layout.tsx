import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const Home2Layout: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div>SECOND HOMEPAGE</div>
        {children}
      </main>
      <Footer />
    </div>
  );
};
