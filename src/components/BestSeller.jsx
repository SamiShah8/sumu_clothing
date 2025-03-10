import axios from "axios";
import { useState, useEffect } from "react";

function BestSeller() {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setCatagories(response.data.slice(0, 12));
      })
      .catch((err) => {
        console.log("there is an error", err);
      });
  }, []);
  const CatagoryList = [
    catagories.slice(0, 4),
    catagories.slice(4, 8),
    catagories.slice(8, 12),
  ];
  return (
    <div className=" p-6 w-[95%] mx-auto">
      <div className="text-center text-5xl font-bold my-10 text-green-700">
        <h1>Best Sellings Products</h1>
      </div>
      {/* 3 grid card */}

      <div className="innerProducts">
        {CatagoryList.map((group, index) => {
          return (
            <div
              key={index}
              className="border py-3 border-gray-300 rounded-2xl  hover:border-black"
            >
              <div className="text-center font-bold">
                <h2>Catagory {index + 1}</h2>
              </div>

              {/* displaying 4 item in each card */}

              <div className="grid grid-cols-2 gap-1 m-2 text-[0.8rem] text-center ">
                {group.map((catagory) => {
                  return (
                    <div className="cursor-pointer p-1">
                      <div className=" overflow-hidden border border-gray-300  flex items-center">
                        <img
                          src={catagory.image}
                          alt={catagory.title}
                          className="aspect-3/2 object-cover"
                        />
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
              <div className="text-blue-600 pl-2 hover:underline text-xs">
                <a href="#">Descover more.....</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BestSeller;
