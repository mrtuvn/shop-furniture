import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="footer bg-black xs:mb-[var(--footer-mobile-navigate-height)] md:mb-0"
      role="contentinfo"
    >
      <div className="footer__top container mx-auto py-2">
        <div className="grid md:grid-cols-5 gr">
          <div className="grid__item">
            AGOTA
            <div>
              <address>
                <p className="flex grow items-center gap-2">
                  <MapPin className="w-4 h-4 flex-1 " />
                  {import.meta.env.VITE_SHOP_ADDRESS}
                </p>
              </address>
              <address>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-1 " />
                  {import.meta.env.VITE_SHOP_EMAIL}
                </p>
              </address>
              <address>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-1 " />
                  {import.meta.env.VITE_SHOP_PHONE}
                </p>
              </address>
            </div>
          </div>
          <div className="grid__item">Information</div>
          <div className="grid__item">Our Service</div>
          <div className="grid__item">All Category</div>
          <div className="grid__item">
            Get Deals From The Store
            <p>Get the latest updates on new products and upcoming sales</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <p>Email: admin@basictheme.com.</p>
            <p>Add: {import.meta.env.VITE_SHOP_ADDRESS}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
