import { ArrowUp } from "lucide-react";
import React from "react";

const BackTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed cursor-pointer bottom-4 left-4 bg-white p-2 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <ArrowUp />
        </div>
      )}
    </>
  );
};

export default BackTop;
