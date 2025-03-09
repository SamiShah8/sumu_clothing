import Images from "../components/Images";
import Trending from "../components/trending";
import BestSeller from "../components/BestSeller";

export default function Home() {
  return (
    <div>
      <Images />
      <Trending />
      <BestSeller />
    </div>
  );
}
