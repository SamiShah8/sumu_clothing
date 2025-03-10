import axios from "axios";
import { useEffect, useState } from "react";

function Trending() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("there is an error", err);
      });
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <div className="text-center text-5xl font-bold my-10 text-green-700">
        <h1>Trending Products</h1>
      </div>
      <div className="overflow-x-auto  p-3 ">
        <div className="flex gap-8">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="hover:border border-gray-300 transition-shadow duration-300 rounded-t-2xl  rou border hover:shadow-xl"
              >
                <div className=" min-w-[300px] h-[300px] overflow-hidden  object-cover flex items-center hover:rounded-t-2xl p-6 border-b border-gray-300">
                  <img src={product.image} alt="there is trending img" />
                </div>
                <div className="p-2">
                  <p>
                    {product.title.length > 25
                      ? product.title.slice(0, 25) + "..."
                      : product.title}
                  </p>
                  <p className="text-red-500 text-[20px]">
                    NPR {product.price}
                  </p>
                  <p>({product.rating.rate})</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Trending;
