import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover object-center"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-bold mt-2">
            {product.salePrice || product.price}
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {product.originalPrice}
              </span>
            )}
          </p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
