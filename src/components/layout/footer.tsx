import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="footer bg-black xs:mb-[var(--footer-mobile-navigate-height)] md:mb-0"
      role="contentinfo"
    >
      <div className="footer__top container mx-auto py-12">
        <div className="grid md:grid-cols-5 gr">
          <div className="grid__item">
            <img
              src="/images/logo/logo_white.png"
              width={120}
              className="text-white mb-4"
              alt="logo footer"
            />
            <div className="flex flex-col gap-2">
              <address className="flex grow items-center gap-2 text-sm text-balance">
                <MapPin className="w-[32px] flex-[20%]" />
                {import.meta.env.VITE_SHOP_ADDRESS}
              </address>
              <address className="flex text-sm items-center gap-2">
                <Mail className="w-[32px] " />
                {import.meta.env.VITE_SHOP_EMAIL}
              </address>
              <address className="flex text-sm items-center gap-2">
                <Phone className="w-[32px] " />
                {import.meta.env.VITE_SHOP_PHONE}
              </address>
            </div>
          </div>
          <div className="grid__item">
            <h5 className="text-white mb-4 uppercase">Information</h5>
            <ul>
              <li>
                <a className="block py-2 text-sm" href="/about">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Blog
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__item">
            <h5 className="text-white mb-4 uppercase">Our Service</h5>
            <ul>
              <li>
                <a className="block py-2 text-sm" href="/about">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Return Policy
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Your account
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Track Order
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__item">
            <h5 className="text-white mb-4 uppercase">All Category</h5>
            <ul>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Shop All
                </a>
              </li>
              <li>
                <a className="block py-2 text-sm" href="/contact">
                  Collection
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__item text-sm">
            <h5 className="text-white mb-4 uppercase">
              Get Deals From The Store
            </h5>
            <p>Get the latest updates on new products and upcoming sales</p>
            <form className="subscribe-form flex gap-2 my-2">
              <input
                type="email"
                className="border p-3"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="hover:bg-main p-3 border border-white"
              >
                Subscribe
              </button>
            </form>
            <p>Email: admin@basictheme.com.</p>
            <p>Add: {import.meta.env.VITE_SHOP_ADDRESS}</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom xs:py-2 md:py-4 border-t border-[#ffffff14] flex justify-between items-center">
        <div className="container mx-auto">
          <p>Copyright © 2025 Basic Theme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
