import Carousel from "./Carousel";
function Images() {
  const img1 = {
    id: 1,
    img: "https://i.pinimg.com/474x/90/cb/59/90cb598d9a360cac4c20fe7a1871967e.jpg",
  };
  const img2 = {
    id: 2,
    img: "https://i.pinimg.com/474x/26/7a/17/267a177f119b8271b7e3521df6162776.jpg",
  };

  const img3 = {
    id: 3,
    img: "https://i.pinimg.com/474x/1c/84/a2/1c84a278fcfaf318b68ee536aeaf872e.jpg",
  };

  const img4 = {
    id: 4,
    img: "https://i.pinimg.com/474x/34/4c/42/344c425f2125d610c97365651958e8c4.jpg",
  };

  const img5 = {
    id: 5,
    img: "https://i.pinimg.com/474x/4f/67/70/4f677080b18c1520aafce19b7f63bf14.jpg",
  };

  const images = [img3, img4, img5, img1, img2];
  return (
    <div className="flex items-center mx-auto w-[95%] ">
      <div className="h-screen flex justify-end  w-[100%] ">
        <Carousel img={images} />
      </div>
    </div>
  );
}
export default Images;
