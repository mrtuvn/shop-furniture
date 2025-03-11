import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
const Home1Layout: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-svh">
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

export default Home1Layout;
