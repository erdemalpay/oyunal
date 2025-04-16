import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface Product {
  _id: number;
  name: string;
  price: number;
  category: number;
  imageUrl: string;
  description: string;
  slug?: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://apiv2.davinciboardgame.com/menu/items"
        );
        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }
        const data: Product[] = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    };

    fetchItems();
  }, []);

  // Filter products for categories 25 and 26, then by search term
  const filteredProducts = productsData
    .filter((product) => [25, 26].includes(product.category))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <a
              href={`https://kutuoyunual.com/${product?.slug}`}
              key={product._id}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-blue-600">
                    {product.price.toFixed(2)} TL
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-600 mt-8">Ürün bulunamadı.</div>
        )}
      </div>
    </div>
  );
}

export default App;
