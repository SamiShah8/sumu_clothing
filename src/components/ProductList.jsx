import SortList from "./SortList.jsx";
import CategoryList from "./CategoryList.jsx";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

const url = "https://api.freeapi.app/api/v1/public/randomproducts?query=";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("mens-watches");
  const [imgLoadCount, setImgLoadCount] = useState(0);

  const handleImgLoad = () => {
    setImgLoadCount(imgLoadCount + 1);
  };

  useEffect(() => {
    if (imgLoadCount === products.length) {
      console.log(imgLoadCount, products.length);
      setIsLoading(false);
    } else {
    }
  }, [imgLoadCount]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url + query)
      .then((response) => {
        setProducts(response.data.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (isAxiosError(err)) {
          if (err.response) {
            setError(
              "error from server. don't know the message format yet. we will create our own server and send the agreed msg format between client and server"
            );
          } else if (err.request) {
            setError(err.message);
          }
        } else {
          setError("something went wrong......");
        }
        setIsLoading(false);
      });
  }, [query]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="loading-spinner border-[8px] border-t-blue-500 border-t-[8px] border-gray-300 rounded-[50%] h-[40px] w-[40px]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto flex  w-[95%] justify-center">
      {/* collection */}
      <CategoryList updateCategoryQuery={setQuery} className="hidden " />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 flex-1 lg:grid-cols-3  lg:gap-8 md:gap-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-[100vh]">
            <div className="loading-spinner border-[8px] border-t-blue-500 border-t-[8px] border-gray-300 rounded-[50%] h-[40px] w-[40px]"></div>
          </div>
        ) : (
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="relative border-2 border-gray-200 rounded-lg hover:border-blue-500"
              >
                {/* product image  */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    onLoad={handleImgLoad}
                    src={product.thumbnail}
                    className="h-full w-full rounded-lg transition-transform duration-300 hover:scale-105 ease-in-out product-img"
                    alt={product.title}
                  />
                </div>
                {/* product price and title  */}
                <div className="flex border-2 items-center absolute bottom-3 py-1.5 px-3 justify-between gap-4 left-2 border-gray-200 bg-white rounded-full">
                  <p className="text-xs font-semibold">{product.brand}</p>
                  <div className="bg-blue-500 rounded-full p-2 text-sm text-white font-semibold">
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* short by */}
      <SortList updateQuery={setQuery} className="hidden md:block" />
    </div>
  );
}
