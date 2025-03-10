import axios from "axios";
import { useState, useEffect } from "react";
function BestSeller() {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setCatagories(response.data.slice(0, 16));
      })
      .catch((err) => {
        console.log("there is an error", err);
      });
  }, []);
  return (
    <div className="border border-red-400">
      <div className="text-center text-5xl font-bold my-10 text-green-700">
        <h1>Best Sellings Products</h1>
      </div>
      {/* card */}
      <div className="h-[400px] w-[400px] flex overflow-x-auto ">
        <div className="border-2">
          <h1>Clothes</h1>
        </div>
        {catagories.map((catagory) => {
          return (
            <div key={catagory.id} className="border card border-yellow-500">
              <div className="object-cover">
                <img src={catagory.image} alt={catagory.title} />
              </div>
              <h1>
                {catagory.title.length > 8
                  ? catagory.title.slice(0, 8)
                  : catagory.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BestSeller;
