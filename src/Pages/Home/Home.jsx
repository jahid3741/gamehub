import Banner from "../../Components/Banner";
import Newsletter from "../../Components/NewsLetter";
import useTitle from "../../Hooks/useTitle";
import PopularGames from "./PopularGames";


const Home = () => {

  useTitle("Home");

  return (
    <div className="w-11/12 mx-auto">

      <Banner />

      <PopularGames />

      <Newsletter />

    </div>
  );
};

export default Home;