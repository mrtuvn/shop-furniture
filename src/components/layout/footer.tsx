import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black" role="contentinfo">
      <div className="footer__top container mx-auto py-4">
        <div className="grid">
          <div className="grid__item">Information</div>
          <div className="grid__item">Our Service</div>
          <div className="grid__item">Payment & Shipping</div>
          <div className="grid__item">Get Deals Of The Store</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
