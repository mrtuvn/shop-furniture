import siteLogo from "/images/logo/logo.svg";
import { useTranslation } from "react-i18next";

import { products } from "@/data/products";
import ProductGrid from "@/components/product/product-grid";

const Homepage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <img src="/assets/img/high-resolution.webp" alt="Wild" width="100%" />
      </div>
      <div className="container mx-auto flex flex-col">
        <h2>{import.meta.env.REACT_APP_APP_NAME}</h2>
        <p>{import.meta.env.mode}</p>

        <div>
          <h1 className="text-3xl font-bold text-blue-600">{t("welcome")}</h1>
          <img src={siteLogo} alt="React logo" width={100} height={24} />
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
